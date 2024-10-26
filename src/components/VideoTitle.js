import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = () => {
  const movieDetails = useSelector((store) => store.movies?.movieDetails?.results);
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 flex flex-col gap-4 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold">{movieDetails?.title}</h1>
        <p className="text-sm w-1/3 h-[25%] overflow-hidden">{movieDetails?.description}</p>
        <div className="flex gap-4">
          <button className="border border-gray-300 px-12 py-2 rounded-md bg-white text-black  text-xl">▶️ Play</button>
          <button className="border border-gray-300 px-10 py-2 rounded-md bg-black text-white bg-opacity-40 text-xl">More Info</button>
        </div>
    </div>
  );
};

export default VideoTitle;
