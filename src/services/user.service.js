import instance from "./axiosConfig";

//Signup user
export const registerUser = async (data) => {
  try {
    const response = await instance.post("/signup", data);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};

// Login user
export const loginUser = async (data) => {
  try {
    const response = await instance.post("/login", data);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    const response = await instance.post("/logout");
    return response.data;
  } catch (error) {
    console.error("Logout Error:", error.response?.data || error.message);
    throw error;
  }
};

//Password user
export const resetPassword = async () => {
  try {
    const response = await instance.post("/reset-password");
    return response.data;
  } catch (error) {
    console.error("Logout Error:", error.response?.data || error.message);
    throw error;
  }
};

//otp
export const sendResetOtp = async () => {
  try {
    const response = await instance.post("/send-reset-otp");
    return response.data;
  } catch (error) {
    console.error("Logout Error:", error.response?.data || error.message);
    throw error;
  }
};
