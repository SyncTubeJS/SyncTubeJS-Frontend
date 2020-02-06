<template>
  <div class="home">
    <button @click="clickButton()">Test Connection</button>
    <createRoom />
  </div>
</template>

<script>
import createRoom from '../components/CreateRoom'
export default {
  components: {
    createRoom
  },
  name: 'home',
  sockets: {
    connect() {
      console.log('socket connected')
    },
    console_message(val) {
      console.log(val)
    }
  },
  methods: {
    clickButton() {
      this.$socket.emit('test_connect', { payload : 'test_payload' });
    }
  }
}
</script>
