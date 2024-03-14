import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8090",
});
console.log(process.env.REACT_APP_API_ENDPOINT);
