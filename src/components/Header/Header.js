import React from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoutAction } from "../../store/actions/AuthAction";
import { isAuthenticated } from "../../store/selector/AuthSelector";

function Header(props) {
  const dispatch = useDispatch();
  function onLogout(e) {
    e.preventDefault();
    dispatch(logoutAction(props.history));
  }
  return (
    <div>
      <div className="bg-blue-400 text-white px-2 py-2 flex items-center">
        {/* <h2 className="font-bold text-lg mr-4">React Router</h2> */}
        <div>
          {!props.isAuthenticated && (
            <>
              <Link to="/" className="px-2">
                SignUp
              </Link>
              <Link to="/login" className="px-2">
                Login
              </Link>
            </>
          )}
          {props.isAuthenticated && (
            <>
              <button onClick={onLogout} className="px-2">
                Logout
              </button>
              <Link to="/home" className="px-2">
                Home
              </Link>
            </>
          )}

          {/* <Link to='/posts' className="px-2">Posts</Link> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default withRouter(connect(mapStateToProps)(Header));
