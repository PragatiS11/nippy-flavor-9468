import axios from "axios";
import Cookies from "js-cookie";

const UserApi = "http://localhost:8000/users";

export const LoginRequest = (body) => {
  return axios.post(UserApi + "/login", body);
};

export const RegisterRequest = (body) => {
  return axios.post(UserApi + "/register", body);
};

export const LogoutRequest = () => {
  let token = Cookies.get("User-token");

  return axios.get(
    UserApi + "/logout",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const UserDataRequest = () => {
  let token = Cookies.get("User-token");
  return axios.get(
    UserApi + "/user-data",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
