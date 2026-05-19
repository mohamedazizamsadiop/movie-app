function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <h2>{movie.title}</h2>

      <p>{movie.description}</p>

      <h3>⭐ {movie.rating}</h3>
    </div>
  );
}

export default MovieCard;