import api from '../services/API'
import store from '../store'

const authHeaders = () => ({
  headers: {
    'Authorization': `Bearer ${store.state.token}`
  }
})

export default {
  getCities () {
    return api().get('/get/cities')
  },
  profileInfo (params) {
    return api().post('/get/user', params, authHeaders())
  },
  photoGallery (params) {
    return api().post('get/photos', params, authHeaders())
  },
  mentorMeetings (params) {
    return api().post('/get/meeting-by-mentor-id', params, authHeaders())
  },
  createMeeting (params) {
    return api().post('/add/meeting', params, authHeaders())
  },
  getChildren (params) {
    return api().post('/get/rels', params, authHeaders())
  },
  createReport (params) {
    return api().post('add/report', params, authHeaders())
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
