import { useSelector } from "react-redux";
import { iMovie } from "../../interfaces/iMovie";

interface iMovieProps {
  movies: iMovie[];
}

interface iState {
    favorito: iMovieProps;
}

export const Favoritos: React.FC = () => {
  const favoritos: iMovieProps = useSelector((state: iState) => state.favorito);
  
  return (
    <section>
      <h1>Meus filmes favoritos</h1>
      <ul>
        {favoritos.movies.map((movie: iMovie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  )
}