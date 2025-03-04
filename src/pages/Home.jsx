import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";


function Home() {

  const [movies, setmovies]= useState([])
  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((response) => response.json())
    .then((movies)=>setmovies(movies))

},[])

  return(
    <>
      <header>
        <NavBar />
      </header>
      <h1>
        Home Page
      </h1>
      <main>
        {movies.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)}
      </main>
    </>
  );
};

export default Home;
