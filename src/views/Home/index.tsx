import { useEffect, useState } from "react";
import { MoviesService } from "../../api/MoviesService";
import { Movie } from "../../components/Movie";
import { iMovie } from "../../interfaces/iMovie";

export const Home: React.FC = () => {

  const [movies, setMovies] = useState<iMovie[]>([]);

  useEffect(() => {
    MoviesService.getMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row gy-5">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
