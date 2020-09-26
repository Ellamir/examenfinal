<template>
<div id="app">
  <navbar></navbar>
  


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
            <router-link class="navbar-brand" to="/">Cuenta Corriente</router-link>
          </v-list-item>
                <v-divider></v-divider>
          <v-list-item>
            <a href="#" disabled>Tarjeta de Crédito</a>
          </v-list-item>
              <v-divider></v-divider>
          <v-list-item>
            <a href="#" disabled>Línea de Crédito</a>
          </v-list-item>
              <v-divider></v-divider>
          <v-list-item>
            <router-link :to="{name:'Transferencias'}">Transferencias</router-link>
          </v-list-item>
              <v-divider></v-divider>
          <v-list-item>
            <a href="#" disabled>Pago de Servicios</a>
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
  components: {
    Navbar
  },
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
