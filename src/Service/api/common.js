import axios from 'axios'
export default function makeApiCall(
    url,
    method = 'get',
    data
  ) {
    return axios({
      method,
      url: `${url}`,
      data,
    })
  }