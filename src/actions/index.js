import axios from "axios";


export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    dispatch ({type: "FETCH_POSTS", payload: response.data })
  }
}

export const fetchUser = (id) => async dispatch => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
  dispatch({type: "FETCH_USER", payload:response.data})
}
