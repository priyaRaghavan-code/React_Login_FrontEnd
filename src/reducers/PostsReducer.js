import React from 'react';
import { CREATE_POST_ACTION } from '../actions/PostActions';

const initialState = { 
  posts: [{id:1, title:'Pst1', description:'book'},
  {id:2, title:'Pst2', description:'book'}
],
};

export default function PostsReducer(state=initialState,actions) {
  if(actions.type === CREATE_POST_ACTION){
    const post =  {id:4, title:'Pst3', description:'KS'};
    const posts = [...state.posts];
    posts.push(post);
    return {
      ...state,
      posts,
    }

  }
  return state;
}
