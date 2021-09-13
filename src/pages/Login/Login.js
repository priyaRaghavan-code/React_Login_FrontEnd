import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import {
  loadingToggleAction,
  loginAction,
} from "../../store/actions/AuthAction";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);

  const dispatch = useDispatch();

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is required";
      error = true;
    }

    setErrors(errorObj);
    if (error) {
      return;
    }
    dispatch(loadingToggleAction(true));
    dispatch(loginAction(email, password, props.history));
  }

  return (
    <div className="flex justify-center my-5">
      {/* {props.showLoading && <Loader /> } */}
      <div className="w-1/3 shadow p-3 border border-grey-400">
        <h1 className="text-2xl font-extrabold">Login</h1>
        {props.errorMessage && (
          <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
            {props.errorMessage}
          </div>
        )}
        {props.successMessage && (
          <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
            {props.successMessage}
          </div>
        )}

        <form onSubmit={onLogin}>
          <div>
            <label>Email</label>
            <div>
              <input
                type="text"
                className="border border-gray-600 p-1 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>
          <div className="my-3">
            <button type="submit" className="bg-green-300 text-black px-3 py-1">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Login);
