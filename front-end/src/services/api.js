const BASE_URL = "http://localhost:5000/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/register",
  LOGIN_API: BASE_URL + "/auth/login",

  PROFILE_UPDATE: BASE_URL + "/profile/updateProfile",
};
