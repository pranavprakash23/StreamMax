import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({id}) => {
  const movieDetails = useSelector((store) => store.movies?.movieDetails[id]?.results);
  return (
    <div className="w-screen aspect-video pt-[20%] px-4 md:px-24 flex flex-col gap-1 md:gap-4 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-sm md:text-4xl font-bold">{movieDetails?.title}</h1>
        <p className="text-sm w-1/3 h-[35%] overflow-y-scroll scrollbar-hide">{movieDetails?.description}</p>
        <div className="flex gap-4">
          <button className="border border-gray-300 px-4 py-1 md:px-12 md:py-2 rounded-md bg-white text-black text-sm md:text-xl">▶️ Play</button>
          <button className="border border-gray-300 px-4 py-1 md:px-12 md:py-2 rounded-md bg-black text-white bg-opacity-40 text-sm md:text-xl">More Info</button>
        </div>
    </div>
  );
};

export default VideoTitle;
