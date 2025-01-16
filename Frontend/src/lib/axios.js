// import axios from "axios";

// const axiosInstance = axios.create({
// 	baseURL: import.meta.mode === "development" ? "http://localhost:3000/api" : "/api",
// 	withCredentials: true, // send cookies to the server
// });

// export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3000/api", // Set the base URL for all requests
	withCredentials: true, // Include cookies for authentication if necessary
});

export default axiosInstance;