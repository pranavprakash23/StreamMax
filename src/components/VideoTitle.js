import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = () => {
  const movieDetails = useSelector((store) => store.movies?.movieDetails?.results);
  return (
    <div className="mt-36 mx-12 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{movieDetails?.title}</h1>
        <p className="text-xl w-1/3">{movieDetails?.description}</p>
        <div className="flex gap-4">
          <button className="border border-gray-300 px-10 py-2 rounded-md bg-black text-black bg-opacity-40 text-xl">▶️ Play</button>
          <button className="border border-gray-300 px-10 py-2 rounded-md bg-black text-black bg-opacity-40 text-xl">More Info</button>
        </div>
    </div>
  );
};

export default VideoTitle;
