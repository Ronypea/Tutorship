<template>
  <LayoutAuthUs>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm12 md6 lg4 align-center justify-center>
            <v-card class="Avatar">
              <div class="title mb-1"> {{ name }} {{ surname }}</div>
              <div class="subheading"> {{ character }}</div>
              <v-img
                src="https://scontent-yyz1-1.cdninstagram.com/vp/4cb48e816c23553396618d5fbce4cd16/5E3A2038/t51.2885-15/e35/61371739_2297866336970576_3936695332403802332_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=108"
                max-width="200" max-height="300"></v-img>
              <v-list-tile-content>
                <v-list-tile-title> Возраст: {{ age }}</v-list-tile-title>
                <v-list-tile-title> Учреждение: {{ place }}</v-list-tile-title>
                <v-list-tile-title> E-mail: {{ email }}</v-list-tile-title>
              </v-list-tile-content>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 lg8>
            <v-layout row wrap>
              <v-flex d-flex lg12 justify-center align-center>
                <v-card>
                  <v-card-text>Галерея</v-card-text>
                  <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(item, i) in albums"
                      :key="i"
                      :src="item.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    >
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-flex>
              <v-flex lg12>
                <v-card>
                  <v-card-title> Встречи</v-card-title>
                  <meetings-list></meetings-list>
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

export default {
  components: {LayoutAuthUs, MeetingsList},
  data() {
    return {
      name: 'Вероника',
      surname: 'Плотникова',
      patronymic: 'Сергеевна',
      age: '20',
      city: 'Санкт-Петербург',
      email: 'Plotnikova99.99@gmail.com',
      character: 'Frontend разработчик',
      place: 'VK Hackathon',
      foto: 'https://i.pinimg.com/736x/70/ae/ed/70aeed769408dede74aaf1818bd3bb32.jpg',
      albums: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
// <!--import Service from '../../services/Service'-->
// <!--export default {-->
// <!--components: {-->
// <!--LayoutAuthUs-->
// <!--},-->
// <!--data () {-->
// <!--return {-->
// <!--Saved: {-->
// <!--Routes: []-->
// <!--},-->
// <!--User: {-->
// <!--Routes: [],-->
// <!--Info: {}-->
// <!--}-->
// <!--}-->
// <!--},-->
// <!--methods: {-->
// <!--async insertData () {-->
// <!--const response = await Service.ProfileInfo()-->
// <!--this.User.Routes = response.data.author-->
// <!--this.User.Info = response.data.profile-->
// <!--this.Saved.Routes = response.data.likes-->
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
    font-weight: bold;
  }
</style>
