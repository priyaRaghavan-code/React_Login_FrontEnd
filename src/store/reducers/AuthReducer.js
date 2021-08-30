import React from 'react';
import { LOADING_TOGGLE_ACTION, LOGIN_CONFIRMED_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION, SIGNUP_CONFIRMED_ACTION, SIGNUP_FAILED_ACTION } from '../actions/AuthAction';

const initialState = {
    auth: {
      email:'',
      id:'',
      created_at:'',
      updated_at:'',
      password_digest:'',
      name:'',
      username:'',
      token:'',
      exp:'',
    },
  errorMessage: '',
  successMessage: '',
  showLoading: false,

}

export default function AuthReducer(state = initialState, action) {
  if(action.type === SIGNUP_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: action.payload,
      errorMessage: '',
      successMessage: 'Signup Successfully Completed',
      showLoading: false,
    };
  }

  if(action.type === SIGNUP_FAILED_ACTION || action.type === LOGIN_FAILED_ACTION) {
    return {
      ...state,
      errorMessage: action.payload,
      successMessage: '',
      showLoading: false,
    };
  }

  if(action.type === LOGIN_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: action.payload,
      errorMessage: '',
      successMessage: 'Logged in Successfully',
      showLoading: false,
    };
  }

  if(action.type === LOGOUT_ACTION){
    debugger;
    return {
      ...state,
      errorMessage: '',
      successMessage: 'Logged out successfully',
      auth: {
        email: '',
        token: '',
        exp: '',
      },
    };
  }

  if(action.type === LOADING_TOGGLE_ACTION){
    return {
      ...state,
      showLoading: action.payload,
    }
  }
  return state;
}
