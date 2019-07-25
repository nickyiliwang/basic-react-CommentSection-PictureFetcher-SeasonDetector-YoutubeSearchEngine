import axios from "axios";

const KEY = "AIzaSyCwowW8XNakLh3F8LDpx_uE0iBs1fNzNoU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
