import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/components/MovieList.module.css";

function MovieList({ id, coverImg, title, rating, genres, runtime }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.poster} src={coverImg} alt={title} />
      </div>
      <h2>
        <Link className={styles.title} to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <div className={styles.rating_runtime}>
        <span>⭐ {rating} / </span>
        <span>{runtime}분</span>
      </div>
      <div className={styles.genre}>
        장르 : {genres.map((g) => " " + g).toString()}
      </div>
    </div>
  );
}

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieList;
