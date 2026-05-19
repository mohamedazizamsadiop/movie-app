function Filter({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Rechercher par titre"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Note minimale"
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

export default Filter;