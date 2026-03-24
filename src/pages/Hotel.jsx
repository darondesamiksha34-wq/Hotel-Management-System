import { useEffect } from "react";  
import { Link } from "react-router-dom";
import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";

import { FaStar, FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuConciergeBell } from "react-icons/lu";
import { PiMountainsDuotone } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

function Hotel() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 lg:px-20 py-30">
      <h1 className="text-black text-3xl sm:text-4xl font-serif">
        Hotel Rooms
      </h1>
      <p className="mt-2 text-gray-500 max-w-3xl">
        Take advantage of our limited-time offers and special packages to
        enhance your stay and create unforgettable memories.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex-1 space-y-12">
          {[room1, room2, room3].map((room, index) => (
            <div key={index} className="space-y-10">
              <div className="flex flex-col md:flex-row gap-6">
                <Link className="md:w-1/2">
                  <img
                    src={room}
                    alt="room"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                </Link>

                <div className="md:w-1/2">
                  <p className="text-gray-500 text-lg">
                    {index === 1 ? "Nagpur" : "New York"}
                  </p>

                  <h1 className="text-black font-serif text-2xl sm:text-3xl mt-2">
                    Urbanza Suites
                  </h1>

                  <div className="flex gap-2 mt-3 items-center">
                    <div className="text-orange-400 flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <p>200+ reviews</p>
                  </div>

                  <p className="flex gap-2 mt-3 text-sm sm:text-base">
                    <IoLocationOutline className="mt-1" />
                    Main Road 123 Street , 23 Colony
                  </p>

                  <div className="flex flex-wrap gap-3 mt-5">
                    <p className="flex bg-blue-50 px-3 py-2 rounded-sm text-sm gap-2">
                      <LuConciergeBell /> Room service
                    </p>
                    <p className="flex bg-blue-50 px-3 py-2 rounded-sm text-sm gap-2">
                      <PiMountainsDuotone /> Mountain View
                    </p>
                    <p className="flex bg-blue-50 px-3 py-2 rounded-sm text-sm gap-2">
                      <LiaSwimmingPoolSolid /> Pool Access
                    </p>
                  </div>

                  <p className="text-2xl font-bold mt-6">
                    {index === 1 ? "$299" : "$399"} /night
                  </p>
                </div>
              </div>

              {index !== 2 && <hr />}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-80">
          <div className="border p-3 flex justify-between">
            <p>Filters</p>
            <p className="cursor-pointer">Clear</p>
          </div>

          <div className="border p-4 space-y-4">
            <div>
              <h1 className="font-bold">Popular Filters</h1>
              {["Single Bed", "Double Bed", "Luxury Rooms", "Family Suite"].map(
                (item, i) => (
                  <div key={i} className="flex gap-3 mt-2">
                    <input type="checkbox" />
                    <p>{item}</p>
                  </div>
                )
              )}
            </div>

            <div>
              <h1 className="font-bold">Price Range</h1>
              {[
                "$0 - $500",
                "$500 - $1000",
                "$1000 - $2000",
                "$2000 - $3000",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mt-2">
                  <input type="checkbox" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h1 className="font-bold">Sort By</h1>
              {["Price Low to High", "Price High to Low"].map((item, i) => (
                <div key={i} className="flex gap-3 mt-2">
                  <input type="checkbox" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;

