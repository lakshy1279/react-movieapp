import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger=function({dispatch,getState}) {
//     return function(next){
//       return function(action)
//       {
//         console.log('action-typr',action.type);
//         next(action);
//       }
//     }
// }

const logger=({dispatch,getState})=>(next)=>(action)=>{
  //loggercode
  if(typeof action!=='function'){
  console.log('action-type',action.type);
  next(action);
  }
}
const thunk=({dispatch,getState})=>(next)=>(action)=>{
   if(typeof action==='function')
   {
     action(dispatch);
     return;
   }
  next(action);
}
const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
// console.log('AFTER STATE',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

