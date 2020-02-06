import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: ""
  },
  mutations: {
    ADD_ROOM(state, data) {
      state.rooms = data
    },
    CHANGE_ROOM(state, data) {
      state.rooms = data;
    }
  },
  actions: {
    SOCKET_addRoomAction(context, data) {
      context.commit('ADD_ROOM', data)
    }
  }
})
