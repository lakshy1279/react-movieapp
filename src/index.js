import React from 'react';
import {Provider} from 'react-redux';
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
  }
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//    if(typeof action==='function')
//    {
//      action(dispatch);
//      return;
//    }
//   next(action);
// }
// export const StoreContext=createContext();
const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);
// class Provider extends React.Component
// {
//   render()
//   {
//     const {store}=this.props;
//     return( <StoreContext.Provider value={store}>
//           {this.props.children}
//     </StoreContext.Provider>
//     );
//   }
// }
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
// console.log('AFTER STATE',store.getState());
// export function connect (callback) {
//    return function (Component) {
//      class ConnectedComponent extends React.Component{
//       constructor(props)
//       {
//         super(props);
//         this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());
//       }
//       componentWillUnmount()
//       {
//         this.unsubscribe();
//       }
//         render(){
          
//               const {store}=this.props;
//               const state=store.getState();
//               const dataToBePassedAsprops=callback(state);
//               return(<Component {...dataToBePassedAsprops}
//               dispatch={store.dispatch} />
//           );
//         }
//      }
//   class ConnectedComponentWrapper extends React.Component{
//     render(){
//       return(
//         <StoreContext.Consumer>
//           {(store)=><ConnectedComponent store={store}/>}
//         </StoreContext.Consumer>
//       );
//     }
//   }
//   return ConnectedComponentWrapper;
//    }
// }
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

