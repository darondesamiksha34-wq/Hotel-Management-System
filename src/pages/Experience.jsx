import Exe1 from "../assets/Exe1.png";
import { useEffect } from "react";
import Exe2 from "../assets/Exe2.png";
import Exe3 from "../assets/Exe3.png";
import Exe4 from "../assets/Exe4.png";

function Experience() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, []);
  const experiences = [
    {
      img: Exe1,
      title: "Luxury Rooms",
      desc: "Spacious rooms with stunning views, modern amenities, and cozy interiors.",
    },
    {
      img: Exe2,
      title: "Swimming Pool",
      desc: "Enjoy a relaxing swim in our outdoor infinity pool with poolside service.",
    },
    {
      img: Exe3,
      title: "Fine Dining",
      desc: "Savor gourmet meals at our in-house restaurant with diverse cuisines.",
    },
    {
      img: Exe4,
      title: "Spa & Wellness",
      desc: "Relax with massages, aromatherapy, and wellness treatments for ultimate rejuvenation.",
    },
  ];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto mt-16">
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Hotel Experiences
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="w-full h-52">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Guest Reviews
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-2">
          “The stay was incredible! The rooms were clean and spacious, the pool was amazing, and the staff made us feel at home. Highly recommend for anyone looking for a luxurious getaway.”
        </p>
      </div>
    </div>
  );
}

export default Experience;