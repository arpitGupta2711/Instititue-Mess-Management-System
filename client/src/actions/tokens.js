import * as api from "../api";

export const viewTokens = async (data) => {
  try {
    const tokens = await api.viewTokens(data);
    return tokens;
  } catch (err) {
    console.log(err);
  }
};
