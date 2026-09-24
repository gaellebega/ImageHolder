import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

function Av() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image2,
    image1,
    image4,
    image3,
    image1,
    image3,
    image2,
    image4,
    image4,
    image1,
    image3,
    image2,
    image2,
    image4,
    image1,
    image3,
    image3,
    image2,
    image4,
    image1,
  ];

  return (
    <main className="bg-white px-8 pt-8 pb-8">
      <div className="columns-2 md:columns-4 lg:columns-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid overflow-hidden"
          >
            <img
              src={image}
              alt={`AV ${index + 1}`}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Av;