<template>
  <v-app dark>

    <NavBar></NavBar>
    <v-content dark class="primary">
      <router-view></router-view>
    </v-content>
  
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: { NavBar },
  data () {
    return {
      //
    }
  }
}
</script>
