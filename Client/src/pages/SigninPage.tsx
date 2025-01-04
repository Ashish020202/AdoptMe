import { Link } from "react-router-dom";

function SigninPage() {
  return (
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Welcome back!
      </h1>
      <p className="mt-4 text-lg text-center text-gray-700">
        Please sign in to continue.
      </p>
      <form className="mt-6 bg-white p-6 rounded shadow-lg space-y-4 w-full max-w-sm">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default SigninPage;
