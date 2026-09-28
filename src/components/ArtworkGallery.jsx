import { Link } from "react-router-dom";
import artwork from "../data/artwork";

function ArtworkGallery() {
  const mainArtwork = artwork[0];
  const otherArtwork = artwork.slice(1);

  return (
    <main className="bg-white min-h-screen px-4 md:px-8 pb-10">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        {/* MAIN IMAGE */}
        <section className="mb-4">
          <Link
            to={`/key-art/${mainArtwork.id}`}
            className="block w-full"
          >
            <div className="w-full h-[calc(100vh-180px)] overflow-hidden">
              <img
                src={mainArtwork.image}
                alt={mainArtwork.title}
                className="block w-full h-full object-cover"
              />
            </div>
          </Link>
        </section>

        {/* SMALL IMAGES */}
        <section>
          <div className="grid grid-cols-2 gap-3">

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
                    className="block w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}

          </div>
        </section>

      </div>


      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        <div className="grid grid-cols-3 gap-5">

          {artwork.map((item) => (
            <Link
              key={item.id}
              to={`/key-art/${item.id}`}
              className="block w-full"
            >
              <div className="w-full h-[500px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="block w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}

export default ArtworkGallery;