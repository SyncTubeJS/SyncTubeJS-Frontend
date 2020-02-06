<template>
  <div class="channel">
    <h1>Channel Page</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    // Grab the route slug and join a channel on Channel view mount
    let roomName = this.$route.params.channelSlug

    if(roomName) {
      this.$socket.emit('join_create_room', roomName)
    }
  }
}
</script>