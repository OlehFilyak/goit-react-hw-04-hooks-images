import axios from "axios";

function getPictures(searchQuery, pageQuery) {
  const BASE_URL = "https://pixabay.com/api";
  const KEY = "21971699-e4871e677dfd96d166595cbee";
  return axios({
    method: "GET",
    url: `${BASE_URL}/?key=${KEY}&q=${searchQuery}&page=${pageQuery}&per_page=12`,
  });
}

export default getPictures;
