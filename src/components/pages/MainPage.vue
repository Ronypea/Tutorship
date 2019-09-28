<template>
  <component :is="isAuthorized?'LayoutAuthUs':'MainLayout'">
    <v-content id="page">
      <v-flex d-flex xs12 sm12 md12 lg12>
        <v-card id="info" style="margin: 1rem">
          <v-container fill-height fluid>
            <v-layout align-center justify-centert>
              <v-flex align-center flexbox lg12>
                <div>
                  <div class="header" v-html="header1"></div>
                  <div class="header2" v-html="header2"></div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-card>
        <v-flex d-flex xs12 sm12 md12 lg12>
          <v-card>
            <v-card-title class="header">Что такое проект "Наставничество"?</v-card-title>
            <v-container fluid grid-list-lg>
              <v-layout wrap>
                <v-flex d-flex
                        v-for="(item, index) in about"
                        v-bind:key="index"
                        xs12 sm6 lg3>
                  <v-card style="margin: 1rem; padding: 1rem">
                    <v-card-title>
                      <v-icon
                        large
                      >
                        {{item.icon}}
                      </v-icon>
                      <v-divider light></v-divider>
                      {{item.name}}
                    </v-card-title>
                    <v-divider light></v-divider>
                    <v-spacer></v-spacer>
                    <v-card-text class="h3">{{item.description}}</v-card-text>

                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md10 lg10 row>
          <v-card-title class="header">Как это работает?</v-card-title>
          <v-card-text>
            <v-icon
              large
              color="yellow"
            >
              wb_sunny
            </v-icon>
            В рамках проекта у ребёнка появляется значимый взрослый – старший друг,
            который будет искренне интересоваться его жизнью и поддерживать его.
            <v-spacer></v-spacer>
            <v-icon
              large
              color="yellow"
            >
              wb_sunny
            </v-icon>
            В проекте участвуют подростки из детских домов от 12 лет, наставник должен
            быть старше 24 лет.
            <v-spacer></v-spacer>
            <v-icon
              large
              color="yellow"
            >
              wb_sunny
            </v-icon>
            После того, как взрослый заполняет анкету, проводится собеседование с
            психологом для уточнения всех неясных моментов.
            <v-spacer></v-spacer>
            <v-icon
              large
              color="yellow"
            >
              wb_sunny
            </v-icon>
            Далее кураторы проекта подбирают Наставнику ребенка, подходящего ему по
            возрасту, полу, особенностям характера и поведения.
            <v-spacer></v-spacer>
            <v-icon
              large
              color="yellow"
            >
              wb_sunny
            </v-icon>
            Да, иногда установить с ребёнком контакт бывает нелегко. У каждого из
            них своя непростая история. Им трудно пустить кого-то в свой мир. Но
            преодолеть этот барьер можно – в этом наставнику помогают психологи и
            специалисты на групповых встречах и индивидуальных консультациях.
          </v-card-text>
        </v-flex>
        <v-flex lg12 d-flex row>
          <v-menu offset-y>

              <v-btn x-large block color="secondary" dark flat slot="activator"
                     v-on="on"
              >
                Выберите Ваш город
              </v-btn>
              <v-list>
                <v-list-tile
                  v-for="(city, i) in cities"
                  :key="i"
                  @click="chooseCity(city.name)"
                >
                  <v-list-tile-title>{{ city.name }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
          </v-menu>
        </v-flex>
      </v-card>
    </v-content>
  </component>
</template>

<script>import Service from '../../services/Service'
import MainLayout from '@/components/layouts/MainLayout'
import LayoutAuthUs from '@/components/layouts/LayoutAuthUs'
import {mapGetters} from 'vuex'
import router from '../../router/index'

export default {
  components: {
    MainLayout,
    LayoutAuthUs
  },
  data() {
    return {
      header1: ' Проект «Наставничество» призван помочь\n' +
        '                    показать ребенку жизнь за пределами детского дома ',
      header2: 'Когда ребёнок живет в детском доме, мира взрослых как будто и не существует.\n' +
        'Есть только воспитатели и дети, которым не хватает заботы и внимания.\n' +
        'Поэтому только 10% из числа выпускников детского дома находят своё место во взрослой жизни,\n' +
        'ведь откуда им о ней узнать?',
      about: [
        {
          icon: 'school',
          name: 'ПСИХОЛОГИ',
          description: 'Проект сопровождают профессиональные психологи, которые несколько раз в месяц проводят с участниками групповые и индивидуальные супервизии, оценивают работу наставников, дают рекомендации, корректируют маршрутные листы детей'
        },
        {
          icon: 'laptop_mac',
          name: 'ЛИЧНЫЙ КАБИНЕТ',
          description: 'Каждый Наставник имеет доступ к личному кабинету, где может составлять удобный график встреч с ребенком, получать быстрые советы от психолога, быть в курсе всех событий в рамках проекта'
        },
        {
          icon: 'menu_book',
          name: 'ЛИТЕРАТУРА',
          description: 'На сайте хранится вся необходимая информация об индивидуальных особенностях детей, ссылки на полезные статьи и различная интересная информация о Наставничестве. Доступ в библиотеку открыт для зарегистрированных пользователей.'
        },
        {
          icon: 'group',
          name: 'СООБЩЕСТВО',
          description: 'В рамках проекта Наставничество проходят тематические встречи наставников, детей и кураторов проекта. Участвуя в проекте, вы попадаете в сообщество неравнодушных людей тех, кому #невсеравно. Всегда можно обратиться за советом к тем, кто давно общается с детьми и получить необходимую информацию'
        }
      ],
      cities: [
        {name: 'novosibirsk'},
        {name: 'kazan'},
        {name: 'omsk'}
      ]
    }
  },
  computed: {
    ...mapGetters(['isAuthorized'])
  },
  methods: {
    chooseCity (cityName) {
      router.push({name: 'FondsInfo', params: {name: cityName}})
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Comfortaa&display=swap");

  .header {
    text-align: center;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    /*background: rgba(205, 214, 219, 0.3);*/
    font-size: xx-large;
  }

  .header2 {
    text-align: center;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: large;
    /*background: rgba(205, 214, 219, 0.3);*/
  }

  #info {
    height: 400px;
    background-image: linear-gradient(rgba(205, 214, 219, 0.3), #5a6370), url(http://www.nastavnik54.ru/assets/main_page/bg2-e55106e310b40363fc8a0d52b951c42dc696226954c248af8beb8ac5d82653f3.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken
  }

  #tutorship {
    height: 500px;
  }

  #map {
    margin: 15px;
    top: 50%;
  }

  #search {
    width: 50%;
    border: 1px solid;
    margin: 15px;
    background: white;
  }

  h3 {
    font-family: 'Comfortaa', cursive;
  }
</style>
