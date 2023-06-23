<template>
    <div>
        <div class="user-inform">
        <div class="user-inform-head">
            <div>
                <p class="user-inform-active">Activity</p>
                <p class="user-inform-para">{{ activity }}</p>
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
                    <p  class="user-unit">Process</p>
                    <p class="user-answer">{{ process }}</p>
                    </div>


                </div>  
                <div class="user-inform2">
                   <div>
                    <p class="user-unit">Sub Process</p>
                    <p class="user-answer">{{ subProcess }} </p>
                   </div> 

                </div> 
                <div class="user-inform3">
                    <div>
                    <p class="user-unit">Responsibility</p>
                    <p class="user-answer">{{ res }}</p>
                    </div>

                </div> 
                </div>
                <div class="user-border" ></div>
            </div>
           <div class="user-RT">
            <div class="potential-div">
                <p class="potential">Potential Risk</p>
                <p class="PotentialText">{{ potentialRisk }}</p>
            </div>
            <div class="user-border1"></div>
            <div class="riskTrain-third">
                <div class="riskTraining">
                    <p class="riskTrain-quest1 riskTrain-quest">Likelihood of Occurence</p>
                    <p class="riskTrain-answer">{{ occurs }}</p>
                </div>
                <div class="riskTraining2">
                    <p class="riskTrain-quest2 riskTrain-quest">Risk Impact</p>
                    <p class="riskTrain-answer riskTrain-answer2">{{ riskImpact }}</p>
                </div>
                <div class="riskTraining3">
                    <p class="riskTrain-quest3 riskTrain-quest">Causal Factor</p>
                    <p class="riskTrain-answer riskTrain-answer3">{{ causalFactor }}</p>
                </div>
            </div>
            <div class="user-border" ></div>
            <div class="potential-div">
                <p class="potential">Details of Causal Factor</p>
                <p class="PotentialText">{{ detailsCausalFactor }}</p>
            </div>
            <div class="user-border" ></div>
            <div class="potential-div">
                <p class="potential">Key Control</p>
                <p class="PotentialText">{{ keyControl }}</p>
            </div>
           </div>
            <div class="user-border" ></div>
                <div class="user-inform-details2">
                <div class="user-inform4">
                    <div>
                    <p  class="user-unit">is the Control in use?</p>
                    <p class="user-answer">{{ controlUseValue }}</p>
                    </div>


                </div>  
                <div class="user-inform5">
                   <div>
                    <p class="user-unit">Effectiveness of Control</p>
                    <p class="user-answer"> {{ effectControl }}</p>
                   </div> 

                </div> 
                <div class="user-inform6">
                    <div>
                    <p class="user-unit">Inherent  Risk</p>
                    <p class="user-answer"> {{ inherentRisk }}</p>
                    </div>
                </div> 
                </div>
                <div class="user-border" ></div>
                <div class="user-inform-details">
                <div class="user-inform-residualR">
                    <div>
                    <p  class="user-unit">Residual Risk</p>
                    <p class="user-answer">{{ residualRisk }}</p>
                    </div>


                </div>  
                <div class="user-inform-testF">
                   <div>
                    <p class="user-unit">Test Frequency</p>
                    <p class="user-answer">{{ testFrequency }}</p>
                   </div> 

                </div> 
                <div class="user-inform-testM">
                    <div>
                    <p class="user-unit">Test Methodology</p>
                    <p class="user-answer">{{ testMethodology }}</p>
                    </div>
                </div> 
                </div>
                            <div class="user-border" ></div>
            <div class="potential-div">
                <p class="potential">Test Steps</p>
                <p class="PotentialText">{{ testStep }}</p>
            </div>
    </div>
    </div>
</template>

<script> 
    export default {
        data() {
            return {
            activity: localStorage.getItem("activity"),
            process: localStorage.getItem("process"),
            subProcess: localStorage.getItem("subProcess"),
            res: localStorage.getItem("res"),
            potentialRisk: localStorage.getItem("potentialRisk"),
            occurs: localStorage.getItem("occurs"),
            riskImpact: localStorage.getItem("riskImpact"),
            riskLevel: localStorage.getItem("riskLevel"),
            causalFactor: localStorage.getItem("casualFactor"),
            detailsCausalFactor: localStorage.getItem("detailsCausalFactor"),
            keyControl: localStorage.getItem("keyControl"),
            controlUseValue: localStorage.getItem("controlUseValue"),
            effectControl: localStorage.getItem("effectControl"),
            inherentRisk: localStorage.getItem("inherentRisk"),
            residualRisk: localStorage.getItem("residualRisk"),
            testFrequency: localStorage.getItem("testFrequency"),
            testMethodology: localStorage.getItem("testMethodology"),
            testStep: localStorage.getItem("testStep")
            }
        }
    }

</script>


<style scoped>

.user-inform  {
    border: 1px solid #E2ECF5;
    width: 62rem;
    height: 40rem;
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

.user-inform-details2 {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    font-size: 10px;
    
    width: 45rem;
}

.user-inform1 {
    margin-left: -4rem;
    display: flex;
    flex-direction: column;

    
}

.user-inform2 {
    margin-right: 6rem;
    display: flex;
    flex-direction: column;
    
}

.user-inform3 {
    margin-right: 12rem;
    display: flex;
    flex-direction: column;
}

.user-inform4 {
    margin-left: -2.5rem;
    display: flex;
    flex-direction: column;
}

.user-inform5 {
    margin-right: 8rem;
    display: flex;
    flex-direction: column;
}

.user-inform6 {
    margin-right: -4rem;
    display: flex;
    flex-direction: column;
}

.user-inform-residualR {
    margin-left: -3.5rem;
    display: flex;
    flex-direction: column;
}

.user-inform-testF {
    margin-right: 6rem;
    display: flex;
    flex-direction: column;
}

.user-inform-testM{
    margin-right: 12rem;
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
    margin: 1rem auto;
}


.user-unit1  {
    text-align: left;
    margin-top: 10px;
    color: #ADADAD;

}

.user-inform-active {
    text-align: left;
    font-size: 10px;
    margin-left: 20px;
    color: #ADADAD;
}

.user-answer {
    text-align: left;
    font-weight: bolder;
}

.potential-div {
    margin-left: 2.2rem;
    width: 45rem;
}

.potential {
    text-align: left;
    font-size: 10px;
    color: #ADADAD;
}

.PotentialText {
    font-size: 9px;
    text-align: left;
    font-weight: bold;
}

.user-border1 {
    border-bottom: 1px solid #E2ECF5;
    width: 60rem;
    margin: 2rem auto;
}
    
.riskTrain-third {
    display: flex;
    justify-content: space-between;
    margin-left: -4rem;
    width: 45rem;
}

.riskTrain-quest1 {
    margin-left: 6rem;
}
 .riskTraining2{
    margin-right: 10rem;
 }

 .riskTraining3{
    margin-right: -3rem;
 }

.riskTrain-quest {
    font-size: 10px;
    color: #ADADAD;
}

.riskTrain-answer {
    font-size: 10px;
    font-weight: bold;
}

.riskTrain-answer2 {
    text-align: left;
}

</style>