import React from 'react';
import {data} from '../data';
import Navbar from './navbar';
import MovieCard from './moviecard';
import {addMovies} from '../actions';
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
        const {favourities}=this.props.store.getState();
        const index=favourities.indexOf(movie);
        if(index!=-1)
        {
          //movie found
          return true;
        }
        return false;
  }
  render(){
    const {list}=this.props.store.getState();
    console.log('RENDER',this.props.store.getState());
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
         <div className="tabs">
           <div className="tab">Movies</div>
           <div className="tab">Favourite</div>
         </div> 
         <div className="list">
           {list.map((movie,index) =>(
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
