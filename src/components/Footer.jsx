import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { RiHomeSmile2Fill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="w-full bg-blue-50 px-6 py-10">
      
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        
        
        <div className="md:w-1/4">
          <p className="flex items-center text-black text-xl font-bold">
            <RiHomeSmile2Fill className="text-2xl mr-2" />
            StayZone
          </p>
          <p className="text-sm mt-3">
            Discover the world's most extraordinary places to stay,
            from boutique hotels to luxury villas and private islands.
          </p>

          <div className="flex gap-4 mt-4 text-lg">
            <FaInstagram />
            <FaFacebookF />
            <LuTwitter />
            <FiLinkedin />
          </div>
        </div>

        
        <div>
          <h1 className="font-semibold text-lg">Company</h1>
          <ul className="text-sm mt-4 space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Partners</li>
          </ul>
        </div>

        
        <div>
          <h1 className="font-semibold text-lg">Support</h1>
          <ul className="text-sm mt-4 space-y-2">
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        
        <div className="md:w-1/4">
          <h1 className="font-semibold text-lg">Stay Updated</h1>
          <p className="text-sm mt-4">
            Subscribe to our newsletter for travel inspiration and special offers.
          </p>

          <div className="flex mt-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-white px-4 py-2 text-gray-700 outline-none rounded-l-md border"
            />
            <button className="bg-black px-5 text-white rounded-r-md">
              ➔
            </button>
          </div>
        </div>
      </div>

      
      <hr className="my-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2026 StayZone. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
