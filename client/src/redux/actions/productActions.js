import { setProducts, setLoading, setError, setProduct } from "../slices/products";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Something went wrong"
      )
    );
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Something went wrong"
      )
    );
  }
}