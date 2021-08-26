import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createPostAction} from '../../actions/PostActions';

class Posts extends Component{
  onCreatePost(){
    this.props.createPost();
  }
  render(){
    const posts = [];
    for (let post of this.props.posts){
      posts.push(
      <div key={post.id} className='shadow border p-3 mx-3 mt-3 w-1/3'>
        <div>{post.description}</div>
        <div>{post.title}</div></div>,)
    }
    return(
      <div>
        <h2 className="bolder text-lg">
        Posts
        </h2>
        <div>
          <button onClick={this.onCreatePost.bind(this)} className="bg-red-300 px-3 py-2">Create Post</button>
          <hr />
          <div className='flex'>{posts}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts,
};
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: ()=> dispatch(createPostAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
