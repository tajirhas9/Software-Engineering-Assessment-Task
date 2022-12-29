<template>

    <div>

       <form action="">
            <h1>Login</h1>
            
            <input type="email" name="" placeholder="Email">
            <input type="password" name="" placeholder="Password">
            <button type="submit">Log In</button>
        
            <p>Or</p>
        
            <div class="login">
            <p><a href="">Creat Account</a></p>
            </div>
        
        
        </form>

    </div>

</template>



<script lang="ts">
export default {
    name: 'SoftwareEngineeringAssessmentTaskLoginPage',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>



<style lang="scss" scoped>

        body{
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
            border:none;
            color: white;
            cursor: pointer;
        }


</style>'