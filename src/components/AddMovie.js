import { useState } from "react";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleAdd = () => {
    const newMovie = {
      title,
      description,
      posterURL,
      rating: Number(rating),
    };

    addMovie(newMovie);

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="URL Affiche"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />

      <input
        type="number"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <button onClick={handleAdd}>
        Ajouter
      </button>
    </div>
  );
}

export default AddMovie;