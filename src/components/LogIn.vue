<template>
    <div class="LoginUser" @submit.prevent="LoginUser()">
      <form action="">
        <h1>Login Page</h1>
        <input type="email"  name=""  v-model="UserInfo.identity" placeholder="Enter Email" />
        <input type="password" name="" v-model="UserInfo.password" required placeholder="Enter Password" />
        
        <button id="loginbtn">Login</button>
      </form>       
    </div>
  </template>
  
  <script lang="ts">
  import axios from 'axios'
  export default {
  
    name: 'LoginUser' ,
    data() {
      return {
        UserInfo: {
          identity:null,
          password:'',
        },
      }
    },
  
    methods: {
      LoginUser(){
        console.log(this.UserInfo)

        if(!this.UserInfo.identity){
          alert("Email Can't be Empty")
          return;
        }
        if(this.UserInfo.password.length<8){
        alert("Minimum 8 Character Needs to be Set")
        return;
      }

      else{
        axios.post('http://23.94.211.99:8090/api/collections/candidates/auth-with-password',this.UserInfo)
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
    .LoginUser {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: auto;
    }
  
    form {
      margin-top: none;
      background: transparent;
      text-align: center;
      width: 250px;
      height:300px;
      border: 2px solid;
    }
  
    input {
      margin-top: 15px;
      padding: 10px;
      width: 180px;
      background: transparent;
    }
    
    #loginbtn {
      text-align: center;
      margin: 15px;
      padding: 10px 0px;
      width: 10rem;
      border-radius: 20px;
      background-color: var(--vt-c-primary);
      cursor: pointer;
    }

  </style>
  