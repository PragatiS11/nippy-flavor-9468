import axios from "axios";
import Cookies from "js-cookie";

const UserApi = "http://localhost:8000/users";
const DonationApi="http://localhost:8000/donation"
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

//All-data
export const DonationRequest = () => {
    return axios.get(
      DonationApi+"/"
    );
  };

  //Single-data
export const DonationSingleRequest = (id) => {
  return axios.get(
    DonationApi+"/"+id
  );
};

export const GetDataByUserId=(id)=>{
  return axios.get(UserApi+"/user-data-by-id/"+id);
};