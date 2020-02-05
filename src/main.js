import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

// const socket = socketio('http://localhost:1339');

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:1339',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
