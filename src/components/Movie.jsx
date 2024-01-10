import styles from "../css/components/Movie.module.css";

function Movie({
  title,
  coverImg,
  year,
  rating,
  runtime,
  likeCnt,
  genres,
  trailerCode,
  description,
  bgImg,
}) {
  return (
    <div className={styles.container_box}>
      <div className={styles.img_box}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.text_box}>
        <h1 className={styles.title}>{title}</h1>
        <ul className={styles.text_list}>
          <li className={styles.small_box}>
            <span>{year} </span>
            <span>{runtime} min</span>
            <span>{`⭐ ${rating}`}</span>
            <div>
              <span className={styles.like}>❤ </span>
              <span>{` ${likeCnt}`}</span>
            </div>
          </li>
          <li className={styles.genres}>{`${genres
            .map((g) => " " + g)
            .toString()}`}</li>
          <li className={styles.description}>{description.slice(0, 400)}...</li>
        </ul>
        <div>
          <iframe
            className={styles.traiiler}
            src={`https://www.youtube.com/embed/${trailerCode}?mute=1&&autoplay=1`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Movie;
