<template>
  <div id="NavBarUs">
    <v-toolbar  height="75px">
      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
          class="pointer"
        >
          <img  class="logo" src="https://psv4.userapi.com/c848232/u14278459/docs/d12/9c253ba54a77/888.png?extra=lgc1mw6NvUxxVg0lsl4qRfkKvHmFVbMGeIr4c2QxSAXW3BnllLmixi5pMOILfd7uGjLElKCwhtEHxT1wT8RG3M2qu3jRpzpg1stwTt1yceWsg__kbIAouhOEhf61TZLmg1Qkg5cpqQ9fTxbSS5E9" >
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>

        <v-menu offset-y>
          <v-btn flat slot="activator" color="grey">
            <v-icon left>expand_more</v-icon>
            <span>{{ user?user.Login:'' }}</span>
          </v-btn>
          <v-list>
            <v-list-tile>
              <modal-edit-profile></modal-edit-profile>
            </v-list-tile>
            <v-list-tile>
              <v-btn outline @click="logout" block>Выйти</v-btn>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>import ModalEditProfile from '@/components/components/modals/ModalEditProfile'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NavBarUs',
  components: {
    ModalEditProfile: ModalEditProfile,
  },
  data () {
    return {
      links: [
        {title: 'Главная', icon: '', url: '/'},
        {title: 'Профиль', icon: '', url: '/user'},
        {title: 'Новости', icon: '', url: '/news'},
        {title: 'Сообщения', icon: '', url: '/messages'},
      ],
      username: 'Плотникова Вероника'
    }
  },
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapState(['user'])
  },
  props: ['drawer']
}
</script>

<style scoped>
  .pointer {
    cursor: pointer
  }
  .logo {
    width: 170px;
    height: 71px;
    padding: 5px;
  }
  .button {
    margin: 5px;
  }

  .username {
    padding-top: 20px;
    padding-left: 4px;
  }
</style>
