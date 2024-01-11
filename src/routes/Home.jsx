import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import styles from "../css/routes/Home.module.css";
import Logo from "../components/Logo";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const rate = Math.round((Math.random() * 2 + 7) * 1000) / 1000;
  console.log(rate);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rate}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Logo />
      <div className={styles.container}>
        {loading ? (
          <h1>Loading...</h1>
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
    </>
  );
}

export default Home;
