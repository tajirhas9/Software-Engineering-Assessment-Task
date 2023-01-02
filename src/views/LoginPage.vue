<template>
	<body>
		<div class="main">
			<div class="login">
				<form>
					<label>Login</label>
					<div class="error">{{ error }}</div>
					<input type="email" v-model="identify" name="identify" placeholder="Email" required="" />
					<input type="password" v-model="password" name="password" placeholder="Password" required="" />
					<button v-on:click.stop.prevent="login">Login</button>
					<a class="labelNormal" href="#/signup">Don't have an account? Sign Up</a>
				</form>
			</div>
		</div>
	</body>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'LoginPage',
		data() {
			return {
				error: '',
				identify: '',
				password: '',
			}
		},
		methods: {
			async login() {
				let errorFlag = true

				if (this.identify == '' || this.password == '') {
					this.error = 'Please Fill All Field'
					this.$router.push({ name: 'login' })
					errorFlag = false
				}
				let result = await axios.get(
					`http://localhost:3000/candidates/auth-with-password?identify=${this.identify}&password=${this.password}`
				)
				if (result.status == 200 && result.data.length > 0 && errorFlag == true) {
					localStorage.setItem('user-info', JSON.stringify(result.data[0]))
					this.$router.push({ name: 'home' })
				} else if (errorFlag == true) {
					this.error = 'Email and Password Mismatches'
					this.$router.push({ name: 'login' })
					errorFlag = false
				}
			},
		},
		mounted() {
			let user = localStorage.getItem('user-info')
			if (user) {
				this.$router.push({ name: 'home' })
			}
		},
	}
</script>

<style scoped>
	body {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		font-family: 'Jost', sans-serif;
		background: white;
	}
	.main {
		width: 500px;
		height: 700px;
		background: red;
		overflow: hidden;
		background: #302b63;
		border-radius: 10px;
		box-shadow: 5px 20px 50px #000;
	}
	label {
		color: #fff;
		font-size: 3em;
		justify-content: center;
		display: flex;
		margin: 60px;
		font-weight: bold;
		cursor: pointer;
		transition: 0.5s ease-in-out;
	}
	input {
		width: 60%;
		height: 60px;
		background: #e0dede;
		justify-content: center;
		display: flex;
		margin: 20px auto;
		padding: 10px;
		border: none;
		outline: none;
		border-radius: 5px;
	}
	button {
		width: 60%;
		height: 60px;
		margin: 10px auto;
		justify-content: center;
		display: block;
		color: #fff;
		background: #573b8a;
		font-size: 1em;
		font-weight: bold;
		margin-top: 20px;
		outline: none;
		border: none;
		border-radius: 5px;
		transition: 0.2s ease-in;
		cursor: pointer;
	}
	button:hover {
		background: #6d44b8;
	}
	.labelNormal {
		color: blue;
		font-size: 1.3em;
		justify-content: center;
		display: flex;
		margin: 20px;
		font-weight: bold;
		cursor: pointer;
		transition: 0.5s ease-in-out;
	}
	.login {
		margin-top: 8cm;
		height: 460px;
		background: #eee;
		border-radius: 60% / 10%;
		transform: translateY(-180px);
		transition: 0.8s ease-in-out;
	}
	.login label {
		color: #573b8a;
		transform: scale(0.6);
	}
	.error {
		color: red;
		font-size: 1.3em;
		justify-content: center;
		display: flex;
		margin: 10px;
		font-weight: bold;
		cursor: pointer;
		transition: 0.5s ease-in-out;
	}
</style>
