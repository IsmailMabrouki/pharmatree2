import {
  FETCH_MEDICINE_PRODUCTS_REQUEST,
  FETCH_MEDICINE_PRODUCTS_SUCCESS,
  FETCH_MEDICINE_PRODUCTS_FAILURE,
} from '../types';
import axios from 'axios';

export const fetchMedicineProductsRequest = () => ({
  type: FETCH_MEDICINE_PRODUCTS_REQUEST,
});

export const fetchMedicineProductsSuccess = (data) => ({
  type: FETCH_MEDICINE_PRODUCTS_SUCCESS,
  data,
});

export const fetchMedicineProductsFailure = (error) => ({
  type: FETCH_MEDICINE_PRODUCTS_FAILURE,
  error,
});

export const fetchMedicineProducts = () => async (dispatch) => {
  dispatch(fetchMedicineProductsRequest());

  try {
    // Perform an API request here using Axios
    const response = await axios.get('http://localhost:3600/api/products/');
    const data = response.data;

    dispatch(fetchMedicineProductsSuccess(data));
  } catch (error) {
    dispatch(fetchMedicineProductsFailure(error.message));
  }
};
