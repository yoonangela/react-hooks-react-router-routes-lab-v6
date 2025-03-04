import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  
  return (
    <article>
        <h2>{movie.title}</h2>
        <p>
          <Link to={`/movie/${movie.id}`}>View movie</Link>
        </p>
    </article>
  );
};

export default MovieCard;