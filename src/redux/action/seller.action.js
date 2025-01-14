import axios from "axios";

export const getSeller = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_SELLER_PENDING" });
    const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/seller`);

    console.log(result.data.data);
    const seller = result.data.data;

    dispatch({ type: "GET_SELLER_SUCCESS", payload: seller });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_SELLER_ERROR" });
  }
};

export const getSellerDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SELLER_DETAIL_PENDING" });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/seller/${id}`
    );

    console.log(result.data.data);
    const seller = result.data.data;

    dispatch({ type: "GET_SELLER_DETAIL_SUCCESS", payload: seller });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_SELLER_DETAIL_ERROR" });
  }
};
