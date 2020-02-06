<template>
  <div class="channel">
    <h1>Channel Page</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'CLEAR_CHATLOG'
    ])
  },
  mounted(){
    // Clear chat on mount to make sure user doesn't see chat from other channels when the user joins a different channel
    this.CLEAR_CHATLOG();

    // Grab the route slug and join a channel on Channel view mount
    let roomName = this.$route.params.channelSlug
    if(roomName) {
      this.$socket.emit('join_create_room', roomName)
    }
  }
}
</script>