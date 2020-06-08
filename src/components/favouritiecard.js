import React from 'react';
import {addFavouritie} from '../actions';
class  FavouritieCard extends React.Component{
  
    render()
    {
        const {movie}=this.props;
        return (
            <div className="movie-card">
              <div className="left">
                  <img alt="movie-poster" src={movie.Poster}/>
              </div>
              <div className="right">
               <div className="title">{movie.Title}</div>
               <div className="plot">{movie.Plot}</div>
               <div className="footer">
               <div className="rating">{movie.imdbRating}</div>
               </div>
              </div>
            </div>
          );
    }
}

export default FavouritieCard;
