function ArtworkCard({ artwork }) {
  return (
    <div className="w-full h-[85vh] overflow-hidden">
      <img
        src={artwork.image}
        alt={artwork.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ArtworkCard;