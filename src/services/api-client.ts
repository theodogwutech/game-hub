import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '79a5e33a42a94fa68f3e636d0fabae66',
  },
});
