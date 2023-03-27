import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6ac24ae339424297924ef1554917440e",
  },
});