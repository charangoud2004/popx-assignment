import Lottie from "lottie-react";
import notfound from "../assets/pagenotfound.json";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <div className="min-h-screen shadow-lg px-4 flex flex-col justify-center">
      <Lottie animationData={notfound} loop={true} />
      <h1 className="text-center text-2xl font-medium">
        oops! 404 page not found ....
      </h1>
      <button
        onClick={() => nav("/")}
        className=" mt-3 capitalize px-4 py-2 rounded-md text-[16px] font-medium bg-violet-500 text-white hover:bg-violet-700 "
      >
        go to home
      </button>
    </div>
  );
};
