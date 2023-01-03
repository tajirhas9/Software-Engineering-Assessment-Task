<template>
    <div>

        <form action="" @submit.prevent="OnSignup">
        <h1>Sign Up</h1>
        <input type="text" name="" placeholder="Userame" v-model="Userdata.username" required>
        <input type="text" name="" placeholder="Fast Name" v-model="Userdata.name" required>
        <input type="email" name="" placeholder="Email" v-model="Userdata.email" required>
        <input type="password" name=""  placeholder="Password" v-model="Userdata.password" required>
        <input type="password" name="" placeholder="Confirm password" v-model="Userdata.passwordConfirm" required>
        <button type="submit">Sign Up</button>

        </form>
        
    </div>
</template>

<script lang="ts">

import axios from 'axios';
import router from 'vue-router'
export default {
    name: 'SoftwareEngineeringAssessmentTaskSignUp',

    data() {
        return {
            Userdata: {
            username:'',
            email:'',
            emailVisibility: true,
            password:'',
            passwordConfirm:'',
            name:''
            },

        };
    },

    mounted() {
        
    },

    methods: {
        OnSignup() {
            console.log(this.Userdata);

            var mailformat = /\S+@\S+\.\S+/;

            if (!this.Userdata.name) {  //check name
                alert("Name Can't be empty");
                return;
            }
             if (!this.Userdata.username) {  //check user name 
                alert("User Name Can't be empty");
                return;
            }
            if (!this.Userdata.email || !this.Userdata.email.match(mailformat)) {  // check email is correct r not 
                
                alert("Email is not valid");
                return;
            }
            if (this.Userdata.password !== this.Userdata.passwordConfirm) { //check both pass and confirm pass are match or not 
                alert('Password is not Correct')
                return;
            }
            else {
                  axios.post('http://23.94.211.99:8090/api/collections/candidates/records',this.Userdata) //Sign up api call from here
                      .then((response) => {
                        this.$toast.show(` Account Create Successfully Login Please.`)
                        this.$router.push('/')
                    })
                      .catch(error => {
                          alert("The email is invalid or already in use.")
                      })
                //todo api call
                return;
            }
        }
    },
};


</script>


 <style  scoped>

 body{
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 100vh;
        }

        form{
            margin-top: 50px;
            text-align: center;
        }

        input{
            display: block;
            width: 350px;
            height: 40px;
            margin: 20px;
            outline: none;
            border: none;
            border-bottom: 1px solid grey;
        }

        button{
            margin-top: 20px;
            width: 350px;
            height: 40px;
            background-color: rgb(43, 209, 43);
            border: none;
            color: white;
            border-radius: 30px;
            cursor: pointer;
            
        }

</style>'