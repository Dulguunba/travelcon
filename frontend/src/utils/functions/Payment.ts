import { instance } from "@/functions/TravelUtilities";
import axios from "axios";

export const pay = async (setQr: Function) => {
    try {
      console.log('check');
      
      const tokenRes = await axios.post(
        "https://merchant.qpay.mn/v2/auth/token",
        null,
        { headers: { Authorization: "Basic UE9XRVJfRVhQTzpvOXc4V0xoWg==" } }
      );
      console.log('token', tokenRes);
      
      const invoice = await instance.post("/createinvoice", {
        token: tokenRes.data.access_token,
      });
      console.log("first", invoice.data);
      setQr(invoice.data.invoiceId.qPay_shortUrl);
      localStorage.setItem("paymentToken", tokenRes.data.access_token);
      localStorage.setItem("invoiceId", invoice.data.invoiceId.invoice_id);
    } catch (error) {
      console.error("error in pay", error);
    }
  };

  export const checkPaymentBack = async (set: Function, orderId: string) => {
    const checkRes = await instance.post("/check", {
      invoiceId: localStorage.getItem("invoiceId"),
      token: localStorage.getItem("paymentToken"),
      orderId: orderId,
      
    });
    if (checkRes.data.check.rows.length == 0) {
set(true)        
    } else {
set(false)    }
  };

 export const createOrder = async ( set: Function, data: {})=>{
    try {
        console.log('data',data);
        
        const response = await instance.post("/order/create", data)
        // set(response.result._id)    
} catch (error) {
        alert('fail to create order')
    }
  }