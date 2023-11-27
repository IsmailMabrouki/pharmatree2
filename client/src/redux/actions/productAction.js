// productAction.js
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
  payload: data,
});

export const fetchMedicineProductsFailure = (error) => ({
  type: FETCH_MEDICINE_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchMedicineProducts = () => async (dispatch) => {
  console.log("Action: fetchMedicineProductsRequest");
  dispatch(fetchMedicineProductsRequest());
  try {
    const response = await axios.get('http://localhost:3600/api/products');
    console.log("Action: Successful response", response.data);

    if (response.status !== 200) {
      throw new Error('Error!');
    }

    dispatch(fetchMedicineProductsSuccess(response.data));
  } catch (error) {
    console.log("Action: Error", error.message);
    dispatch(fetchMedicineProductsFailure(error.message));
  }
};
