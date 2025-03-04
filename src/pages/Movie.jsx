import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";


function Movie() {
  const [movie, setmovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setmovie(data))
  }, [movieId]);
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>
        {movie.title}
      </h1>
      <main>
        <p>{movie.time}</p>
        <span>{movie.genres}</span>
      </main>
    </>
  );
};

export default Movie;
