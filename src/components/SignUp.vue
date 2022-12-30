<template>
    <div>

        <form action="">
        <h1>Sign Up</h1>
        <input type="text" name="" placeholder="First Name">
        <input type="text" name="" placeholder="Last Name">
        <input type="email" name="" placeholder="Email">
        <input type="password" name=""  placeholder="Password">
        <input type="password" name="" placeholder="Confirm password">
        <button type="submit">Sign Up</button>

    </form>
    </div>

</template>

<script>
export default {
    name: 'SoftwareEngineeringAssessmentTaskSignUp',

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

 <style  scoped>

 body{
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 100vh;
        }

        form{
            margin-top:none;
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