 import {ADD_MOVIES} from '../actions';

 const initalMoviesState={
     list:[],
     favourities:[]
 }
 export default function movies (state=initalMoviesState,action)
 {
    if(action.type===ADD_MOVIES)
    {
        return {
         ...state,
         list:action.movies
        };
    }
    return state;
 }