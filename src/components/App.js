import React from 'react';
import {data} from '../data';
import Navbar from './navbar';
import MovieCard from './moviecard';
import {addMovies,showFavouritie} from '../actions';
class App extends React.Component{
  componentDidMount()
  {
    const { store }=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    // console.log('STATE',store.getState());
  }
  isMovieFavouritie=(movie)=>{
        const {movies}=this.props.store.getState();
        const index=movies.favourities.indexOf(movie);
        if(index!=-1)
        {
          //movie found
          return true;
        }
        return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(showFavouritie(val))
  }
  render(){
    const {movies,search}=this.props.store.getState();
    const {list,favourities,showfavourities}=movies;
    console.log('RENDER',this.props.store.getState());
    const display=showfavourities?favourities:list;
    return (
      <div className="App">
        <Navbar
         dispatch={this.props.store.dispatch}
         search={search}
        />
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
              dispatch={this.props.store.dispatch}
              isFavouritie={this.isMovieFavouritie(movie)}/>
           ))}
         </div>
      </div>
      </div>
     );
   }
}

export default App;
