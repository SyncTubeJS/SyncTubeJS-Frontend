<template>
  <div>
		<div class="chats-container">
			<ul>
				<li :class="message.type" v-for="(message, index) in chatlog" v-bind:key="index">
					message: {{message.message }}
					name: {{ message.username }}
				</li>
			</ul>
		</div>

		<div class="chat-input">
			 //THIS IS THE INPUT FIELD <br />
			 <input v-on:keyup.enter="sendMessage()" v-model="message" type=""> <br />
			 <button v-on:click="sendMessage()">Send Chat</button>
		</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data: function(){
		return {
			message: ''
		}
	},
	computed: {
		...mapState([
			'username', 'chatlog', 'room'
		])
	},
	methods: {
		sendMessage() {
			let message = this.message
			if(message.length >= 1) {
				this.$socket.emit('new_message',{
					message: message,
					username: this.username,
					room: this.room
				});
			}
			
			this.message = ''
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>