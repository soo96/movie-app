function Movie({
  title,
  coverImg,
  year,
  rating,
  runtime,
  likeCnt,
  genres,
  trailerCode,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <ul>
        <li>{`평점 : ${rating}`}</li>
        <li>{`상영시간 : ${runtime}`}</li>
        <li>{`❤ : ${likeCnt}`}</li>
        <li>{`장르 : ${genres.toString()}`}</li>
        <li>
          <div>
            <iframe
              // className={style.traiiler}
              src={`https://www.youtube.com/embed/${trailerCode}?mute=1&&autoplay=1`}
            ></iframe>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Movie;
