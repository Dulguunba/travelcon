import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ("https://-so3p.onrender.combackenddeploy");

export const instance = axios.create({
  baseURL: "http://localhost:8900",
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});

export const createTravelInfo = async (data: {} | null) => {
  try {
    const response = await instance.post("/travel/create", data);
  } catch (error) {
    return alert(`Та дахин оролдоно уу.`);
  }
};

export const getTravel = async (set: Function) => {
  try {
    const response = await instance.get("/travel/get");
    set(response.data.result);
  } catch (error) {
    return alert(`Уучлаарай алдаа үүслээ`);
  }
};

export const getDestination = async (set: Function) => {
  try {
    const response = await instance.get("/destination/get");
    set(response.data.result);
  } catch (error) {
    return alert(`Уучлаарай алдаа үүслээ`);
  }
};

export const showToastMessage = () => {
  toast.success(
    "Мэдээлэл амжилттай хадгалагдлаа. Та NEXT товчийг дарна уу.",
    {}
  );
};
