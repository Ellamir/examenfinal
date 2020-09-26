<template>
<div>
  <h1>soy detalle</h1>
  {{ id }}
  {{ getJustOneOrder.cliente }}<br />
  {{ getJustOneOrder.monto }}<br />
  {{ getJustOneOrder.cant_productos }}<br />
  {{ getJustOneOrder.fecha_entrega }}<br />
  {{ getJustOneOrder.avance_preparacion }}<br />
  {{ getJustOneOrder.estado }}<br />
</div>
</template>

<script>
import {
  mapState
} from "vuex";
export default {
  name: "Tabla",
  props: ["id"],
  mounted() {
    console.log(this.$route);
  },
  computed: {
    ...mapState(["ordenes"]),
    getJustOneOrder() {
      return this.ordenes.ordenes.find((o) => o.num_orden == this.id) || "";
    },
  },
};
</script>
