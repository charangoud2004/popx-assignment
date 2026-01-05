import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-12 min-h-screen shadow-lg border justify-end ">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold  capitalize ">welcome to popx</h1>
        <p className="max-w-[270px] text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <Link
          to={"/login"}
          className=" bg-violet-600 py-3 text-center text-[18px] rounded-md hover:bg-violet-800 text-white font-medium"
        >
          <button type="button" className="capitalize ">
            create account
          </button>
        </Link>
        <Link
          to={"/register"}
          className="bg-violet-300/80 py-3 rounded-md hover:bg-violet-500/50 text-black font-medium text-center mt-2"
        >
          <button className="capitalize ">already register? login </button>
        </Link>
      </div>
    </div>
  );
};
