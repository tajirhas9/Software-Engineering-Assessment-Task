<template>
	<body>
		<div class="main">
			<div class="signup">
				<form>
					<label class="labelHead">Sign up</label>
					<div class="error">{{ error }}</div>
					<input type="text" v-model="username" name="username" placeholder="User name" required="" />
					<input type="email" v-model="email" name="email" placeholder="Email" required="" />
					<label class="labelNormal">Email Visibility</label>
					<select name="emailVisibility" id="emailVisibility">
						<option value="true" selected>Visible</option>
						<option value="false">Hidden</option>
					</select>
					<input type="password" v-model="password" name="password" placeholder="Password" required="" />
					<input
						type="password"
						v-model="passwordConfirm"
						name="passwordConfirm"
						placeholder="Confirm Password"
						required=""
					/>
					<input type="text" v-model="name" name="name" placeholder="Your Full Name" required="" />
					<button v-on:click.stop.prevent="signUp">Sign up</button>
					<u><a class="labelNormal" href="#/login">Already have an account? Login</a></u>
				</form>
			</div>
		</div>
	</body>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'SignUp',
		data() {
			localStorage.clear()
			return {
				error: '',
				username: '',
				email: '',
				emailVisibility: '',
				password: '',
				passwordConfirm: '',
				name: '',
			}
		},
		methods: {
			async signUp() {
				let flag = true
				let errorFlag = true
				if (this.emailVisibility == 'false') {
					flag = false
				}
				if (
					this.username == '' ||
					this.email == '' ||
					this.password == '' ||
					this.passwordConfirm == '' ||
					this.name == ''
				) {
					this.error = 'Please Fill All Field'
					this.$router.push({ name: 'signup' })
					errorFlag = false
				}
				if (this.password != this.passwordConfirm) {
					this.error = 'Password & Confirm Password Mismatches'
					this.$router.push({ name: 'signup' })
					errorFlag = false
				}
				if (
					!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
						this.email
					)
				) {
					this.error = 'Enter a valid Email'
					this.$router.push({ name: 'signup' })
					errorFlag = false
				}
				if (errorFlag) {
					let result = await axios.post('http://localhost:3000/candidates/records', {
						username: this.username,
						email: this.email,
						emailVisibility: flag,
						password: this.password,
						passwordConfirm: this.passwordConfirm,
						name: this.name,
					})

					if (result.status == 201) {
						let loginResult = await axios.post('http://localhost:3000/candidates/auth-with-password', {
							identify: this.email,
							password: this.password,
						})
						localStorage.setItem('user-info', JSON.stringify(result.data))
						this.$router.push({ name: 'home' })
					}
				}
			},
			Redirect() {
				this.$router.push({ name: 'login' })
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
		height: 800px;
		background: red;
		overflow: hidden;
		background: #302b63;
		border-radius: 10px;
		box-shadow: 5px 20px 50px #000;
	}
	.signup {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.labelHead {
		color: #fff;
		font-size: 3em;
		justify-content: center;
		display: flex;
		margin: 60px;
		font-weight: bold;
		cursor: pointer;
		transition: 0.5s ease-in-out;
	}
	.labelNormal {
		color: #fff;
		font-size: 1.3em;
		justify-content: center;
		display: flex;
		margin: 20px;
		font-weight: bold;
		cursor: pointer;
		transition: 0.5s ease-in-out;
	}
	input {
		width: 60%;
		height: 40px;
		background: #e0dede;
		justify-content: center;
		display: flex;
		margin: 20px auto;
		padding: 10px;
		border: none;
		outline: none;
		border-radius: 5px;
	}
	select {
		width: 60%;
		height: 40px;
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
	.login {
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
