// {
//     type:'ADD_MOVIES',
//     movies: [m1, m2 ,m3]
// }

export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITIES='ADD_FAVOURITIES';
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
        type:ADD_FAVOURITIES,
        movie
    }
}