import React from 'react';
import { SIGNUP_CONFIRMED_ACTION } from '../actions/AuthAction';

const initialState = {
    auth: {
      email:'',
      id:'',
      created_at:'',
      updated_at:'',
      password_digest:'',
      name:'',
      username:''
    },
}

export default function AuthReducer(state = initialState, action) {
  if(action.type === SIGNUP_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: action.payload
    }
  }
  return state;
}
