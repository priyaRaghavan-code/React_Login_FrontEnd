import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from './store/selector/AuthSelector';
import { connect } from 'react-redux';

function App(props) {
  return (
    // <BrowserRouter>
    <div>
      <Header />
        <div className='container px-3 mx-auto'>
        <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path='/home' component={Home} />
            <Route  path="/login" component={Login} />
          </Switch>
        </div>
    </div>
    // </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
}

export default withRouter(connect(mapStateToProps)(App));
