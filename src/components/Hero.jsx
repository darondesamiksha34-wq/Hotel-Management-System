import { useEffect } from "react";
import bg from "../assets/Bg2.png";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import b1 from "../assets/Beach.png";
import b2 from "../assets/beach2.png";
import b3 from "../assets/beach3.png";
import { FaArrowRight } from "react-icons/fa6";
import Men1 from "../assets/Man1.png";
import Men2 from "../assets/Man2.png";
import Women3 from "../assets/Women3.png";
import { FaStar, FaRegStar } from "react-icons/fa";

function Hero() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, []);
  return (
    <div>
    <div
      className="w-full min-h-screen   max-w-full mx-auto bg-cover bg-center flex items-center relative px-4 sm:px-8 lg:px-20 py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-7xl mx-auto mt-5">

       
        <p className="bg-blue-500/60 text-white text-sm sm:text-base w-fit px-4 py-1 rounded-full">
          The Ultimate Hotel Experience
        </p>

        
        <div className="text-white font-serif font-bold mt-6 text-3xl sm:text-4xl md:text-5xl leading-tight">
          <h1>Discover Your Perfect</h1>
          <h1>Gateway Destination</h1>
        </div>

        
        <p className="text-white mt-5 max-w-xl text-sm sm:text-base">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        
        <div className="bg-white rounded-2xl shadow-xl p-4 mt-10 flex flex-col gap-2 md:flex-row md:items-end md:gap-2">

          
          <div className="flex flex-col w-full md:w-1/4">
            <label className="flex items-center gap-2 font-medium mb-1 text-sm">
              <IoLocationOutline />
              Destination
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          
          <div className="flex flex-col w-full md:w-1/5">
            <label className="flex items-center gap-2 font-medium mb-1 text-sm">
              <MdOutlineDateRange />
              Check In
            </label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          
          <div className="flex flex-col w-full md:w-1/5">
            <label className="flex items-center gap-2 font-medium mb-1 text-sm">
              <MdOutlineDateRange />
              Check Out
            </label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          
          <div className="flex flex-col w-full md:w-1/6">
            <label className="font-medium mb-1 text-sm">
              Guests
            </label>
            <input
              type="number"
              min="1"
              placeholder="1"
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          
          <button className="bg-black text-white px-2 py-3 rounded-xl flex items-center justify-center gap-2 w-full md:w-auto hover:bg-gray-800 transition">
            <IoIosSearch size={20} />
            Search
          </button>

        </div>
      </div>
    </div>



    <div className="min-h-200px bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
          
          
          <div className="max-w-7xl mx-auto text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-serif">
              Exclusive Offer
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              The advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
          </div>
    
          
          <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            
            <div
              className="relative min-h-[320px] bg-cover bg-center rounded-2xl p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:scale-105"
              style={{ backgroundImage: `url(${b1})` }}
            >
              <div>
                <p className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium">
                  25% OFF
                </p>
                <h2 className="text-white font-serif text-xl sm:text-2xl mt-6">
                  Summer Escape Package
                </h2>
                <p className="text-white mt-2 text-sm sm:text-base">
                  Enjoy complimentary night and daily breakfast
                </p>
                <p className="text-gray-300 text-xs mt-2">
                  Expires Aug 31
                </p>
              </div>
    
              <div className="flex items-center gap-2 text-white mt-6">
                <p className="font-serif text-lg">View Offers</p>
                <FaArrowRight />
              </div>
            </div>
    
            
            <div
              className="relative min-h-[320px] bg-cover bg-center rounded-2xl p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:scale-105"
              style={{ backgroundImage: `url(${b2})` }}
            >
              <div>
                <p className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium">
                  20% OFF
                </p>
                <h2 className="text-white font-serif text-xl sm:text-2xl mt-6">
                  Romantic Gateway
                </h2>
                <p className="text-white mt-2 text-sm sm:text-base">
                  Enjoy complimentary night and daily breakfast
                </p>
                <p className="text-gray-300 text-xs mt-2">
                  Expires Aug 31
                </p>
              </div>
    
              <div className="flex items-center gap-2 text-white mt-6">
                <p className="font-serif text-lg">View Offers</p>
                <FaArrowRight />
              </div>
            </div>
    
            
            <div
              className="relative min-h-[320px] bg-cover bg-center rounded-2xl p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:scale-105"
              style={{ backgroundImage: `url(${b3})` }}
            >
              <div>
                <p className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium">
                  30% OFF
                </p>
                <h2 className="text-white font-serif text-xl sm:text-2xl mt-6">
                  Luxury Retreat
                </h2>
                <p className="text-white mt-2 text-sm sm:text-base">
                  Enjoy complimentary night and daily breakfast
                </p>
                <p className="text-gray-300 text-xs mt-2">
                  Expires Aug 31
                </p>
              </div>
    
              <div className="flex items-center gap-2 text-white mt-6">
                <p className="font-serif text-lg">View Offers</p>
                <FaArrowRight />
              </div>
            </div>
    
          </div>
        </div>



        <div className="min-h-200px bg-yellow-50 text-black py-20 px-4 sm:px-10 lg:px-20">
              
              <div className="text-center mb-16">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold">
                  What Our Guests Say
                </h1>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                  Discover why discerning travelers consistently choose StayZone for their
                  exclusive and luxurious accommodation around the world.
                </p>
              </div>
        
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-white rounded-xl shadow-xl p-5 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={Men1} alt="Harish" className="h-16 w-16 rounded-full" />
                    <h2 className="text-xl font-serif">Harish Jadhav</h2>
                  </div>
                  <div className="flex text-orange-400 gap-1 mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    "I've used many booking platforms before, this hotel provided an
                    exceptional experience with its prime location, modern design, and
                    incredibly comfortable beds with panoramic city views."
                  </p>
                </div>
        
                
                <div className="bg-white rounded-xl shadow-xl p-5 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={Men2} alt="Saurav" className="h-16 w-16 rounded-full" />
                    <h2 className="text-xl font-serif">Saurav Joshi</h2>
                  </div>
                  <div className="flex text-orange-400 gap-1 mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    "I've used many booking platforms before, this hotel provided an
                    exceptional experience with its prime location, modern design, and
                    incredibly comfortable beds with panoramic city views."
                  </p>
                </div>
        
                
                <div className="bg-white rounded-xl shadow-xl p-5 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={Women3} alt="Ronak" className="h-16 w-16 rounded-full" />
                    <h2 className="text-xl font-serif">Ronak Khan</h2>
                  </div>
                  <div className="flex text-orange-400 gap-1 mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    "I've used many booking platforms before, this hotel provided an
                    exceptional experience with its prime location, modern design, and
                    incredibly comfortable beds with panoramic city views."
                  </p>
                </div>
              </div>
            </div>


            <div className="min-h-110 bg-white text-black  px-10 py-2 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-gray-900 rounded-2xl p-6 md:p-12">
        
        <h1 className="text-3xl md:text-4xl text-white text-center font-serif">
          Stay Inspired
        </h1>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Join our newsletter and be the first to discover new destinations,
          exclusive offers, and travel inspiration.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:flex-1 bg-gray-700 h-11 rounded-md px-4 text-gray-300 outline-none"
          />

          <button className="w-full md:w-auto bg-black text-white h-11 px-6 rounded-md hover:bg-gray-800 transition">
            Subscribe →
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6 px-4">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>

      </div>
    </div>
 





            
          
        
      
    
    













    </div>
  );
}

export default Hero;