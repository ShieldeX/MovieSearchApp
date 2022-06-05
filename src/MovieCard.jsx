import React from 'react';

//passover props
// distructure the props to get the data inside movies1 by {}
const MovieCard = ({movie}) =>{

    return(
 <div className='movie'>
    <div>
    <p>{movie.Year}</p>
    </div>

    <div>
     <img
   src = {movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt = {movie.Title}
    />
    </div>
 <div>
   <span>{movie.Type}</span>
   <h3>{movie.Title}</h3>
 </div>
 </div>

    );
}
export default MovieCard;