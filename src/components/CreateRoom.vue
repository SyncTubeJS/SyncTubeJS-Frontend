<template>
  <div>
      <form ref="form" v-on:submit.prevent="createRoom()">
            <input type="text" ref="name" placeholder="Enter Room Name">
            <button>Create Room</button>
      </form>
       
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState([
        'rooms'
    ]),
    methods: {
       createRoom() {
          let roomsArray = this.rooms
          let roomName = this.$refs.name.value
          
          //This checks if Room name isnt blank and checks if room is already in state rooms
           if(this.$refs.name.value.length > 0 && !roomsArray.includes(roomName)) {
               this.$socket.emit('create_room', roomName);
           } else {
               alert('Please Enter a Name')
           }
       }
    }
}
</script>

<style>

</style>