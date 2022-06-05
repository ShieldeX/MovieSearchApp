import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import './search.svg'; 
import MovieCard from './MovieCard';
//http://www.omdbapi.com/?i=tt3896198&apikey=57db2809

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=57db2809'
const movie1 =
  {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}


const App = () =>{
  const [movies,setMovies] = useState([]);
  //create another hook for searching
  const [searchTerm, setSearchTerm] = useState('');
  //using arrow function for the api 
    const searchMovies = async(title)=>{
      const response = await fetch(`${API_URL} &s=${title}`);
      //manupulating the file into json type
      const data = await response.json();

      setMovies(data.Search);
    }
    //call function serchMovie using the useEffect every time the page loads
      useEffect(()=>{
        searchMovies('Spiderman')
      },[]);
  //creating JSX for the application to return
      return(
        //let's start by wrapping everything int o a div
        // #1 search div
   <div className='app'>
     <h1>VINCE films</h1>
     <div className='search' >
       //dynamically change the serch term
       <input
       placeholder='Search for movie'
       value= {searchTerm}
       onChange={(e)=>{setSearchTerm(e.target.value)}}
       />
       <img
        src = 'SearchIcon'
        alt = 'search'
        onClick={()=>{searchMovies(searchTerm)}}
       />
     </div>
           //dynamic block of code
     {
       movies?.length > 0
       ? (
        <div className='container'>
        //mapp over movies

       {
         movies.map((movie) => (
           <MovieCard movie ={movie}/>
          ) ) }

      </div>
       ):(
         <div className='empty'>
           <h2>No movies found </h2>
         </div>
       )


     }
     
      
    </div> 
  );


}

export default App;