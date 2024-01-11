import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "../css/routes/Detail.module.css";
import Logo from "../components/Logo";

function Detail() {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Logo />
      <div className={styles.container}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Movie
            title={movie.title}
            coverImg={movie.large_cover_image}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            likeCnt={movie.like_count}
            description={movie.description_full}
            genres={movie.genres}
            bgImg={movie.background_image}
          />
        )}
      </div>
    </>
  );
}

export default Detail;
