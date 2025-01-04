import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homepage() {
  const carouselImages = [
    {
      id: 1,
      src: "/adopt-dog.jpeg",
      alt: "Adopt a Dog",
      caption: "Find your perfect furry friend.",
    },
    {
      id: 2,
      src: "/help-stray-dogs.jpeg",
      alt: "Help Stray Dogs",
      caption: "Be a hero to those in need.",
    },
    {
      id: 3,
      src: "/donate-today.jpeg",
      alt: "Donate Money",
      caption: "Support shelters and pet lovers.",
    },
    {
      id: 4,
      src: "/pet-lover.jpeg",
      alt: "Pet Lovers",
      caption: "Join a loving community of pet enthusiasts.",
    },
  ];

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-300 h-screen flex flex-col items-center pt-12">
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to the Pet Adopt!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Find your furry friend, donate to pet lovers, and help stray animals
          in need.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            View Dogs
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Report Emergency
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-4xl mb-8 mt-8">
        <Slider {...sliderSettings}>
          {carouselImages.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm p-2 rounded-bl">
                {image.caption}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Homepage;
