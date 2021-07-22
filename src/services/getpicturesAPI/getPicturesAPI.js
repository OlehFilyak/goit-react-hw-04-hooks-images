import axios from "axios";
import { BASE_URL, API_KEY } from "./contactsGetPicturesAPI";

async function getPicturesAPI(searchQuery, pageQuery) {
  const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&page=${pageQuery}&per_page=12`;
  const { data } = await axios.get(url);
  return data.hits;
}

export default getPicturesAPI;
