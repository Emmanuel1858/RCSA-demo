<template>

    <div class="container">
            <div>
            <img class="form-image" src="../pictures/backgroundphoto.png">
        </div>
        <!-- <img src="../pictures/Group 6987.png"> -->
        
        <div class="form-container">
            <div class="form-info">
                <div class="para">
                    <p>Please sign in with your credentials</p>
                </div>    
                <form> 
                
                    <pre>{{ displayRoleItem }}</pre>
                    <div class="input-fields">
                        <label class="label-role" >Role {{ displayRoleItem }}</label>
                        <img class="logo" src="../pictures/capture.png">
                    <input type="text" class="Role" @click="clickHandler" placeholder="Select a Profile" v-model="form.role" >
                    <ul class="displayRole" :class="displayRoleItem ? 'role-items' : 'role-items role-list-hide'">
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <!-- <li @click="changeRole(profile.description)" v-for="profile in profileFromBackend" v-bind:key="profile.id" > {{ profile.description  }} <img class="img" :src="profileImage(profile.description)"> </li> -->
                    </ul> 
    
                    <!-- <div>
                        <label>Dropdown</label>
                        <input value="Role" >
                        <img>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java</li>
                            <li>PHP</li>
                            <li>C</li>
                        </ul>
                    </div> -->
    
                    <div class="username">
                    <label class="label">Username</label>
                    <input id="input"  class="input" type="text" ref="name" placeholder="Input Username" v-model="form.username">
                    </div>
    
                    <div class="password">
                        <label class="label">Password</label>
                        <input id="inputs" class="input input-pass" type="password" ref="pass" placeholder="Input Password" v-model="form.password">
                    </div>
    
                    <div class="forgot">
                        <a href="#" class="forgots"> Forgot Login Credentials?</a>
                    </div>                 
                   
    
                    <div id="btn">
                    
                        <button
                        href="here"
                        class="login-btn" 
                        :disabled="isDisabled"
                        @click="handleLogin" >
                        <span v-if="loading" class='loader'></span>
                        <span v-else >Login</span>
                    </button>   
                    </div>
                    
                </div>
                    
                </form>
            </div>
        </div>
        </div>
        
    </template>
    
    <script>
    import { RouterLink } from 'vue-router';
    
        export default {
            name: 'LoginPage',
            RouterLink,
            data () {
                return {
                    profileFromBackend : [],
                    loading: false,
                    form: {
                        username: "",
                        password: "",
                        role: "",
                        website: "https://www.youtube.com/watch?v=PJxgEaXByx0"
                        
                        
                        
                       
                    },
                    displayRoleItem: false,
                   
                }
            }, 
    
            methods: {
    
                
                clickHandler() { this.displayRoleItem = !this.displayRoleItem; }, 
    
                changeRole(role_value) {
                    this.form.role = role_value
                    this.displayRoleItem = false;      
                },

                
               async handleLogin (e) {
                e.preventDefault()
                this.loading = !false
                const {role, username, password} = this.form;
                const login = { role: role, username: username, password: password};
                const apiUrl = new URL('https://10.22.22.32/RCSAApi/api/User/Login');
                apiUrl.searchParams.append('Profile', role )
                apiUrl.searchParams.append('UserName', username )
                apiUrl.searchParams.append('Password', password  )
                const res = await fetch(apiUrl, {method: "post", body: JSON.stringify({})})
                let result = await res.json()
                console.log(result.data.fullname)
                localStorage.setItem("profile", result.data.fullname)
                setTimeout(()=> {
                    this.$router.push('/about')
                }, 2000)
                console.log(login)
       
                },

                profileImage(description) {
                    console.log(">>", description)
                    switch (description) {
                        case 'Risk Officer':
                            return '/pictures/ormo.png';
                        case 'Risk Approver':
                            return '/img/orma/png';
                        case 'Internal Control':
                            return '/img/ico/png';
                        case 'Staff-AssessmentForm':
                            return '/img/group/png';
                        case 'Staff-CAPForm':
                            return '/img/group/png';
                        case 'HeadOfTheUnit':
                            return '/img/rsfyu/png'
                    }
                }
                
            }, 
    
            computed: {
             isDisabled() {
                if((this.form.role=== '') || (this.form.username=== '') || ( this.form.password.length < 5)){
                    return true
                }else {
                    
                return false
                }
            }
            }, 
           async mounted() {
                const response = await fetch ('https://10.22.22.32/RCSAApi/api/User/Profiles')
                const { data: profileFromBackend } = await response.json()
                this.profileFromBackend = profileFromBackend
                
            } 

        
        }
    
    
    </script>
    
    <style scoped>
    
    /* @font-face { 
         src: url(../assets/campton/);
         font-family: "campton-medium"; 
         font-weight: 500; } */
    
    
        * {
            margin: 0;
            padding: 0;
            outline: none;
            overflow: hidden;
        }

      
    
        
        .container {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
    
        }
    
        .form-image {
            width: 40rem;
            height: 40rem;
            overflow: hidden;
        }
    
        .form-container{
            background-color: #075DB2;
            width: 40rem;
            height: 39.8rem;
        }
    
        .form-info {
            background-color: #fff;
            height: 450px;
            width: 400px;
            position: relative;
            top: 80px;
            left: 110px;
            overflow: hidden;
            border-radius: 5px;
    
        }
    
        .role-list-hide {
            display: none
        }
    
        .Role {
            width: 15rem;
            margin-left: 0.3rem;
            height: 1.3rem;
            padding: 12px 20px;
            margin-bottom: 10px;
            font-size: 9px;
            color: #003366;
            cursor: pointer;
    
            
        }
    

        .Role::placeholder {
          position: relative;
          top: 5px;
        }

        .Role:focus{
            padding: 12px 20px;
            border-left: 3px solid #003366;
            border-top: 1px solid black;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
    
        .logo{
            position: relative;
            top: 5px;
            left: 16.5rem;
            cursor: pointer;
        }
    
        .logo-role{
            height: 20px;
            width: 20px;
            position: relative;
            left: 7rem;
        }
    
        .logo-role-second{
            height: 20px;
            width: 20px;
            position: relative;
            left: 10.6rem;
        }
    
        .logo-role-third{
            height: 20px;
            width: 20px;
            position: relative;
            left: 4.2rem;
        }
    
        .logo-role-fourth{
            height: 20px;
            width: 20px;
            position: relative;
            left: 4.5rem;
        }
    
        .logo-role-fifth{
            height: 20px;
            width: 20px;
            position: relative;
            left: 4rem;
        }
    
        .logo-role-sixth{
            height: 20px;
            width: 20px;
            position: relative;
            left: 8.2rem;
        }
    
    
    
        .role-items li{
            font-size: 9px;
            border: 1px solid #ADADAD;
            width: 252px;
            margin-left: 3.8rem;
            padding: 15px 15px;
            position: relative;
            text-align: left;
            
            cursor: pointer;
    
        }
    
   
        
        .para{
            
            font-size: 9px;
            color: #101010;
            font-weight: bold;
            background-color: #F5F5F5;
            height: 2rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
        }
    
        
        .input-fields {
            margin-top: 20px;
        }
        .label {
            position: relative;
            left: -5.7rem;
            top: 20px;
            font-size: 9px;
            font-weight: bold;
            color: #003366;
        }
    
        .label-role {
            font-size: 9px;
            position: relative;
            left: 5.5rem;
            top: -14px;
            color: #003366;
            font-weight: bold;
            
        }
    
    
            .input {
            height: 2rem;
            width: 16.2rem;
            display: flex;
            margin-bottom: 10px;
            margin-left: 65px;   
            padding-left: 20px;
            padding-top: 10px;
            font-size: 9px;
        }
    
        .input:focus{
            border-left: 3px solid #003366;
            border-top: 1px solid black;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
    
    
        ul{
            position: absolute;
            z-index: 999;
            top: 100px;
            left: 3px;
            background-color: #fff;
            width: 31rem;
        }
    
        ::placeholder {
            font-size: 9px;
            color: #B2B2B2;
            /* padding-left: .5rem; */
        }
    
    
        .select {
            font-size: 10px;
            height: 2.5rem;
            width: 17rem;
            margin-top: 15px;
            margin-left: -1rem;
            margin-bottom: 10px;
        }
    
        select{
            padding-top: 12px;
            padding-left: 10px;
            border-left: 3px solid #003366;
                    
        }
    
    
        .forgots {
            text-decoration: none;
             border-bottom: 1px dashed #003366;
             font-size: 9px;
             margin-left: 12rem;
             
        }

        .loader {
            pointer-events: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top-color:  #fff;
            animation: load 700ms ease infinite;
           
        }

        @keyframes load {
            0% {
                transform: rotate(0turn);
            }

            100% {
                transform: rotate(1turn);
            }
        }
    
        #btn {
            margin-top: 7rem;
            text-align: center;
        }
        .login-btn {
            background-color: #a73636;
            width: 16rem;
            height: 2.5rem;
            border: none;
            color: #fff;
            margin: 0 auto;
            text-align: center;
            display: grid;
            place-content: center;
            cursor: pointer;
        }
        button:disabled {
            background: #fffafa;
            cursor: not-allowed;
        }
    
    
    
    
    
    
    
    </style>