import ArtworkCard from "./ArtworkCard";
import artwork from "../data/artwork";

function ArtworkGallery() {
  return (
    <section className="bg-white px-10 pt-12 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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