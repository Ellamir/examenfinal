<template>

<div class="container-fluid">
      
      <b-breadcrumb>Home > Dashboard</b-breadcrumb>
       <v-parallax 
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        height="400"
        ></v-parallax>
      <div class="saludo">
      <h3 font-weight-thin>Bienvenido {{ this.nombre }}</h3>
      <h5>{{ this.mensaje }}</h5>
      </div>
      <div class="row kpi_box">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 kpi_1">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div>
                        <div class="text-center">
                        <v-progress-circular :rotate="270" :size="120" :width="30" :value="Spinner1" color="teal">
                          {{ Spinner1 }}%
                        </v-progress-circular>
                        </div>
                    </div>
                    <div class="mt-1">
                        <a href="">Utilizado</a>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <p class="font-weight-bold text-center mt-3">{{this.titulo1}}</p>
                    <div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{this.utilizado1}}</h2>
                            <p class="font-weight-bold text-center">Utilizado</p>
                        </div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{this.disponible1}}</h2>
                            <p class="font-weight-bold text-center">Total</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 kpi_2">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div>
                        <v-progress-circular :rotate="270" :size="120" :width="30" :value="Spinner2" color="teal">
                          {{ Spinner2 }}%
                        </v-progress-circular>
                    </div>
                    <div class="mt-1">
                        <a href="">Utilizado</a>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <p class="font-weight-bold text-center mt-3">{{this.titulo2}}</p>
                    <div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{this.utilizado2}}</h2>
                            <p class="font-weight-bold text-center">Utilizado</p>
                        </div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{this.disponible2}}</h2>
                            <p class="font-weight-bold text-center">Total</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>



  </div>




</template>

<script>
import axios from "axios";
import {
  mapGetters, mapState, mapActions
} from "vuex";
export default {
  name: 'Home',
  
  //components: {
  //},
  

  computed: {
    ...mapGetters(["Spinner1" , "Spinner2"]),
    ...mapState({
      titulo1: state => state.data.cupos[0].nombre,
      utilizado1: state => state.data.cupos[0].utilizado,
      disponible1: state => state.data.cupos[0].disponible,
      titulo2: state => state.data.cupos[1].nombre,
      utilizado2: state => state.data.cupos[1].utilizado,
      disponible2: state => state.data.cupos[1].disponible,
      nombre: state => state.data.usuario.nombre,
      apellido: state => state.data.usuario.apellido,
      mensaje: state => state.data.usuario.mensaje,
    })
  },
};
</script>

<style scoped>
.kpi_box {
        
        border: 1px solid black;
    }
    .kpi_1 {
        border: 1px solid black;
        position: relative;
        width: 100px;
        
    }
    .kpi_2 {
        border: 1px solid black;
        position: relative;
        width: 100px;
    }
.saludo {
  text-align: left;
}
</style>

