<template>
  <div class="home">
    <button @click="clickButton()">Test Connection</button>
    <createRoom />
    <roomList />
  </div>
</template>

<script>
import createRoom from '../components/CreateRoom'
import RoomList from '../components/RoomList'
export default {
  components: {
    createRoom, RoomList
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
