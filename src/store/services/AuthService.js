import axios from 'axios';
import React from 'react';


export function SignUp(name,username,email,password,password_confirmation) {
  const postData = {
    name,email, password, password_confirmation,username
  };
  debugger;
  // console.log(postData)
  return axios.post
      (`https://auth123-app-backend.herokuapp.com/users`,
      postData,
      );
}

export function login(email,password) {
  const postData = {
    email, password
  };
  return axios.post
      (`https://auth123-app-backend.herokuapp.com/auth/login`,
      postData,
      );
}


export function formatError(errorResponse){
  debugger;
  console.log(errorResponse.error)
  switch(errorResponse.errors.email[0]){
    case 'has already been taken':
      debugger;
      console.log([errorResponse.errors.email])
      return "Email Already Exists";
    default:
        return ''
  }
  // if (errorResponse.errors.email[0] === 'has already been taken') {
  //         debugger;
  //         console.log(errorResponse.errors.email)
  //         return "Email Already Exists"
  // }
  // else if (errorResponse.error === 'unauthorized') {
  //   return "Email and password doesn't match";
  // }

  // else {
  //   return "";
  // }
  
}

export function loginFormatError(errorResponse){
  debugger;
  console.log(errorResponse.error)
  switch(errorResponse.error){
    case 'unauthorized':
      debugger;
      // console.log([errorResponse.errors.email])
      return "Email and password doesn't match";
    default:
        return ''
  }
}

export function saveTokenInLocalStorage(tokenDetails){
  debugger;
    localStorage.setItem('userDetail', JSON.stringify(tokenDetails));
}
