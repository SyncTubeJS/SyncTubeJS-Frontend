import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    ADD_ROOM(state, data) {
      //Disallow mutation if room already in state rooms. Should this be in actions?
      if(!state.rooms.includes(data)) {
        state.rooms = [...state.rooms, data]
      }
    },
    CHANGE_ROOM(state, data) {
      state.rooms = data;
    }
  },
  actions: {
    SOCKET_addRoomAction(context, data) {
      context.commit('ADD_ROOM', data)
    },
    SOCKET_changeRoomAction(context, data) {
      context.commit('CHANGE_ROOM', data)
    }
  }
})
