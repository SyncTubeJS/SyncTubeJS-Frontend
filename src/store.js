import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "",
    rooms: "",
    chatlog: []
  },
  mutations: {
    ADD_ROOM(state, data) {
      state.rooms = data
    },
    CHANGE_ROOM(state, data) {
      state.rooms = data
    },
    PUSH_MESSAGE(state, data){
      state.chatlog = [...chatlog, data]
    },
    CLEAR_CHATLOG(state, data){
      state.chatlog = []
    }
  },
  actions: {
    SOCKET_addRoomAction(context, data) {
      context.commit('ADD_ROOM', data)
    }
  }
})
