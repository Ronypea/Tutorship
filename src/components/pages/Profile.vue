<template>
  <LayoutAuthUs>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm12 md5 lg4 align-center justify-center>
            <v-card style="padding: 10px; margin-left: 20px; margin-right: 40px" float>
              <div class="title mb-1 Avatar"> {{ user.name }} {{ user.surname }}</div>
              <div class="subheading Avatar"> {{ user.role }}</div>
              <v-img
                :src=user.avatar
                max-width="800" max-height="400" position="center center"></v-img>
              <v-card id="Portfolio">
                <v-card-text> Возраст: {{ user.age }}</v-card-text>
                <v-divider light></v-divider>
                <v-card-text> Учреждение: {{ user.workplace }}</v-card-text>
                <v-divider light></v-divider>
                <v-card-text> E-mail: {{ user.email }}</v-card-text>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 md12 lg8>
            <v-layout row wrap>
              <v-flex d-flex lg12 justify-center align-center>
                <v-card class="Avatar">
                  <div class="title mb-1" style="padding: 12px; background-color: lightgrey">Галерея</div>
                  <v-carousel
                    cycle
                    height="400"
                    hide-delimiters
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(item, i) in albums"
                      :key="i"
                      :src="item.photo"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    >
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-flex>
              <v-flex lg12>
                <v-card class="Avatar">
                  <div class="title mb-1" style="padding: 12px; background-color: lightgrey"> Встречи</div>
                  <meetings-list :meetings="meetings"></meetings-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </LayoutAuthUs>
</template>

<script> import LayoutAuthUs from '../layouts/LayoutAuthUs'
import MeetingsList from '../components/MeetingsList'
import Service from '../../services/Service'

export default {
  components: {LayoutAuthUs, MeetingsList},
  data() {
    return {
      user: {},
      albums: {},
      meetings: {},
      props_info: {id: '2'},
      props_photo: {user_id: '2'},
      props_meeting: {mentor_id: '2'}
      // Meetings: [
      //   {id: 0, status: 'watching', data: '11/04/1999'},
      //   {id: 1, status: 'checked', data: '12/04/1999'},
      //   {id: 2, status: 'checked', data: '13/04/1999'},
      //   {id: 3, status: 'refused', data: '14/04/1999'},
      //   {id: 4, status: 'checked', data: '15/04/1999'}
      // ]
    }
  },
  methods: {
    async insertData() {
      const response_info = await Service.profileInfo(this.props_info)
      const response_photo = await Service.photoGallery(this.props_photo)
      const response_meetings = await Service.mentorMeetings(this.props_meeting)
      this.user = response_info.data[0]
      this.albums = response_photo.data
      this.meetings = response_meetings.data
      console.log(this.user)
      console.log(this.albums)
      console.log(this.meetings)
    }
  },
  mounted() {
    this.insertData()
  }
}
// <!--this.Saved.Routes = response.data.like
// <!--},-->
// <!--RoutePage (id){-->
// <!--this.$router.push({ name: 'EditRoute', params: {id} })-->
// <!--}-->
// <!--},-->
// <!--mounted () {-->
// <!--this.insertData()-->
// <!--}-->
// <!--}-->
</script>

<style scoped>
  .Avatar {
    text-align: center;
  }
</style>
