<template>
    <div>
        <div class="nav-container">
        <div class="nav-left">
        <img class="nav-left_logo" src="../pictures/globus-logo.png">
      <h3 class="nav-left_text">RCSA (Risk Control Self Assessment)</h3>
      </div>

      <div class="nav-right">
        <img class="user" src="../pictures/user.png" alt="">
        <p class="user-name">Dasola Awoye</p>
        <div class="boder-one"></div>
        <div class="border-two"></div>
        
        <img @click="$router.push('/')" class="log-out" src="../pictures/logout.png" alt="">

      </div>

      </div>
    
    
    <div class="progress">
      <div class="progress-first-stage">
        <div class="first-stage">
          <div class="progress-bar_first"></div>
        </div>
        
        <p class="progress-bar_active">Unit Information</p>
      </div>
      <div class="progress-first-stage progress-second-stage">
        <div class="second-stage">
          <div class="progress-bar_second"></div>
          
        </div>
        
        <p class="progress-bar_inactive">Activity & Process breakdown</p>
      </div>
      <div class="progress-first-stage">
        <div class="third-stage">
            <img class="check-first-stage" src="../pictures/check.png">
        </div>
        <span class="progress-bar_third"></span>
        <p class="progress-bar_inactive progress-bar-inactive_sub">Summary</p>
      </div>
    </div>

    <div class="user-inform">
        <div class="user-inform-head">
            <div>
                <p class="user-inform-para">User Information</p>
            </div>
            <div>
                <i></i>
                <p class="user-inform-edit" >Edit</p>
            </div>            

        </div>
            <div class="inform-container">
                <div class="user-inform-details">
                <div class="user-inform1">
                    <div>
                    <p  class="user-unit">Unit/Business Segment</p>
                    <p class="user-answer">{{ user }}</p>
                    </div>

                    <div>
                    <p class="user-unit1">Responsible</p>
                    <p class="user-answer">{{ res }}</p>
                    </div>
                    
                </div>  
                <div class="user-inform2">
                   <div>
                    <p class="user-unit">Branch</p>
                    <p class="user-answer">{{ branch }} Branch </p>
                   </div> 

                   <div>
                    <p class="user-unit1">Reviewer(This fields represent your Supervisor)</p>
                    <p class="user-answer">{{ reviewer }}</p>
                   </div>

                </div> 
                <div class="user-inform3">
                    <div>
                    <p class="user-unit">Sub unit</p>
                    <p class="user-answer">{{ subUnit }}</p>
                    </div>
                    <div>
                    <p class="user-unit1">Reviewer Supervisor's</p>
                    <p class="">{{ reviewerSup }}</p>
                    </div>

                </div> 
                </div>
                <div class="user-border" ></div>
                
            </div>
    </div>
    <RecruitmentTrain/>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
// import AboutView from './AboutView.vue';
import RecruitmentTrain from './RecruitmentTrain.vue'

export default {
    RouterLink,
    props: ['ninja'],
    components: {

    RecruitmentTrain
    

},
    data() {
        return {
            user: localStorage.getItem("unit"),
            branch:localStorage.getItem("branch"), 
            subUnit: localStorage.getItem("subUnit"),
            res: localStorage.getItem("res"),
            reviewer: localStorage.getItem("reviewer"),
            reviewerSup: localStorage.getItem("reviewerSup")
        }
    },

    methods: {  }
}

</script>

<style scoped>
  .nav-container {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    height: 2rem;
  }

  .nav-left {
    display: flex;
    width: 35rem;
  }

  .nav-left_logo {
    margin-top: 3px;
    height: 30px;
    width: 30px;

  }

  .role-unit-hide {
    display: none;
  }

  .branch-list-hide{
    display: none;
  }



  .nav-left_text {
    margin-left: 5px;
    margin-top: 8px;
  }

  .user-name {
    margin-top: 8px;
    margin-left: 4px;
    font-size: 12px;
  }

  .log-out{
    width: 25px;
    height: 25px;
    margin-top: 3px;
    margin-left: 1.5rem;
    cursor: pointer;

  }

  .nav-right {
    display:flex;
  
  }

  .boder-one{
    border-left: 2px solid #ECECEC;
    margin-left: 1rem;
    margin-top: 4px;
    height: 25px;
  }

  .border-two {
    border-left: 2px solid #ECECEC;
    margin-left: 5px;
    margin-top: 4px;
    height: 25px;
  }


  .user{
    height: 30px;
    width: 30px;
  }

  .progress {
    background-color: #E2ECF5;
    height: 7rem;
    display: flex;
    justify-content: space-around;
  }

  .progress-first-stage {
    margin-top: 2rem;
  }

  .progress-bar_active{
    font-size: 10px;
    font-weight: bolder;
    color: #003366;
  }

  .progress-bar_inactive{
    font-size: 10px;
    font-weight: bolder;
    color: #003366;
  }

  .progress-bar-inactive_sub {
    margin-left: 25px;
  }

  .check-first-stage {
    margin-bottom: 2px;
    margin-left: 0;
    height: 9px;
    width: 9px;
  }

  .first-stage{
    background-color: red;
    border: 2px solid red;
    color: #fff;
    height: 15px;
    width: 15px;
    margin-bottom: 5px;
    margin-left: 30px;
    border-radius: 50%;
  }

 

  .second-stage {
    background-color: red;
    border: 2px solid red;
    color: #fff;
    height: 15px; 
    width: 15px;
    margin-bottom: 10px;
    margin-left: 60px;
    border-radius: 50%;
  }

  .third-stage {
    background-color: #fff;
    border: 2px solid red;
    color: #fff;
    height: 15px;
    width: 15px;
    margin-bottom: 15px;
    margin-left: 40px;
    border-radius: 50%;
  }

  .progress-bar_first{
    position: relative;
    top: 6px;
    left:  17px;
    width: 28rem;
    border-top: 3px solid red;
  }

  .progress-bar_second {
    position: relative;
    top: 6px;
    left:  17px;
    width: 28.3rem;
    border-top: 3px solid red;
}

.user-inform  {
    border: 1px solid #E2ECF5;
    width: 62rem;
    height: 12rem;
    margin: 40px auto;
    border-radius: 4px;
}

.user-inform-head{
    background-color: #E2ECF5;
    width: 61rem;
    margin: 1px auto;
    position: relative;
    top: 6px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
}

.user-inform-para {
    font-size: 12px;
    margin-left: 20px;
    font-weight: bold;
}

.user-inform-edit {
    font-size: 12px;
    margin-right: 20px; 
    color: red;
}

.user-inform-details {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    font-size: 10px;
    
}

.user-inform1 {
    margin-right: 5rem;
    display: flex;
    flex-direction: column;

    
}

.user-inform2 {
    margin-right: 5rem;
    display: flex;
    flex-direction: column;
    
}

.user-inform3 {
    margin-right: 15rem;
    display: flex;
    flex-direction: column;
}

.user-unit {
    text-align: left;
    margin-top: 30px;
    color: #ADADAD;
}

.user-inform-details1 {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    width: 60rem;
    margin: 0 auto;
    font-size: 10px;
    text-align: left;
}


.user-border {
    border-bottom: 1px solid #E2ECF5;
    width: 60rem;
    margin: -3.2rem auto;
}

.user-inform4  {
    margin-right: 3rem;
    display: flex; 
    flex-direction: column;
    
}

.user-inform5  {
    margin-right: 0.5rem;
    display: flex;
    flex-direction: column;
    
}

.user-inform6  {
    margin-right: 10rem;
    display: flex;
    flex-direction: column;
    
}

.user-unit1  {
    text-align: left;
    margin-top: 10px;
    color: #ADADAD;

}

.user-answer {
    text-align: left;
}
    

</style>