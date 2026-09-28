import { Link } from "react-router-dom";

function ArtworkCard({ artwork, featured = false }) {
  return (
    <Link
      to={`/key-art/${artwork.id}`}
      className="block w-full"
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured
            ? "h-[70vh] md:h-[85vh]"
            : "h-[38vh] md:h-[85vh]"
        }`}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* INFORMATION ON FIRST IMAGE */}
        {featured && (
          <div className="absolute top-5 left-5 right-5 z-10">
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-sans font-light text-black tracking-[0.08em]">
              
              <span>{artwork.title}</span>

              <span>{artwork.year}</span>

              <span>
                Director: {artwork.director}
              </span>

              <span>
                Client: {artwork.client}
              </span>

              <span>A24 Teasers</span>

              <span>Key Art</span>

              <span>IMAX</span>

              <span>Character</span>

            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ArtworkCard;