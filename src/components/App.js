import React from 'react';
import {data} from '../data';
import Navbar from './navbar';
import MovieCard from './moviecard';
import {addMovies,showFavouritie} from '../actions';
import {connect} from 'react-redux'; 
class App extends React.Component{
  componentDidMount()
  {
    this.props.dispatch(addMovies(data));
    // console.log('STATE',store.getState());
  }
  isMovieFavouritie=(movie)=>{
        const {movies}=this.props;
        const index=movies.favourities.indexOf(movie);
        if(index!=-1)
        {
          //movie found
          return true;
        }
        return false;
  }
  onChangeTab=(val)=>{
    this.props.dispatch(showFavouritie(val))
  }
  render(){
    const {movies,search}=this.props;
    const {list,favourities,showfavourities}=movies;
    // console.log('RENDER',this.props.store.getState());
    const display=showfavourities?favourities:list;
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
         <div className="tabs">
           <div className={`tab ${showfavourities?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
           <div className={`tab ${showfavourities?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourite</div>
         </div> 
         <div className="list">
           {display.map((movie,index) =>(
             <MovieCard 
             movie={movie} 
             key={`movie-${index}`}
              dispatch={this.props.dispatch}
              isFavouritie={this.isMovieFavouritie(movie)}/>
           ))}
         </div>
      </div>
      </div>
     );
   }
}
// class AppWrapper extends React.Component
// {
//   render()
//   {
//     return (
//       <StoreContext.Consumer>
//         {(store)=><App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }
function mapStateToProps(state)
{
  return {
    movies:state.movies,
    search:state.search
  }
}
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;
