import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/3dc6964d-f825-47ab-827f-bcc2793e6d92/US-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[120px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="py-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="py-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-small text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox">
                      Remember me
                    </input>
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="signin">Sign In</Link>
                  Sign In
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;