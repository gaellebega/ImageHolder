import { useParams, Link } from "react-router-dom";
import artwork from "../data/artwork";

function ArtworkDetails() {
  const { id } = useParams();

  const selectedArtwork = artwork.find(
    (item) => String(item.id) === String(id)
  );

  if (!selectedArtwork) {
    return (
      <main className="min-h-screen bg-white px-8 py-16 text-black">
        <h1 className="font-sans text-2xl font-light">
          Artwork not found.
        </h1>

        <Link
          to="/key-art"
          className="inline-block mt-6 font-sans text-sm underline"
        >
          Back to Key Art
        </Link>
      </main>
    );
  }

  const otherArtwork = artwork.filter(
    (item) => String(item.id) !== String(id)
  );

  return (
    <main className="bg-white text-black px-4 md:px-8 pt-8 pb-10">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        {/* INFORMATION */}
        <section className="mb-8">
          <div className="flex flex-col gap-3 font-sans text-[14px] font-light tracking-[0.08em]">

            <span className="text-black">
              {selectedArtwork.title}
            </span>

            <div className="flex flex-col gap-3 text-black/60">
              {selectedArtwork.year && (
                <span>{selectedArtwork.year}</span>
              )}

              {selectedArtwork.director && (
                <span>
                  Director: {selectedArtwork.director}
                </span>
              )}

              {selectedArtwork.client && (
                <span>
                  Client: {selectedArtwork.client}
                </span>
              )}
            </div>

          </div>
        </section>

        {/* MAIN IMAGE */}
        <section className="w-full mb-8 flex justify-center">
          <div className="w-full h-[calc(100vh-180px)] overflow-hidden">
            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* OTHER IMAGES */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            {otherArtwork.map((item) => (
              <Link
                key={item.id}
                to={`/key-art/${item.id}`}
                className="block w-full"
              >
                <div className="w-full h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>


      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        {/* INFORMATION + MAIN IMAGE */}
        <section className="relative min-h-[85vh]">

          {/* INFORMATION — TOP LEFT */}
          <div className="absolute left-0 top-0 z-10 pt-2 font-sans text-[13px] font-light tracking-[0.08em]">

            <div className="text-black mb-5">
              {selectedArtwork.title}
            </div>

            <div className="flex flex-col gap-3 text-black/60">
              {selectedArtwork.year && (
                <span>{selectedArtwork.year}</span>
              )}

              {selectedArtwork.director && (
                <span>
                  Director: {selectedArtwork.director}
                </span>
              )}

              {selectedArtwork.client && (
                <span>
                  Client: {selectedArtwork.client}
                </span>
              )}
            </div>

          </div>


          {/* MAIN IMAGE — CENTERED */}
          <div className="flex justify-center">
            <div className="w-[65%] h-[80vh] overflow-hidden">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </section>


        {/* OTHER IMAGES */}
        <section className="mt-4">
          <div className="grid grid-cols-4 gap-4">

            {otherArtwork.map((item) => (
              <Link
                key={item.id}
                to={`/key-art/${item.id}`}
                className="block w-full"
              >
                <div className="w-full h-[240px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}

          </div>
        </section>

      </div>

    </main>
  );
}

export default ArtworkDetails;