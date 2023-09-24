import React, { useEffect, useState } from "react";
import { iMovie } from "../../interfaces/iMovie";
import { useParams } from "react-router-dom";
import { MoviesService } from "../../api/MoviesService";

export const MovieDetails: React.FC = () => {

  const [movie, setMovie] = useState<iMovie>()
	const { id } = useParams();

	useEffect(() => {
		getMovie();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	const getMovie = async () => {
		const { data } = await MoviesService.getMovieDetails(id);
		setMovie(data);
	}

  return (
    <section className="movie-detail">
      <div className="container">
        <div className="row gx-5">
          <div className="col-6">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie?.poster_path}`}
              alt=""
            />
          </div>
          <div className="col-6">
            <h1>{movie?.title}</h1>
            <ul>
              <li>Budget: {movie?.budget}</li>
              <li>Original language: {movie?.original_language}</li>
              <li>Popularity: {movie?.popularity}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">{movie?.overview}</div>
        </div>
      </div>
    </section>
  );
};
