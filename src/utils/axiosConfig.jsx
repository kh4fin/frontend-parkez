import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Jika ada error 401 dan request belum di-retry
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        // Jika refresh token ada di localStorage
        if (refreshToken) {
          // Lakukan request untuk mendapatkan access token baru
          const res = await axios.post(
            "http://localhost:8000/dj-rest-auth/token/refresh/",
            {
              refresh: refreshToken,
            }
          );

          const newAccessToken = res.data.access;
          localStorage.setItem("authToken", newAccessToken);

          // Update header dengan token baru
          axiosInstance.defaults.headers[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest); // Kirim ulang request dengan token baru
        }
      } catch (refreshError) {
        console.error("Token invalid or expired, please log in again.");
        localStorage.clear();
        window.location.href = "/login"; // Arahkan ke halaman login
      }
    }

    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const token = localStorage.getItem("authToken");
//         if (token) {
//           const verifyResponse = await axios.post(
//             "http://localhost:8000/dj-rest-auth/token/verify/",
//             { token: token }
//           );

//           if (verifyResponse.status === 200) {
//             return axiosInstance(originalRequest);
//           }
//         }

//         const refreshToken = localStorage.getItem("refreshToken");
//         if (refreshToken) {
//           const res = await axios.post(
//             "http://localhost:8000/dj-rest-auth/token/refresh/",
//             {
//               refresh: refreshToken,
//             }
//           );

//           const newAccessToken = res.data.access;

//           localStorage.setItem("authToken", newAccessToken);

//           axiosInstance.defaults.headers[
//             "Authorization"
//           ] = `Bearer ${newAccessToken}`;
//           originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

//           return axiosInstance(originalRequest);
//         }
//       } catch (error) {
//         console.error("Token invalid or expired, please log in again.");
//         localStorage.clear();
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
