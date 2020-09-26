<template>
  <div class="container-fluid">
      
      <b-breadcrumb><router-link to="/">Home </router-link> >> Transferencias >> Cartola</b-breadcrumb>
      
        <h3>Cartola Transferencias</h3>

    <b-container fluid="sm">
  <b-row>
    
    <b-col><table class="hover table">
              <thead>
                <tr>
                  <th scope="col">N° Trx</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Destinatario</th>
                  <th scope="col">Monto</th>
                  <th scope="col">Estado</th>
                  <th scope="col"><!-- iconito--></th>
                  <!-- ver detalle no debe hacer nada -->
                  <th scope="col"><!-- ver detalle--></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(transferencia, i) in this.GetTransferencias.transferencias" :key="i">
                  <th scope="row">{{ transferencia.num_trx }}</th>
                  <td>{{ transferencia.fecha }}</td>
                  <td>{{ transferencia.destinatario }}</td>
                  <td>{{ transferencia.monto }}</td>
                  <td>{{ transferencia.estado }}</td>
                  <td>&#10004;</td>
                  <td><button class="btn btn-info">ver Detalle</button></td>
                </tr>
              </tbody>
            </table></b-col>
  </b-row>
</b-container>
</div>
</template>
    


  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex"
export default {
    name: 'TransCartola',
    computed: {   
    ...mapGetters(["GetTransferencias"]),
    }
}

</script>

<style>

</style>