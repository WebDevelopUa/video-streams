import axios from "axios";

// const development = 'http://localhost:3001/';
const production = 'https://crud-json-server.herokuapp.com/';

export default axios.create({
    baseURL: production
})