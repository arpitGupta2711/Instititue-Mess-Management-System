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
// export const getPost = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     const { data } = await api.fetchPost(id);
//     console.log(data);
//     dispatch({ type: FETCH_POST, payload: data });
//     dispatch({ type: END_LOADING });
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     const {
//       data: { data },
//     } = await api.fetchPostBySearch(searchQuery);
//     dispatch({ type: FETCH_BY_SEARCH, payload: data });
//     dispatch({ type: END_LOADING });

//     console.log("The fetch by search data is ", data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const createPost = (post, history) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });

//     const { data } = await api.createPost(post);
//     history.push(`/posts/${data._id}`);
//     dispatch({ type: CREATE, payload: data });

//     //  dispatch({type:END_LOADING})
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatedPost(id, post);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);
//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);
//     console.log("Hello", data);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const commentPost = (value, id) => async (dispatch) => {
//   try {
//     const { data } = await api.comment(value, id);
//     dispatch({ type: COMMENT, payload: data });
//     return data.comments;
//   } catch (error){
//     console.log(error);
//   }
// };
