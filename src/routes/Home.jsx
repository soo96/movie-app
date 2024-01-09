import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import styles from "../css/routes/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.box}>
          {movies.map((movie) => (
            <MovieList
              key={movie.id}
              id={movie.id}
              rating={movie.rating}
              runtime={movie.runtime}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              genres={movie.genres}
              trailerCode={movie.yt_trailer_code}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
