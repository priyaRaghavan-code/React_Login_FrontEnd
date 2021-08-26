import axios from "axios";
import { Next } from "react-bootstrap/esm/PageItem";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { GET_POSTS } from "../actions/PostActions";
import AuthReducer from "../reducers/AuthReducer";
import PostsReducer from "../reducers/PostsReducer";
import thunk from 'redux-thunk';

const loggerMiddleWare =(store) => (next) =>(action) =>{
  console.log("dispatching the action",action);
  const act =  next(action);
  console.log("next state",store.getState())
  return act;

}

const fetchDataMiddleWare=store => next=> action =>{
  if(action.type === GET_POSTS){
    axios.get(`https:`)
  }
  return next(action);
}
const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  auth: AuthReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,composeEnhancers(middleware));



// function exampleMiddileWare(store){
//   return function(next){
//     return function(action){
//       return next(action)
//     };
//   };
// }
