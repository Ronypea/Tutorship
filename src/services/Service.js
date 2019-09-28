import api from '../services/API'
import store from '../store'

const authHeaders = () => ({
  headers: {
    'Authorization': `Bearer ${store.state.token}`
  }
})

export default {
  getCities () {
    return api().get('/get/cities', authHeaders())
  },
  profileInfo (params) {
    return api().post('/get/user', params, authHeaders())
  },

  // eslint-disable-next-line
  register ({username, password, password_repeated}) {
    return api().post(`register`, { username, password, password_repeated })
  },
  login ({username, password}) {
    return api().post(`login`, { username, password })
  },
  logout () {
    return api().post(`logout`)
  },
  whoAmI () {
    return api().get(`me`, authHeaders())
  }
}
