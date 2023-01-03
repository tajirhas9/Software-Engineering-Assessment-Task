<template>
	<div>
		<form action="#" @submit.prevent="OnLogin">
			<h1>Login</h1>

			<input type="email" name="" placeholder="Email" v-model="userData.identity" />
			<input type="password" name="" placeholder="Password" v-model="userData.password" required />
			<button type="submit">Log In</button>

			<p>Or</p>

			<div class="login">
				<router-link to="/Signup">Create Account</router-link>
			</div>
		</form>
	</div>
</template>

<script lang="ts" >
import axios from 'axios'
import router from 'vue-router'
import { setCookie } from 'tiny-cookie';



 
export default {
    name: 'SoftwareEngineeringAssessmentTaskLoginPage',

    data() {
        return {
            userData: {
                identity:'',
                password:''
            },
            //token: token
        };
    },

    mounted() {
        
    },

    methods: {
        OnLogin() {
            
            console.log(this.userData);
            let valmail = /\S+@\S+\.\S+/;

             
            if (!this.userData.identity || !this.userData.identity.match(valmail)) {// check email is correct or not
                
                alert("Email is not valid");
                return;
            }

            if (this.userData.password.length<8) {
                alert('Password must be at least 8 character long'); // check password is greater the=an 8 character
                return;
            }
        
            else {
                axios.post('http://23.94.211.99:8090/api/collections/candidates/auth-with-password',this.userData) //Login API call from here
                    .then((response)=>{
                        console.log(response)
                        let  token = response.data.token
                        setCookie('token', token)
                        
                        this.$toast.show(`Successfully Login!!!`);

                        this.$router.push("/home")
                        
                    })
                    .catch(error=> alert('Invalid Email or Password'))
                //todo api call
                return;
            }
        }
    },

}
</script>

<style scoped>
body {
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100vh;
}

form {
	margin-top: 120px;
	text-align: center;
	background: transparent;
	width: 300px;
	height: 350px;
	border: 1px solid;
	border-radius: 10px;
	outline: none;
}

input {
	margin-top: 20px;
	width: 210px;
	border-radius: 20px;
	outline: none;
	padding: 10px;
	background: transparent;
	border: 1px solid;
}

button {
	margin-top: 20px;
	width: 150px;
	border-radius: 30px;
	outline: none;
	padding: 10px;
	background: linear-gradient(#4c77d3, #5c7fc9);
	border: none;
	color: white;
	cursor: pointer;
}
</style>'