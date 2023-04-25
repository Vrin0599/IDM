import { create } from "axios";
import config from "../config/config";

export const authAxios = create({
  baseURL: config[process.env.NODE_ENV || "development"].FRAMEWORK_SHELL_URL,
});

export const getUserDetails = (token) => {
  const headers = { authorization: token, "Content-Type": "application/json" };
  return authAxios.get("/auth/get_user_details", { headers });
};
