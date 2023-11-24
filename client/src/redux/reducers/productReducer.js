// productReducer.js
import * as types from '../types';
  
  const initialState = {
    medicineProducts: [],
    isLoading: false,
    error: null,
  };
  
 
  const medicineProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_MEDICINE_PRODUCTS_REQUEST:
        return { ...state, isLoading: true, error: null };
  
  
      case types.FETCH_MEDICINE_PRODUCTS_SUCCESS:
        return { ...state, isLoading: false, medicineProducts: action.data};
  
      case types.FETCH_MEDICINE_PRODUCTS_FAILURE:
        return { ...state, isLoading: false, error: action.error };
  
      default:
        return state;
    }
  };

  
  export default medicineProductsReducer;
  