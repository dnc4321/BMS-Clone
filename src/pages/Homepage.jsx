import React, { useEffect, useRef, useState } from "react";
import Layout from "./Layout";
import Movielist from "../jsons/MovieList.json";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Homepage() {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(Movielist[0]);

  useEffect(() => {
    const autoRotate = setInterval(() => {
      const currentIndex = Movielist.findIndex((movie) => movie === selectedMovie);
      const nextIndex = (currentIndex + 1) % Movielist.length;
      setSelectedMovie(Movielist[nextIndex]);
    }, 6000);

    return () => clearInterval(autoRotate);
  }, [selectedMovie]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    // if (direction === "selected") {
    //   const selectedElement = container.querySelector(`[data-movie="${selectedMovie.name}"]`);
    //   if (selectedElement) {
    //     const containerWidth = container.clientWidth;
    //     const elementOffset = selectedElement.offsetLeft;
    //     const elementWidth = selectedElement.offsetWidth;
    //     const scrollPosition = elementOffset - containerWidth / 2 + elementWidth / 2;
    //     container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    //   }
    // } else {
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    // }
  };

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMovie.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            <MovieInfo selectedMovie={selectedMovie} />
          </motion.div>
        </AnimatePresence>
        <div className="relative px-8 -mt-16">
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-8 h-full z-10 bg-gradient-to-r from-black to-transparent text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="#ffffff"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                stroke="#ffffff"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-4 pb-8 items-center scroll-smooth"
          >
            {Movielist.map((movie, i) => (
              <div key={i} className="flex-none" data-movie={movie.name}>
                <div
                  className={`${
                    selectedMovie === movie ? "w-44 h-60" : "w-32 h-44 hover:scale-105"
                  } rounded-lg overflow-hidden transition-transform duration-300 cursor-pointer`}
                  onClick={() => {
                    setSelectedMovie(movie);
                  }}
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white mt-2 text-center">{movie.title}</h3>
              </div>
            ))}
          </div>
          {showRightButton && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-8 top-0 h-full z-10 bg-gradient-to-l from-black to-transparent text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="#ffffff"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                stroke="#ffffff"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Homepage;
