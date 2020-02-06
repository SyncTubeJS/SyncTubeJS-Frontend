<template>
  <div>
      <form ref="form" v-on:submit.prevent="createRoom()">
            <input type="text" ref="name" placeholder="Enter Room Name">
            <button>Submit</button>
      </form>
       
  </div>
</template>

<script>
import { mapState } from 'vuex'
import slugify from 'slugify'

export default {
    computed: mapState([
        'rooms'
    ]),
    methods: {
       createRoom() {
            let roomName = slugify(this.$refs.name.value, '-');
            
            this.$router.push({
                name: 'channel',
                params: { 
                    channelSlug: roomName 
                }
            })
       }
    }
}
</script>

<style>

</style>