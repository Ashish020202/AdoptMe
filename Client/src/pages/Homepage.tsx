import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
    <div className="bg-gray-200 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mt-12">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to Pet Adopt!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Find your furry friend, donate to pet lovers, and help stray animals
            in need.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Link to="/adoption">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700">
                View Dogs
              </button>
            </Link>
            <Link to="/emergency">
              <button className="bg-green-600 text-white py-2 px-6 rounded-lg shadow hover:bg-green-700">
                Report Emergency
              </button>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <Slider {...sliderSettings}>
            {carouselImages.map((image) => (
              <div key={image.id} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-[28rem] lg:h-[32rem] object-cover rounded-md"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm md:text-base px-4 py-2 rounded">
                  {image.caption}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 text-center text-gray-800">
          <h2 className="text-2xl font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-md">
            We connect you to verified shelters, provide support for pet lovers,
            and empower you to make a difference in the lives of stray animals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
