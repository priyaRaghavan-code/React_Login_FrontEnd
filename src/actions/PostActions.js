import React from 'react';
export const CREATE_POST_ACTION = '[Post Action] Create Post';
export const GET_POSTS = '[Post Action] Get Posts';
export const CONFIRMED_GET_POST = '[Post Action] Confirmed Get Posts';




export  function createPostAction(state) {
  return {
    type: CREATE_POST_ACTION,
  };
}

export  function getPostAction(state) {
  return {
    type: GET_POSTS,
  };
}
export  function confirmedGetPostAction(state) {
  return {
    type: CONFIRMED_GET_POST,
  };
}