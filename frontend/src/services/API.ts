import axios from "axios";
export default axios.create({
  baseURL: "http://44.192.42.127:8090",
});
console.log(process.env.REACT_APP_API_ENDPOINT);
