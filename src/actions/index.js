// {
//     type:'ADD_MOVIES',
//     movies: [m1, m2 ,m3]
// }

export const ADD_MOVIES='ADD_MOVIES';
export const ADD_TO_FAVOURITIES='ADD_TO_FAVOURITIES';
export const REMOVE_FROM_FAVOURITIES='REMOVE_FROM_FAVOURITIES';
export const SHOW_FAVOURITIE='SHOW_FAVOURITIE'
export function addMovies (movies)
{
    return {
        type:ADD_MOVIES,
        movies
    }
}
export function addFavouritie(movie)
{
    return {
        type:ADD_TO_FAVOURITIES,
        movie
    }
}
export function removeFromFavouritie(movie)
{
    return {
        type:REMOVE_FROM_FAVOURITIES,
        movie
    }
}
export function showFavouritie(val)
{
    return {
        type:SHOW_FAVOURITIE,
        val
    }
}
export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com?apikey=3ca5df7&t=${movie}`;
    return function(dispatch)
    {
        fetch(url).
        then(response=>response.json()).
        then((movie)=>{
            console.log('movie',movie);
        })
    }
    
}