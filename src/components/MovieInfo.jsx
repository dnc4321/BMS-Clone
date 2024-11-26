import React from "react";
import { Link } from "react-router-dom";

function MovieInfo({selectedMovie}) {
  return (
    <>
      <div className="movie-info">
        <div className="h-[80vh] w-screen overflow-hidden">
          <img
            src={selectedMovie.wide_bgimage}
            className="w-full h-full object-cover object-center"
          ></img>
          <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
          <div className="absolute text-white inset-0 lg:w-1/3 w-4/5 top-36 lg:left-52 left-16">
            <div className="text-6xl font-semibold mb-4">{selectedMovie.name}</div>
            <div className="text-gray-400 mb-4">
              ⭐{selectedMovie.rating}/10 | {selectedMovie.year} | {selectedMovie.duration} minutes
              | {selectedMovie.genres.map((genre) => genre).join(", ")}
            </div>
            <div className="mb-4">{selectedMovie.description}</div>
            <div>
              {/* <button className="border border-gray-500 rounded-md px-4 py-2 mr-4">
                      Watch Trailer
                    </button> */}
              <Link
                to="/"
                class="px-5 py-2.5 relative rounded-md group overflow-hidden font-medium bg-transparent border text-white inline-block mr-2"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-500 group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-black">Watch Trailer</span>
              </Link>
              {/* <button className="bg-yellow-500 text-black rounded-md px-4 py-2">
                      Book Tickets
                    </button> */}
              <Link
                to="/details/demo"
                class="px-5 py-2.5 relative rounded-md group overflow-hidden font-medium bg-yellow-500 hover:border text-black inline-block"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full"></span>
                <span class="relative group-hover:text-white">Book Tickets</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
