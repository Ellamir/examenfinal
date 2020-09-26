import axios from 'axios'
let getApi = async (llamada) => {
  let base_url = 'http://localhost:8080/'
  let { data } = await axios.get(`${base_url}${llamada}`)
  return data
}

export default getApi
