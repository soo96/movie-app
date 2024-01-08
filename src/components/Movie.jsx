function Movie({ title, coverImg, year, rating, runtime, likeCnt, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <ul>
        <li>{`평점 : ${rating}`}</li>
        <li>{`상영시간 : ${runtime}`}</li>
        <li>{`❤ : ${likeCnt}`}</li>
        <li>{`장르 : ${genres.toString()}`}</li>
      </ul>
    </div>
  );
}

export default Movie;
