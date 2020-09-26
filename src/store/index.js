import Vue from 'vue'
import Vuex from 'vuex'
import getApi from './getApi'
import getTransf from './getTransf'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      cupos: [
        {
          nombre: '',
          utilizado: 0,
          disponible: 0
        },
        {
          nombre: '',
          utilizado: 0,
          disponible: 0,
        },
      ],
      usuario: {
        nombre: '',
        apellido: '',
        mensaje: ''
      },
      transferencias: [
        {
          num_trx: '',
          fecha: '',
          destinatario: '',
          monto: '',
          estado: '',
        },
        {
          num_trx: '',
          fecha: '',
          destinatario: '',
          monto: '',
          estado: '',
        },
        {
          num_trx: '',
          fecha: '',
          destinatario: '',
          monto: '',
          estado: '',
        },
        {
          num_trx: '',
          fecha: '',
          destinatario: '',
          monto: '',
          estado: '',
        },
      ]
    },
    
    
    logged: false,
  },
  mutations: {
    GET_TRANSF(state, payload) {
      state.transferencias = payload
    },

    GET_API(state, payload) {
      state.data = payload
    },
    
  },
  actions: {
    getAPI({ commit }, json) {
      getApi(json).then((data) => {
        commit('GET_API', data);
        console.log(`cartola enviada: ${json}`)

      })
    },
    getTRANSF({ commit }, json) {
      getTransf(json).then((data) => {
        commit('GET_TRANSF', data);
        console.log(`cartola enviada: ${json}`)

      })
    },

    
  },

  getters: {
    
    Spinner1: (state) => {
      let total = Number(state.data.cupos[0].disponible)
      let porciento = Math.ceil((Number(state.data.cupos[0].utilizado) * 100) / total)
      return porciento || 0
    },
    Spinner2: (state) => {
      let total = Number(state.data.cupos[1].disponible)
      let porciento = Math.floor((Number(state.data.cupos[1].utilizado) * 100) / total)
      return porciento || 0
    },

     GetTransferencias (state) {
       return state.transferencias
     }
    
  },
})
