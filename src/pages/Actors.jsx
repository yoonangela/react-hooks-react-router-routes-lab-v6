import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Actors() {

  const [actors, setactors]= useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((response) => response.json())
    .then((actor)=>setactors(actor))

},[])

return (
  <>
    <header>
      <NavBar />
    </header>
    <h1>
      Actors Page
    </h1>
    <main>
      <article>
        {actors.map((actor) => (
          <div key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </main>
  </>
);
}

export default Actors;