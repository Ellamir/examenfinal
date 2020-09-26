<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  <a class="navbar-brand" href="#">Banco Digital de Chile</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" >
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'Transferencias' }">Transferencias</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Perfil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  <!-- <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Banco Digital de Chile</b-navbar-brand>
    <b-collapse id="logueado" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link :to="{name:'Transferencias'}">Transferencias</router-link>|
        <b-nav-item href="#">Profile</b-nav-item>
        <b-nav-item href="#" disabled>Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->


<!-- menu lateral -->
 <b-row>
  <b-col>
    <v-card
      height="auto"
      width="180"
      class="mr-auto"
    >
      <v-navigation-drawer>
        <v-list fixed
          dense
          nav
        >
          <v-list-item>
            <a href="#">Cuenta Corriente</a>
          </v-list-item>
                <v-divider></v-divider>
          <v-list-item>
            <a href="#">Tarjeta de Crédito</a>
          </v-list-item>
              <v-divider></v-divider>
          <v-list-item>
            <a href="#">Línea de Crédito</a>
          </v-list-item>
              <v-divider></v-divider>
          <v-list-item>
            <router-link :to="{name:'Transferencias'}">Transferencias</router-link>
          </v-list-item>
              <v-divider></v-divider>
          <v-list-item>
            <a href="#">Pago de Servicios</a>
          </v-list-item>
            <v-divider></v-divider>
        </v-list>
      </v-navigation-drawer>
    </v-card>   
  </b-col>
    
    <!-- fin menu lateral -->
    
  <b-col cols="10"> 
    <b-row class="container-fluid">
      <router-view></router-view>
      
    </b-row>
    
  </b-col>
</b-row>
  



</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import {
  mapGetters,
  mapActions
} from "vuex";

export default {
  data() {
    return {
      
    };
  },
  mounted() {
    this.getAPI('dashboard.json');
    this.getTRANSF('cartola_transf.json');
  },
  methods: {
    ...mapActions(["getAPI", "getTRANSF"]),
  },
  
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
