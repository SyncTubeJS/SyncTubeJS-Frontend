<template>
  <div>
      <ul>
          <li v-for="room in rooms" v-bind:key=room>
              {{ room }}
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState([
        'rooms'
    ])
}
</script>

<style>

</style>