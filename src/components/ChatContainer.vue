<template>
  <div>
		<div class="chats-container">
			<ul>
				<li v-for="(message, index) in chatlog" v-bind:key="index">
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
			'username', 'chatlog'
		])
	},
	methods: {
		sendMessage() {
			let message = this.message
			if(message.length >= 1) {
				console.log(message)
			}
			
			this.$socket.emit('new_message',{
				message: message,
				username: this.username

			});
			this.message = ''
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>