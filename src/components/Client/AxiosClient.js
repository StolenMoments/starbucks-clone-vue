import axios from 'axios';

const baseURL = 'https://taling.projectlion.lkaybob.pe.kr/api';

export default axios.create({
  baseURL,
});
