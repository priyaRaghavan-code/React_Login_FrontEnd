import axios from "axios";
import React from "react";
import { confirmedLoginAction, logoutAction } from "../actions/AuthAction";

export function SignUp(name, username, email, password, password_confirmation) {
  const postData = {
    name,
    email,
    password,
    password_confirmation,
    username,
  };
  // console.log(postData)
  return axios.post(process.env.RAILS_APP_REG_API, postData);
}

export function login(email, password) {
  const postData = {
    email,
    password,
  };
  return axios.post(process.env.RAILS_APP_LOGIN_API, postData);
}

export function formatError(errorResponse) {
  debugger;
  console.log(errorResponse);
  console.log(errorResponse.error);
  const arr = errorResponse.error.split(", ");
  var result = [];
  console.log(arr);
  console.log(errorResponse.error);
  for (var i = 0; i < arr.length; i++) {
    var errorMsg = arr[i];
    switch (errorMsg) {
      case "Password confirmation doesn't match Password":
        result.push("Password confirmation doesn't match Password");
        break;
      case "Email has already been taken":
        result.push("Email has already been taken");
        break;
      case "Password is invalid":
        result.push(
          "Password should contain minimum one uppercase,lowercase,special character,number and length should be minimum 8"
        );
        break;
      case "Email is invalid":
        result.push("Email is invalid");
        break;
      case "Check your credentials":
        result.push("Check your credentials");
        break;
      default:
        return "";
    }
  }
  if (result.length === 0) {
    return "";
  } else {
    const resultErrors = result.join();
    return resultErrors;
  }
}

export function loginFormatError(errorResponse) {
  console.log(errorResponse.error);
  switch (errorResponse.error) {
    case "unauthorized":
      // console.log([errorResponse.errors.email])
      return "Email and password doesn't match";
    default:
      return "";
  }
}

export function saveTokenInLocalStorage(tokenDetails) {
  tokenDetails.expireDate = new Date(
    new Date().getTime + tokenDetails.exp * 1000
  );
  localStorage.setItem("userDetail", JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer) {
  setTimeout(() => {
    dispatch(logoutAction());
  }, timer);
}

export function checkAutoLogin(dispatch) {
  debugger;
  const tokenDetailsString = localStorage.getItem("userDetails");
  let tokenDetails = "";
  if (!tokenDetailsString) {
    dispatch(logoutAction());
    return;
  }
  tokenDetails = JSON.parse(tokenDetailsString);
  let expireDate = new Date(tokenDetails.expireDate);
  let todayDate = new Date();

  if (todayDate > expireDate) {
    dispatch(logoutAction());
    return;
  }
  dispatch(confirmedLoginAction(tokenDetails));
  let timer = expireDate.getTime() - todayDate.getTime();
  runLogoutTimer(dispatch, timer);
}
