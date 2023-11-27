// productReducer.js
import {
  FETCH_MEDICINE_PRODUCTS_REQUEST,
  FETCH_MEDICINE_PRODUCTS_SUCCESS,
  FETCH_MEDICINE_PRODUCTS_FAILURE,
} from '../types';

const initialState = {
  medicineProducts: [],
  isLoading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEDICINE_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null };

    case FETCH_MEDICINE_PRODUCTS_SUCCESS:
      return {
        ...state,
        medicineProducts: action.payload,
        isLoading: false,
        error: null,
      };

    case FETCH_MEDICINE_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
