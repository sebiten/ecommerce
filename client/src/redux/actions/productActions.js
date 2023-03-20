import { setProducts, setLoading, setError } from "../slices/products";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get("/api/products");
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
}