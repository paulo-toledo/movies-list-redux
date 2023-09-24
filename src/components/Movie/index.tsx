import { iMovie } from "../../interfaces/iMovie";
import Link from "../Link";
import { Container, ImageContent, MovieExcerptContent } from "./styles";

interface iMovieProps {
  movie: iMovie;
}

export const Movie: React.FC<iMovieProps> = ({ movie }) => {
  return (
    <Container>
      <ImageContent>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      </ImageContent>
      <MovieExcerptContent>
        <h3>{movie.title}</h3>
        <Link to={`/movie/${movie.id}`} >Ver detalhes</Link>
      </MovieExcerptContent>
    </Container>
  )
}

export default Movie;