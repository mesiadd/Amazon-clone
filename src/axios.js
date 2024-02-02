import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-d0a5f.cloudfunctions.net/api",
});
export default instance
