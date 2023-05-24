import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "4b791c5ffa41420f932a15d79b3cd089",
  },
});
