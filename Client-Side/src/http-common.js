import axios from "axios";

//3000 or 3001? We will see...

export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});