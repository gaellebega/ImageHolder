import ArtworkCard from "./ArtworkCard";
import  artwork  from "../data/artwork";

function ArtworkGallery() {
  const offsets = [
    "",
    "translate-y-2",
    "-translate-y-1",
    "translate-y-3",
    "-translate-y-2",
    "translate-y-1",
    "",
    "-translate-y-1",
  ];

  return (
    <section className="bg-white p-[3px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3px]">
        {artwork.map((item, index) => (
          <div
            key={item.id}
            className={offsets[index % offsets.length]}
          >
            <ArtworkCard artwork={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtworkGallery;