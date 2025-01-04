function Homepage() {
  return (
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Welcome to the Dog Adoption Website
      </h1>
      <p className="mt-4 text-lg text-center text-gray-700">
        Find your furry friend, donate to pet lovers, and help stray animals in
        need.
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
  );
}

export default Homepage;
