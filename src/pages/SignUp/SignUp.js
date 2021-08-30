import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { loadingToggleAction, SignUpAction } from '../../store/actions/AuthAction';
import Loader from '../../components/Loader/Loader';

function SignUp(props) {
  const[name,setName] = useState('');
  const[username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[password_confirmation,setPasswordConfirmation] = useState('');
  let errorsObj = {email: '', password:'',name:'',username:'',password_confirmation:''}
  const[errors,setErrors] = useState(errorsObj);

  const dispatch = useDispatch();

  function onSignUp(e){
    e.preventDefault();
    let error = false;
    const errorObj = {...errorsObj};
    if(email===''){
      errorObj.email = 'Email is required';
      error = true;
    }
    if(name===''){
      errorObj.name = 'Name is required';
      error = true;
    }
    if(username===''){
      errorObj.username = 'UserName is required';
      error = true;
    }
    if(password===''){
      errorObj.password = 'Password is required';
      error = true;
    }
    if(password_confirmation===''){
      errorObj.password_confirmation = 'Confirm Password is required';
      error = true;
    }

    setErrors(errorObj);
    if (error) {
      return;
    }
    dispatch(loadingToggleAction(true));
    debugger;
    dispatch(SignUpAction(name,username,email,password,password_confirmation,props.history))
  }

  return (
    <div className="flex justify-center my-5">
      {props.showLoading && <Loader /> }
      <div className="w-1/3 shadow p-3 border border-grey-400">
        <h1 className="text-2xl font-extrabold">Sign Up</h1>
        {props.errorMessage && <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">{props.errorMessage}</div>}
        {props.successMessage && <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">{props.successMessage}</div>}

        <form onSubmit={onSignUp}>
          <div>
            <label>Name</label>
              <div>
                <input 
                  type="text" 
                  className="border border-gray-600 p-1 w-full"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
          <div>
            <label>Username</label>
              <div>
                <input 
                  type="text" 
                  className="border border-gray-600 p-1 w-full"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              {errors.username && <div className="text-red-500">{errors.username}</div>}
              
          </div>
          <div>
            <label>Email</label>
              <div>
                <input 
                  type="text" 
                  className="border border-gray-600 p-1 w-full"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              {errors.email && <div className="text-red-500">{errors.email}</div>}

          </div>
          <div>
            <label>Password</label>
              <div>
                <input 
                  type="password" 
                  className="border border-gray-600 p-1 w-full"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              {errors.password && <div className="text-red-500">{errors.password}</div>}

          </div>
          <div>
            <label>Confirm Password</label>
              <div>
                <input 
                  type="password" 
                  className="border border-gray-600 p-1 w-full"
                  value={password_confirmation}
                  onChange={(e)=>setPasswordConfirmation(e.target.value)}
                />
              </div>
              {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>}

          </div>
          <div className="my-3">
            <button type="submit" className="bg-green-300 text-black px-3 py-1">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  }
}

export default connect(mapStateToProps)(SignUp);
