import React, { useState } from "react";
import Layout from "./Layout";
import movieDetails from "../jsons/MovieDetailDemo.json";
import { Link } from "react-router-dom";
import theaterDetails from "../jsons/theaterServiceDemo.json";
import { AnimatePresence, motion } from "framer-motion";

function MovieDetails() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const screen = theaterDetails.screenDetails.screen;
  const timeSlots = theaterDetails.screenDetails.screen.timeSlots;
  const bookedSeats = theaterDetails.bookedSeatDetails;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const createBookingResponse = () => {
    let response = {
      userName: "JohnDoe",
      theaterName: "INOX",
      seats: [
        { rowLabel: "A", seatNumber: 1 },
        { rowLabel: "A", seatNumber: 2 },
        { rowLabel: "A", seatNumber: 3 },
        { rowLabel: "A", seatNumber: 4 },
      ],
      screenName: "Screen 1",
      showDate: "2024-11-26",
      showTime: "18:00",
      amount: 500.0,
    };
    console.log(response);
  };

  // Add this inside the component, after the existing useState declarations
  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Add this helper function
  const formatDate = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
    };
  };

  const toggleSeat = (rowLabel, seatNumber) => {
    const seatIndex = selectedSeats.findIndex(
      (seat) => seat.rowLabel === rowLabel && seat.seatNumber === seatNumber
    );

    if (seatIndex === -1) {
      // Add seat if not already selected
      setSelectedSeats([...selectedSeats, { rowLabel, seatNumber }]);
    } else {
      // Remove seat if already selected
      setSelectedSeats(selectedSeats.filter((_, index) => index !== seatIndex));
    }
    console.log(selectedSeats);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-28 text-white p-6 flex flex-col">
        {/* Movie Header */}
        <div className="max-w-6xl mx-auto w-full h-[40vh]">
          <div className="absolute top-0 left-0 -z-30 w-screen ">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <img
              src={movieDetails.images.banner}
              alt="Movie Banner"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src={movieDetails.images.poster}
              alt="Movie Poster"
              className="w-40 rounded"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h1 className="text-2xl font-bold">
                {movieDetails.name} [{movieDetails.certificate}]
              </h1>
              <p className="text-gray-400 mb-6">
                {movieDetails.runtime} | {movieDetails.genre.map((genre) => genre).join("/")}
              </p>
              <Link
                to={movieDetails.trailerUrl}
                className="px-5 py-2.5 relative rounded-md group overflow-hidden font-medium bg-transparent border text-white inline-block mr-2"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-500 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-black">Watch Trailer</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="border border-neutral-800 backdrop-blur-sm rounded-md w-full flex flex-col justify-between items-center text-center">
          {/* Date and Time */}

          <div className="mt-8 w-full">
            <h2 className="text-lg font-semibold mb-2">Date</h2>
            {/* Dates */}
            <div className="flex items-center space-x-4 justify-center">
              <div className="flex space-x-4 overflow-x-auto pb-4 px-4">
                {getDates().map((date) => {
                  const formattedDate = formatDate(date);
                  const isSelected = selectedDate.toDateString() === date.toDateString();

                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`flex flex-col items-center min-w-[80px] p-3 rounded-lg transition-colors
                        ${
                          isSelected
                            ? "bg-yellow-500 text-black"
                            : "border border-neutral-700 hover:border-yellow-500"
                        }`}
                    >
                      <span className="text-sm font-medium">{formattedDate.day}</span>
                      <span className="text-xl font-bold">{formattedDate.date}</span>
                      <span className="text-sm">{formattedDate.month}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <h2 className="text-lg font-semibold mt-6 mb-2">Time</h2>
            {/* Timings */}
            <div className="flex items-center space-x-4 justify-center">
              <div className="flex space-x-4 overflow-x-auto pb-4 px-4">
                {timeSlots.map((time) => (
                  <button
                    key={time.timeSlotType}
                    onClick={() => setSelectedTime(time.startTime)}
                    className={`px-6 py-3 rounded-lg transition-colors text-sm font-medium
                        ${
                          selectedTime === time.startTime
                            ? "bg-yellow-500 text-black"
                            : "border border-neutral-700 hover:border-yellow-500"
                        }`}
                  >
                    {time.timeSlotType}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* layout */}
          <div className="m-4 border-t border-neutral-800 w-full mx-auto p-6">
            {/* Screen */}
            <div className="relative mb-12">
              <div className="h-2 w-3/4 bg-gray-700 mx-auto mb-1 shadow-lg shadow-white"></div>
              <span className="absolute left-1/2 -translate-x-1/2 text-sm text-gray-400 mb-12">
                SCREEN
              </span>
            </div>

            {/* Seat Grid */}
            <div className="flex flex-col items-center gap-4 relative w-full">
              {screen.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center w-full">
                  <span className="absolute left-0 w-8 text-center font-medium">
                    {row.rowLabel}
                  </span>
                  <div className="grid grid-flow-col gap-2 auto-cols-max mx-auto">
                    {Array.from({ length: row.totalSeatsInRow }, (_, seatIndex) => {
                      const seatNumber = seatIndex + 1;
                      const breaks = row.breaksAfterSeatNo.split(",").map(Number);

                      return (
                        <React.Fragment key={row.rowLabel + "-" + seatIndex}>
                          <button
                            disabled={bookedSeats.some(
                              (bookedSeat) =>
                                bookedSeat.rowLabel === row.rowLabel &&
                                bookedSeat.seatNumber === seatNumber
                            )}
                            className={`w-8 h-8 rounded-md text-sm font-medium
                            ${
                              bookedSeats.some(
                                (bookedSeat) =>
                                  bookedSeat.rowLabel === row.rowLabel &&
                                  bookedSeat.seatNumber === seatNumber
                              )
                                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                : selectedSeats.some(
                                    (seat) =>
                                      seat.rowLabel === row.rowLabel &&
                                      seat.seatNumber === seatNumber
                                  )
                                ? "bg-yellow-500 text-black"
                                : "border border-neutral-700 hover:border-yellow-500"
                            } transition-colors`}
                            onClick={() => toggleSeat(row.rowLabel, seatNumber)}
                          >
                            {seatNumber}
                          </button>

                          {breaks.includes(seatNumber) && <div className="w-4" />}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* selected seats */}
            <div className="flex justify-center gap-4 mt-8 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Selected Seats: {selectedSeats.length == 0 ? "None" : ""}
                </span>
                {selectedSeats.map((seat, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-yellow-500 text-black rounded-md text-sm"
                  >
                    {seat.rowLabel}
                    {seat.seatNumber}
                  </span>
                ))}
              </div>
            </div>
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border border-neutral-700 rounded-md"></div>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-500 rounded-md"></div>
                <span className="text-sm">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-700 rounded-md"></div>
                <span className="text-sm">Booked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PriceBreakup */}
<AnimatePresence>
  {selectedSeats.length > 0 && (
    <motion.div 
      className="fixed top-24 right-6 bg-neutral-900 w-72 border border-neutral-800 rounded-xl"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      <motion.h1 
        className="text-white w-full text-2xl text-center mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Price Breakup
      </motion.h1>
      
      <div className="p-6 space-y-4">
        {screen.rows.map((row) => {
          const seatsInThisRow = selectedSeats.filter((seat) => seat.rowLabel === row.rowLabel);
          if (seatsInThisRow.length > 0) {
            return (
              <motion.div 
                key={row.rowLabel} 
                className="flex justify-between text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span>
                  {row.rowCategory} ({seatsInThisRow.length} × ₹{row.price})
                </span>
                <span>₹{seatsInThisRow.length * row.price}</span>
              </motion.div>
            );
          }
          return null;
        })}

        <motion.div 
          className="border-t border-neutral-700 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between text-white font-bold">
            <span>Total Amount</span>
            <span>
              ₹
              {selectedSeats.reduce((total, seat) => {
                const row = screen.rows.find((r) => r.rowLabel === seat.rowLabel);
                return total + row.price;
              }, 0)}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </Layout>
  );
}

export default MovieDetails;
