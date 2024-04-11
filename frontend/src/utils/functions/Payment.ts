import { instance } from "@/functions/TravelUtilities";

export const pay = async (setQr: Function) => {
    try {
      const tokenRes = await instance.post(
        "https://merchant.qpay.mn/v2/auth/token",
        null,
        { headers: { Authorization: "Basic UE9XRVJfRVhQTzpvOXc4V0xoWg==" } }
      );
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

  const check = async () => {
    const checkRes = await instance.post("/check", {
      invoiceId: localStorage.getItem("invoiceId"),
      token: localStorage.getItem("paymentToken"),
    });
    if (checkRes.data.check.rows.length == 0) {
        console.log('paid');
        
    } else {
        console.log('not paid');
    }
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