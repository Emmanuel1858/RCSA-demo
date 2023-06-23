<template>

  <div>
    <router-view/>  
  <!-- <Login/> -->
  <LoginPage/>
  <AboutView/>
  <NextPage/>
  <SummaryPage/>
  <RecruitmentTrain/>
  <ToastedMessage/>
  </div>

  
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import AboutView from './views/AboutView.vue';
import NextPage from './views/NextPage.vue';
import SummaryPage from './views/SummaryPage.vue';
import RecruitmentTrain from './views/RecruitmentTrain.vue';
import ToastedMessage from './components/ToastedMessage.vue';
export default{
  name: "App",
  components: {
    LoginPage,
    AboutView,
    NextPage,
    SummaryPage,
    RecruitmentTrain,
    ToastedMessage
    
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}

nav {
  padding: 30px;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
