<template>
  <div class="container-fluid">
      <div>
  <b-tabs content-class="mt-3" align="left">
    <b-tab title="Cartola transferencias" active>
        <trans-cartola></trans-cartola>
    </b-tab>
    <b-tab title="Nueva transferencia" >
        <trans-nueva></trans-nueva>
    </b-tab>
    </b-tabs>
</div>
  </div>
</template>

<script>
import TransCartola from '@/components/TransCartola.vue'
import TransNueva from '@/components/TransNueva.vue'
import { mapGetters} from "vuex"
export default {
  name: "Transferencias",
  components: {
    TransNueva, TransCartola
  },
  
  computed: {
  ...mapGetters(["GetTransferencias"]),
  },

  
}
</script>

<style>

</style>