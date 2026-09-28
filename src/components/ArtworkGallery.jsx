import ArtworkCard from "./ArtworkCard";
import artwork from "../data/artwork";

function ArtworkGallery() {
  return (
    <section className="bg-white px-10 pt-12 pb-8">

      {/* MOBILE */}
      <div className="md:hidden">

        {/* FIRST IMAGE - FULL WIDTH */}
        {artwork[0] && (
          <div className="w-full mb-4">
            <ArtworkCard
              artwork={artwork[0]}
              featured={true}
            />
          </div>
        )}

        {/* NEXT IMAGES - 2 COLUMNS × 3 ROWS */}
        <div className="grid grid-cols-2 gap-4">
          {artwork.slice(1, 7).map((item) => (
            <div key={item.id} className="w-full">
              <ArtworkCard artwork={item} />
            </div>
          ))}
        </div>

      </div>


      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {artwork.map((item) => (
          <div key={item.id} className="w-full">
            <ArtworkCard artwork={item} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default ArtworkGallery;