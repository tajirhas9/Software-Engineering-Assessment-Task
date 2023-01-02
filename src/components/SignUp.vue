<template>
  <div class="RegisterUser">
    <form action="" @submit.prevent="RegisterUser()">
      <h1>SignUp Page</h1>
      <input type="text"  name="" v-model="UserInfo.username" placeholder="Enter Username" />
      <input type="email"  name="" v-model="UserInfo.email" placeholder="Enter Email" />
      <input type="password" name="" v-model="UserInfo.password" placeholder="Enter Password" />
      <input type="password" name="" v-model="UserInfo.passwordConfirm" placeholder="Enter Confirm Password" />
      <button id="registerbtn">SignUp</button>
    </form>       
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {

  name: 'RegisterUser' ,
  data() {
    return {
      UserInfo: {
        username:null,
        email: null,
        emailVisibility: true,
        password:'',
        passwordConfirm:'',
        name: "saiful"
      },
    }
  },

  methods: {
    RegisterUser(){
      console.log(this.UserInfo)
    
      if(!this.UserInfo.email){
        alert("Email can't be empty")
        return;
      }

      if(this.UserInfo.password!=this.UserInfo.passwordConfirm && this.UserInfo.password.length<8){
        alert("Password doesn't match or Password length must be greater or equal to eight characters")
        return;        
      }

      else{
        axios.post('http://23.94.211.99:8090/api/collections/candidates/records',this.UserInfo)
        .then((response)=> console.log(response)
      )
      .catch((error)=> console.log(error)
      )
      }
    }
  }
}
</script>

<style scoped>
  .RegisterUser {
    display: flex;
    align-items: center;
    flex-direction: column;
    height:auto;
    
  }

  form {
    margin-top: none;
    background: transparent;
    text-align: center;
    width: 300px;
    height:350px;
    border: 2px solid;
  }

  input {
    margin-top: 15px;
    padding: 10px;
    width: 180px;
    background: transparent;
  }

  #registerbtn {
    margin: 10px;
    text-align: center;
		padding: 10px 0px;
		width: 10rem;
		border-radius: 20px;
		background-color: var(--vt-c-primary);
		cursor: pointer;
}
</style>
