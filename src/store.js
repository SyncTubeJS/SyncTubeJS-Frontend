import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "Anonymous",
    rooms: "",
    chatlog: [
		//is an array of objects that contain
		// username, message, type of message
	]
  },
  mutations: {
    ADD_ROOM(state, data) {
      state.rooms = data
    },
    CHANGE_ROOM(state, data) {
      state.rooms = data
    },
    PUSH_MESSAGE(state, data){
      state.chatlog = [...state.chatlog, data]
    },
    // Clear chatlog
    CLEAR_CHATLOG(state){
      console.log('Client side chatlog cleared!')
      state.chatlog = []
    }
  },
  actions: {
    SOCKET_addRoomAction(context, data) {
      context.commit('ADD_ROOM', data)
	},
	SOCKET_addNewMessage(context, data) {
		context.commit('PUSH_MESSAGE', data)
	}
  }
})
