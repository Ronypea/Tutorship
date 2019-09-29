import axios from 'axios'

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = ''

export default () => {
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://sadiesx.ru.host1770569.serv22.hostland.pro/'
  })
}
