import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((directors) => setDirectors(directors));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>
        Directors Page
      </h1>
      <main>
        <article>
          {directors.map((director) => (
            <div key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
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

export default Directors;