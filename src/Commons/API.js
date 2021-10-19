import axios from "axios";

const getBeerList = async () => {
  return await axios.get("https://api.punkapi.com/v2/beers")
}
export default getBeerList