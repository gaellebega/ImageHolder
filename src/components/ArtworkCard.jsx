import { Link } from "react-router-dom";

function ArtworkCard({ artwork }) {
  return (
    <Link to={`/key-art/${artwork.id}`} className="block w-full">
      <div className="w-full h-[38vh] md:h-[85vh] overflow-hidden">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}

export default ArtworkCard;