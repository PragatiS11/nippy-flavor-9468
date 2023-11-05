


  import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT_ORGANIZER, SINGLE_PRODUCT_PAYMENT, SINGLE_PRODUCT_SUCCESS } from "../actionTypes";

  
  
  
  
  
  
  const initialState= {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct: {} ,
    organizer:{},
    payment:[]
  };
  
  
  

  export const reducer = (
    state = initialState,
    action 
  ) => {
    switch (action.type) {
      case PRODUCT_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case PRODUCT_FAILURE: {
        return {
          ...state,
          isError: true,
          isLoading: false,
        };
      }
      case PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          products: action.payload 
        };
      }
      case SINGLE_PRODUCT_SUCCESS: {
        return {
          ...state,
       
          singleProduct: action.payload 
        };
      }
      case SINGLE_PRODUCT_ORGANIZER:{
        return {
            ...state,
            isLoading: false,
            organizer:action.payload
        }
      }
      case SINGLE_PRODUCT_PAYMENT:{
        return {
            ...state,
            isLoading: false,
            payment:action.payload
        }
      }
      default:
        return state; 
    }
  };
  
  export default reducer;