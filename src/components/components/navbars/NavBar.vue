<template>
    <div id="navbar">
    <!--<v-navigation-drawer-->
      <!--app-->
      <!--v-model="drawer"-->
    <!--&gt;-->
      <!--<v-list>-->
        <!--<v-list-tile-->
          <!--v-for="link of links"-->
          <!--:key="link.title"-->
          <!--:to="link.url"-->
        <!--&gt;-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title v-text="link.title"></v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->

    <v-toolbar>
      <!--<v-toolbar-side-icon-->
        <!--class="hidden-md-and-up"-->
        <!--@click="drawer = !drawer"-->
      <!--&gt;</v-toolbar-side-icon>-->
      <v-toolbar-title permanent>
        <router-link
          to="/"
          tag="span"
          class="pointer"
        >
          <a href="/"> <img class="logo" src="https://psv4.userapi.com/c848232/u14278459/docs/d12/9c253ba54a77/888.png?extra=lgc1mw6NvUxxVg0lsl4qRfkKvHmFVbMGeIr4c2QxSAXW3BnllLmixi5pMOILfd7uGjLElKCwhtEHxT1wT8RG3M2qu3jRpzpg1stwTt1yceWsg__kbIAouhOEhf61TZLmg1Qkg5cpqQ9fTxbSS5E9"> </a>
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
        <modal-login class="button"></modal-login>
        <modal-register class="button"></modal-register>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import ModalLogin from '@/components/components/modals/ModalLogin'
import ModalRegister from '@/components/components/modals/ModalRegister'
export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        // {title: 'Главная', icon: '', url: '/'}
        // {title: 'Профиль', icon: '', url: '/user'}
        // {title: 'Создать маршрут', icon: '', url: '/create_route'}
      ]
    }
  },
  components: {
    ModalLogin: ModalLogin,
    ModalRegister: ModalRegister
  },
  props: ['drawer']
}
</script>

<style scoped>
  .pointer {
    cursor: pointer
  }
  .logo {
    width: 270px;
    height: 50px;
  }
  .button {
    margin: 5px;
  }
</style>
