<template>
  <div>
      <form ref="form" v-on:submit.prevent="createRoom()">
            <input type="text" ref="name" placeholder="Enter Room Name">
            <button>Create Room</button>
      </form>
       
  </div>
</template>

<script>
export default {
    
    methods: {
       createRoom() {
           console.log(this.$refs.name.value)
           this.$socket.emit('create_room', this.$refs.name.value);
       }
    }
}
</script>

<style>

</style>