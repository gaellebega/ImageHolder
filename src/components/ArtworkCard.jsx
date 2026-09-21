function ArtworkCard({ artwork }) {
  return (
    <div className="w-full aspect-square overflow-hidden">
      <img
        src={artwork.image}
        alt={artwork.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ArtworkCard;