import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit login form here (e.g., send data to backend)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <>
      <div className="bg-black flex items-center justify-center min-h-screen p-4">
        <div className="flex flex-col-reverse md:flex-row bg-neutral-900 shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 max-w-4xl">
          {/* Left Section */}
          <div className="w-full md:w-3/5 p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Sign Up</h2>
            <form className="mt-4 md:mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-300">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Full Name"
                  className="w-full mt-2 p-2 border border-neutral-700 bg-neutral-900 text-white rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  className="w-full mt-2 p-2 border border-neutral-700 bg-neutral-900 text-white rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="block text-sm text-neutral-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className="w-full mt-2 p-2 border border-neutral-700 bg-neutral-900 text-white rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/3 text-yellow-500 hover:text-yellow-400 focus:outline-none"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="confirmPassword" className="block text-sm text-neutral-300">
                Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm Password"
                    className="w-full mt-2 p-2 border border-neutral-700 bg-neutral-900 text-white rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/3 text-yellow-500 hover:text-yellow-400 focus:outline-none"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-yellow-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full mt-4 p-2 relative inline-flex items-center justify-center overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-lg shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Sign Up Now
                </span>
                <span className="relative invisible">Button Text</span>
              </button>
            </form>
            <p className="mt-6 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-500 font-medium hover:underline">
                Log In
              </Link>
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center p-6 md:p-8">
            <div className="text-center">
              <img src={logo} alt="ShowBees Logo" className="w-24 md:w-32 mx-auto" />
              <div className="font-bold text-lg md:text-2xl flex items-center flex-wrap gap-2 justify-center mt-4">
                <div>Show</div>
                <div className="bg-neutral-900 px-2 rounded-md text-white">Bees</div>
              </div>
              <h3 className="text-black text-base md:text-lg font-semibold mt-4 md:mt-6">
                Welcome to ShowBees
              </h3>
              <p className="text-black text-xs md:text-sm mt-1">
                your new destination to movies and theaters near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
