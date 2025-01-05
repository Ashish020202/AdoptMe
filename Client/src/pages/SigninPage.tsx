import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SigninPage() {
  const navigate = useNavigate(); // Initialize the navigation hook
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Sign In successful! Redirecting to Home...");
        setTimeout(() => {
          navigate("/"); // Redirect to homepage
        }, 500);
        setFormData({ email: "", password: "" });
      } else {
        setMessage(data.message || "Sign In failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        🐾 PetAdopt
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-center text-gray-800">
        Sign In to Your Account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white p-6 rounded shadow-lg space-y-4 w-full max-w-sm"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
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
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-sm text-red-600">{message}</p>
      )}
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SigninPage;
