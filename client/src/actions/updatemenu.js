import * as api from "../api";

export const UpdateMenu = async (data) => {
  try {
    const updatedMenu = await api.updateMenu(data);
    console.log(updatedMenu);
    return updatedMenu;
  } catch (err) {
    console.log(err);
  }
};
