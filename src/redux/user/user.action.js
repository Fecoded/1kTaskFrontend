import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
} from "./user.types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import Alert from "../alert";

const url = "https://aqueous-depths-91889.herokuapp.com/api";

// LOAD USER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${url}/me`);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.message,
    });
  }
};

// USER LOGIN
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(`${url}/login`, body, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.message;

      if (errors.password && errors.password.length > 0) {
        Alert(errors.password[0], "error");
      }

      Alert(err.response.data.message, "error");

      dispatch({
        type: LOGIN_FAIL,
        payload: errors,
      });
    }
  };

// REGISTER USER
export const register =
  ({ firstname, lastname, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ firstname, lastname, email, password });

    try {
      const res = await axios.post("/api/register", body, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.msg;

      // if (errors) {
      //   dispatch(setAlert(errors, 'danger'));
      // }
      dispatch({
        type: LOGIN_FAIL,
        payload: errors,
      });
    }
  };

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
