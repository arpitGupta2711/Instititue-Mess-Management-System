import * as api from "../api";

export const getMenu = () => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.fetchMenu();
    console.log(data);
    // dispatch({ type: FETCH_ALL, payload: data });
    // dispatch({ type: END_LOADING });
  } catch (err) {
    console.log(err.message);
  }
};
