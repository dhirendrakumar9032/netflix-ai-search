import React, { useState } from "react";

const LoginPage = () => {
  const [isSignUpForm, setSignUpForm] = useState<boolean>(false);
  const handleSignUp = () => {
    setSignUpForm(!isSignUpForm);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
      }}
      className="relative h-screen bg-no-repeat bg-cover bg-opacity-10"
    >
      {/* Logo in the top left corner */}
      <div className="w-full absolute top-0 left-0 bg-gradient-to-b from-black px-8 py-2">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="w-60"
        />
      </div>

      {/* Login form centered */}
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-xs p-8 bg-black bg-opacity-75 rounded-lg">
          <form className="flex flex-col space-y-6 text-white">
            <h1 className="font-500 text-3xl py-2">
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </h1>
            {isSignUpForm && (
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-3 rounded bg-gray-700"
              />
            )}
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-3 rounded bg-gray-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-700"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition-colors duration-200"
            >
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </button>
            <h3 className="font-bold cursor-pointer" onClick={handleSignUp}>
              {isSignUpForm ? "Sign in" : "New to Netflix? Sign up now"}
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
