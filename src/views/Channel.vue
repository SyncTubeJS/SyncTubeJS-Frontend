<template>
  <div class="channel">
    <h1>Channel Page</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route)

    let roomName = this.$route.params.channelSlug

    if(roomName) {
        this.$socket.emit('create_room', roomName);
    } else {
        alert('Please Enter a Name')
    }
  }
}
</script>