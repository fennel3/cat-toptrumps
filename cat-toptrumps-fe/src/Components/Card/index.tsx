function MyCard({ name, image, stats }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={`${name}`} />
      <ul>
        {Object.entries(stats || {}).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MyCard;
