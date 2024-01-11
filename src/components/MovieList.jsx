import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/components/MovieList.module.css";

function MovieList({ id, coverImg, title, rating, genres, runtime }) {
  return (
    <Link className={styles.container} to={`/movie/${id}`}>
      <div>
        <img className={styles.poster} src={coverImg} alt={title} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.rating_runtime}>
        <span>⭐ {rating} / </span>
        <span>{runtime}분</span>
      </div>
      <div className={styles.genre}>
        {genres.map((g) => " " + g).toString()}
      </div>
    </Link>
  );
}

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieList;
