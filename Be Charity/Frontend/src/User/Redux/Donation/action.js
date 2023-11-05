



import { CatchPaymentByDonationIdRequest, DonationRequest, DonationSingleRequest, GetDataByUserId } from '../../Utilis/api';
import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAILURE,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_ORGANIZER,
    SINGLE_PRODUCT_PAYMENT,
  } from '../actionTypes'; 

  
  export const getProductsData = (params) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
   DonationRequest(params)
    .then((res) =>{
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data })})
      .catch(() => dispatch({ type: PRODUCT_FAILURE }));
  };
  
  export const getSingleProductData = (id) => (dispatch)=> {
    dispatch({ type: PRODUCT_REQUEST });
   DonationSingleRequest(id)
      .then((res) => {
   
        dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: res.data });
   let data_id=res.data._id;
        let organizer_id=res.data.organizer;
   
        GetDataByUserId(organizer_id).then((res)=>{
         
            dispatch({type:SINGLE_PRODUCT_ORGANIZER,payload:res.data})
            CatchPaymentByDonationIdRequest(data_id).then(res=>{
                
                
                dispatch({type:SINGLE_PRODUCT_PAYMENT,payload:res.data})
            })
        })
      
      
      })
      .catch(() => dispatch({ type: PRODUCT_FAILURE }));
  };