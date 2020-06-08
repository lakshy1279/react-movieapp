 import {ADD_MOVIES,ADD_TO_FAVOURITIES,REMOVE_FROM_FAVOURITIES,SHOW_FAVOURITIE} from '../actions';
 import {combineReducers} from 'redux';
 const initalMoviesState={
     list:[],
     favourities:[],
     movie:true,
     showfavourities:false
 }
 export function movies (state=initalMoviesState,action)
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
        case ADD_TO_FAVOURITIES:
          return {
              ...state,
              favourities:[action.movie,...state.favourities]
          }
        case REMOVE_FROM_FAVOURITIES:
          const filteredArray=state.favourities.filter(
            movie =>movie.Title!==action.movie.Title
          );
          return {
            ...state,
            favourities:filteredArray
          };
        case SHOW_FAVOURITIE:
          return {
            ...state,
            showfavourities:action.val
          };
        default:
            return state
    }
 }
const initalSearchState={
   result:{

   }
}
 export function search(state=initalSearchState,action)
 {
    return state;
 }
 const initalRootState={
   movies:initalMoviesState,
   search:initalSearchState
 }
//  export default function rootReducer(state=initalRootState,action)
//  {
//    return {
//      movies:movies(state.movies,action),
//      search:search(state.search,action)
//    }
//  }
 export default combineReducers({
   movies,
   search
 })