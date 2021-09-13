// import { SignUp,formatError } from "./store/services/AuthService";

import {
  SignUp,
  formatError,
  login,
  saveTokenInLocalStorage,
  runLogoutTimer,
} from "../services/AuthService";

export const SIGNUP_CONFIRMED_ACTION = "[signup action] confirmed signup";
export const SIGNUP_FAILED_ACTION = "[signup action] failed signup";
export const LOADING_TOGGLE_ACTION = "[loading action] toggle loading";
export const LOGIN_CONFIRMED_ACTION = "[login action] confirmed login";
export const LOGIN_FAILED_ACTION = "[login action] failed login";
export const LOGOUT_ACTION = "[logout action] logout action";

export function SignUpAction(
  name,
  username,
  email,
  password,
  password_confirmation,
  history
) {
  return (dispatch) => {
    SignUp(name, username, email, password, password_confirmation)
      .then((response) => {
        debugger;
        console.log(response);
        debugger;
        saveTokenInLocalStorage(response.data);
        runLogoutTimer(dispatch, response.data.exp * 1000);

        dispatch(confirmedSignUpAction(response.data));
        history.push("/");
      })
      .catch((error) => {
        debugger;
        console.log(error.response.data.error, "Reg Error");
        debugger;
        const errorMessage = formatError(error.response.data);
        dispatch(signupFailedAction(errorMessage));
      });
  };
}

export function loginAction(email, password, history) {
  return (dispatch) => {
    login(email, password)
      .then((response) => {
        debugger;

        saveTokenInLocalStorage(response.data);
        runLogoutTimer(dispatch, response.data.exp * 1000);
        debugger;
        console.log(response.data.exp);
        dispatch(confirmedLoginAction(response.data));
        history.push("/home");
      })
      .catch((error) => {
        debugger;
        // console.log(error.response.data.error, "Login Error");
        const errorMessage = formatError(error.response.data);
        dispatch(loginFailedAction(errorMessage));
      });
  };
}

export function logoutAction(history) {
  localStorage.removeItem("userDetail");
  // history.push("/login");
  return {
    type: LOGOUT_ACTION,
  };
}

export function confirmedSignUpAction(payload) {
  return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
  };
}

export function signupFailedAction(message) {
  return {
    type: SIGNUP_FAILED_ACTION,
    payload: message,
  };
}

export function confirmedLoginAction(message) {
  return {
    type: LOGIN_CONFIRMED_ACTION,
    payload: message,
  };
}

export function loginFailedAction(data) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: data,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}
