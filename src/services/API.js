import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: 'http://sadiesx.ru.host1770569.serv22.hostland.pro/'
  })
}
