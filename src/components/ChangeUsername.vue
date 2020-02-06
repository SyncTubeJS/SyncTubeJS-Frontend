<template>
  <input v-model="username" :class="{active: active}" contenteditable  @:click="clearInput()" @blur="setName()" @:keyup.enter="setName()">
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	data: function(){
		return {
			username: 'Anonymous',
			active: false
		}
	},
	methods: {
		...mapActions([
			'updateUserName'
		]),
		clearInput(){
			
		},
		setName(){
			this.updateUserName(this.username)
		}
	}
}
</script>

<style lang="scss" scoped>
	input {
		display: inline-block;
		width: auto;
		cursor: pointer;
		border: 1px dotted rgb(228, 228, 228);
		padding: 5px;
		&:focus {
			border:  1px solid #000;
			outline: 0;
		}
	}
</style>