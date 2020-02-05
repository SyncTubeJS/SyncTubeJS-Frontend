<template>
  <div class="home">
    <button @click="clickButton()">Test Connection</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
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
