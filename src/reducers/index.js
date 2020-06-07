 import {ADD_MOVIES,ADD_FAVOURITIES} from '../actions';

 const initalMoviesState={
     list:[],
     favourities:[]
 }
 export default function movies (state=initalMoviesState,action)
 {
    // if(action.type===ADD_MOVIES)
    // {
    //     return {
    //      ...state,
    //      list:action.movies
    //     };
    // }
    switch(action.type)
    {
        case ADD_MOVIES:
         return {
         ...state,
         list:action.movies
          }
        case ADD_FAVOURITIES:
          return {
              ...state,
              favourities:[action.movie,...state.favourities]
          }
        default:
            return state
    }
    return state;
 }