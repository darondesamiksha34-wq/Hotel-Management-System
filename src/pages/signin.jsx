import { useState } from "react";
import BG from "../assets/Login1.jpg";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";  
import { registerUser } from "../services/user.service";

function Signin() {
  const navigate = useNavigate();  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  
      const handleSubmit = (e) => {
          e.preventDefault();
          alert("Account Created Successfully!")
          const data = {
              name,
              email,
              password
          }
          registerUser(data)
  
  
      };
  

  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center px-4 p-5"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="bg-white w-90 min-h-105 p-5 rounded-2xl shadow-5xl mt-20">
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl">Create Account</h1>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1 text-sm">
              <FaRegUser />
              <label>Full Name</label>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full h-9 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1 text-sm">
              <MdOutlineEmail />
              <label>Email Address</label>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full h-9 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1 text-sm">
              <MdLockOutline />
              <label>Password</label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              minLength={6}
              className="w-full h-9 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-black text-white rounded-xl hover:bg-gray-800 transition text-sm"
          >
            Create Account
          </button>
        </form>

        <div className="my-3 text-center text-gray-500 text-sm">or</div>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 h-10 rounded-xl hover:bg-gray-50 transition text-sm">
          <FcGoogle />
          Continue with Google
        </button>

        <div className="mt-4 text-center text-sm">
          <span>Already have an account? </span>
          <button 
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium hover:underline"
          >
            Sign in
          </button>
        </div>

      </div>
    </div>
  )
}

export default Signin;

