<template>
  <div>
        {{ rooms }}
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