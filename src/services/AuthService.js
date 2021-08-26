import axios from 'axios';
import React from 'react';


export default function SignUp(name,username,email,password,password_confirmation) {
  const postData = {
    name,email, password, password_confirmation,username
  };
  debugger;
  console.log(postData)
  return axios.post
      (`http://localhost:3001/users`,
      postData,
      );
}
