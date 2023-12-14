
import axios from "axios";
import Cookies from "js-cookie";

const MainURL="https://charitybackend.vercel.app"
// const MainURL="http://localhost:8000"

const UserApi = MainURL+"/users";
const DonationApi=MainURL+"/donation";
const PaymentURL=MainURL+"/payment";

let token = Cookies.get("User-token");

export const LoginRequest = (body) => {
  return axios.post(UserApi + "/login", body);
};

export const RegisterRequest = (body) => {
  return axios.post(UserApi + "/register", body);
};

export const LogoutRequest = () => {


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
export const DonationRequest = (params) => {
console.log(params)
    return axios.get(
      DonationApi+"/",params
    );
  };

//Volunteer Get Data
export const DonationRequestVolunteer = () => {

      return axios.get(
        DonationApi+"/voulnteer",{ headers: {
          Authorization: `Bearer ${token}`,
        }}
      );
    };
//All Uesr Data

export const AllUserDataRequest=()=>{
  return axios.get(UserApi+"/all-user-data");
}

//Add Donation Data
export const AddDonationRequest = (obj) => {
  let token = Cookies.get("User-token");
  return axios.post(
    DonationApi+"/add", obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Patch Donation Data
export const PatchDonationRequest = (id ,obj) => {
 
  return axios.patch(
    DonationApi+"/patch/"+id,obj
  );
}

//Delete Donation Data
export const DeleteDonationRequest = (id) => {
  return axios.delete(
    DonationApi+"/delete/"+id
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

//Payment Add
export const PaymentAddRequest = (body) => {
  return axios.post(PaymentURL + "/add", body);
};

//Catch Payment By Donation ID
export const CatchPaymentByDonationIdRequest = (id) => {
  return axios.get(PaymentURL+"/",{params:{donation_id:id}});
};

//Catch Payment By User ID
export const CatchPaymentByUserIdRequest = (id) => {
  return axios.get(PaymentURL+"/",{params:{user_id:id}});
};


//Get Volunteers
export const GetVolunteersRequest = () => {
  return axios.get(UserApi+"/get-volunteers");
};

//Forget Password Link
export const ForgetPassword = (obj) => {
  Cookies.set("forget-password-email", obj.email, { expires: 5 / (24 * 60) });
  return  axios.post(UserApi + "/forget-password", obj);     
};

//Reset Password Link
export const ResetPasswordRequest = (obj) => {
  return  axios.patch(UserApi + "/reset-password", obj);     
};

//Patch the user
export const PatchUserRequest = (id,obj) => {
  return  axios.patch(UserApi+"/patch/"+id, obj);     
};










