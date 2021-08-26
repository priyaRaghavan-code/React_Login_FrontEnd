import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
        <div className='container px-3 mx-auto'>
          <Switch>
            {/* <Route path='/posts' component={Posts} /> */}
            <Route path='/' component={SignUp} />
            <Route path='/home' component={Home} />

          </Switch>
          {/* <Posts /> */}
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
