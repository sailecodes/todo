import { redirect } from "react-router-dom";
import axiosFetch from "../utilities/axiosFetch";

const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axiosFetch.post("/auth/login", data);
    console.log(response?.data?.msg);
    return redirect("/dashboard");
  } catch (error) {
    console.error(error?.response?.data?.msg);
    return error;
  }
};

export default action;
