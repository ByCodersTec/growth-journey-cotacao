import axios from 'axios';

const HTTPClient = axios.create({
  baseURL: 'https://quotation-project.herokuapp.com/',
});

export default HTTPClient;
