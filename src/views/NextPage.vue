<template>
  <div class="container">
    <nav>
      <div class="nav-container">
        <div class="nav-left">
          <img class="nav-left_logo" src="../pictures/globus-logo.png" />
          <h3 class="nav-left_text">RCSA (Risk Control Self Assessment)</h3>
        </div>

        <div class="nav-right">
          <img class="user" src="../pictures/user.png" alt="" />
          <p class="user-name">Dasola Awoye</p>
          <div class="boder-one"></div>
          <div class="border-two"></div>

          <img
            @click="$router.push('/')"
            class="log-out"
            src="../pictures/logout.png"
            alt=""
          />
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
            <img class="check-second-stage" src="../pictures/check.png" />
            <div class="progress-bar_second"></div>
          </div>

          <p class="progress-bar_active">Activity & Process breakdown</p>
        </div>
        <div class="progress-first-stage">
          <div class="third-stage"></div>
          <span class="progress-bar_third"></span>
          <p class="progress-bar_inactive progress-bar-inactive_sub">Summary</p>
        </div>
      </div>
    </nav>
    <div class="info">
      <div class="heading">
        <div>
          <p class="info-heading">
            Your response should provide a true and fair reflection of the state
            of risk and controls within your unit/function
          </p>
          <p class="info-text">
            List the "Activities" that are undertaken your unit, the breakdown
            of, operational risks associated with the sub-process, indicate the
            likelihood, impact & severity of occurrence. You should also List
            all the key controls, the effectiveness of the control and so on.
          </p>
        </div>
        <div>
          <img class="info-logo" src="../pictures/info.png" />
        </div>
      </div>

      <div class="info-input">
        <div class="info-input-field">
          <div class="input-field_first">
            <label class="label-first"> Activity</label>

            <input
              class="input-first"
              type="text"
              placeholder="Enter an activity undertaken by your unit"
              v-model="activity"
            />
          </div>
        </div>

        <div class="">
          <div class="input-field_second">
            <label class="label-second"> Process</label>
            <input
              type="text"
              class="input-second"
              placeholder="List the process pertaining to a particular activity"
              v-model="process"
            />
          </div>
        </div>

        <div class="">
          <div class="input-field_third">
            <label class="label-third">Sub Process</label>
            <input
              type="text"
              class="input-third"
              v-model="subProcess"
              placeholder="List the sub-process under each process"
            />
          </div>
        </div>

        <div class="">
          <div class="input-field_fourth">
            <label class="label-fourth">Responsibility</label>
            <input
              type="text"
              class="input-fourth"
              v-model="responsible"
              placeholder="Indicate the designation of persons in charge of the process/sub-process"
            />
          </div>
        </div>

        <div class="">
          <div class="input-field_fifth">
            <!-- <input type="text" class="input-fifth" v-model="reviewer" > -->
            <label class="label-fifth"> Potential Risk</label>

            <textarea
            
              class="textarea"
              placeholder="What are the potential issues, i.e 'operational risks' associated with the sub-process "
              v-model="potentialRisk"
            >
            
            </textarea>

            <div class="info-risk">
              <div class="info-risk-first">
                <label class="label-risk-first">Likelihood of occurrence</label>
                <input
                  class="input-risk-first"
                  @click="handleOccurrence"
                  v-model="occurs"
                  placeholder="indicate the likelihood of occurence"
                />
                <ul
                  :class="
                    selectOccurrence
                      ? 'occurs-list'
                      : 'occurs-list occurs-list-hide'
                  "
                >
                  <li class="li-risk" @click="changeOccurrence('Rare')">
                    Rare
                  </li>
                  <li class="li-risk" @click="changeOccurrence('Unlikely')">
                    Unlikely
                  </li>
                  <li class="li-risk" @click="changeOccurrence('Possible')">
                    Possible
                  </li>
                  <li class="li-risk" @click="changeOccurrence('Like')">
                    Like
                  </li>
                  <li
                    class="li-risk"
                    @click="changeOccurrence('Almost Certain')"
                  >
                    Almost Certain
                  </li>
                </ul>
              </div>
              <div class="info-risk-second">
                <label class="label-risk-second">Risk Impact</label>
                <input
                  class="input-risk-second"
                  @click="handleRiskImpact"
                  v-model="riskImpact"
                  placeholder="indicate the impact/severity of risk if it occurs"/>
                <ul :class="selectRiskImpact ? 'risk-list' : 'risk-list risk-list-hide'">
                  <li class="li-risk" @click="changeRisk('insignificant')">insignificant</li>
                  <li class="li-risk" @click="changeRisk('Minor')">Minor</li>
                  <li class="li-risk" @click="changeRisk('Moderate')">Moderate</li>
                  <li class="li-risk" @click="changeRisk('Major')">Major</li>
                  <li class="li-risk" @click="changeRisk('Catasthrophic')">Catasthrophic</li>
                </ul>
              </div>
              <div class="info-risk-third">
                <label class="label-risk-third">Risk level</label>
                <input class="input-risk-third"  v-model="riskLevel"/>
              </div>
              <div class="info-risk-fourth">
                <label class="label-risk-fourth">Causal Factor</label>
                <input class="input-risk-fourth" @click="handleCausalFactor" v-model="causalFactor" placeholder="Select the appropraite Causal Factor for the risk"/>
                <ul :class="selectCausalFactor ? 'factor-list' : 'factor-list factor-list-hide'">
                  <li class="li-factor" @click="changeFactor('Qualified Personnel')">Qualified Personnel</li>
                  <li class="li-factor" @click="changeFactor('Speed of Change')">Speed of Change</li>
                  <li class="li-factor" @click="changeFactor('Process Quality')">Process Quality</li>
                  <li class="li-factor" @click="changeFactor('Process Complexity')">Process Complexity</li>
                  <li class="li-factor" @click="changeFactor('Independent Reporting/ MIS')">Independent Reporting/ MIS</li>
                  <li class="li-factor" @click="changeFactor('Monitoring-Quality of reviews')">Monitoring-Quality of reviews</li>
                  <li class="li-factor" @click="changeFactor('Communication')">Communication</li>
                  <li class="li-factor" @click="changeFactor('Product Complexity')">Product Complexity</li>
                  <li class="li-factor" @click="changeFactor('Risk Limit')">Risk Limit</li>
                  <li class="li-factor" @click="changeFactor('System Complexity')">System Complexity</li>
                  <li class="li-factor" @click="changeFactor('Others')">Others</li>

                </ul>
              </div>
            </div>

            <div class="big-input">
              <div>
                <label class="labelFirst-BI">Details of Causal Factor</label>
                <textarea
                  class="inputFirst-BI"
                  v-model="detailsCausalFactor"
                  placeholder="This allows for details on casual factor"
                ></textarea>
              </div>

              <div>
                <label class="labelSecond-BI">Key control</label>
                <textarea
                  class="inputSecond-BI"
                  v-model="keyControl"
                  placeholder="List all the key controls that are currently in place to monitor the risk "
                ></textarea>
              </div>
            </div>
            <div class="inputFields-lastSection">
              <div class="lastSection">
                <label class="lastSection-labelFirst"
                  >Is the control in use?</label
                >
                <span class="span"
                  >indicate if control is currently in use/active</span
                >
                <label class="custom-radio-btn">
                  <div><input class="input-radio"  value="Yes" name="controlUse" @click="handleControlUse" type="radio"/>Yes</div>
                  <div><input class="input-radio" type="radio" value="No" name="controlUse" @click="handleControlUse" />No</div>
                </label>
              </div>
              <div>
                <label class="lastSection-labelSecond"
                  >Effectiveness of Control</label
                >
                <input
                  type="text"
                  class="lastSection-inputSecond"
                  @click="handleEffectControl"
                  v-model="effectControl"
                  placeholder="Indicate how effective the control is by selecting from the list"
                />
                <ul :class="selectEffectControl ? 'effect-list' : 'effect-list effect-list-hide'">
                  <li class="li-effect" @click="changeEffect('Poor')">Poor</li>
                  <li class="li-effect" @click="changeEffect('Fair')">Fair</li>
                  <li class="li-effect" @click="changeEffect('Good')">Good</li>
                  <li class="li-effect" @click="changeEffect('Excellent')">Excellent</li>
                 </ul>
              </div>
              <div>
                <label class="lastSection-labelThird">Inherent Risk</label>
                <input
                  type="text"
                  class="lastSection-inputThird"
                  @click="handleInherentRisk"
                  v-model="inherentRisk"
                  placeholder="No of times test is carried out"
                />
                <ul :class="selectInherentRisk ? 'inherentr-list' : 'inherentr-list inherentr-list-hide'">
                  <li class="li-inherentr" @click="changeInherentRisk('High')">High</li>
                  <li class="li-inherentr" @click="changeInherentRisk('Medium')">Medium</li>
                  <li class="li-inherentr" @click="changeInherentRisk('Low')">Low</li>
                 </ul>
              </div>
              <div>
                <label class="lastSection-labelFourth"> Residual Risk</label>
                <input
                  type="text"
                  class="lastSection-inputFourth"
                  @click="handleResidualRisk"
                  v-model="residualRisk"
                  placeholder="Select the Risk level in line with the risk rating given"
                />
                <ul :class="selectResidualRisk ? 'residualRisk-list' : 'residualRisk-list residualRisk-list-hide'">
                  <li class="li-residualRisk" @click="changeResidualRisk('High')">High</li>
                  <li class="li-residualRisk" @click="changeResidualRisk('Medium')">Medium</li>
                  <li class="li-residualRisk" @click="changeResidualRisk('Low')">Low</li>
                 </ul>
              </div>
              <div>
                <label class="lastSection-labelFifth">Test Frequency</label>
                <input
                  type="text"
                  class="lastSection-inputFifth"
                  v-model="testFrequency"
                  placeholder="No of times test is carried out"
                />
              </div>
              <div>
                <label class="lastSection-labelSixth">Test Methodology </label>
                <input
                  type="text"
                  class="lastSection-inputSixth"
                  v-model="testMethodology"
                  placeholder="indicate the samples used for testing the controls "
                />
              </div>
            </div>

            <div>
              <label class="last-label">Test Steps</label>
              <textarea
                class="last-text"
                v-model="testStep"
                placeholder="List dowm the document/register that were scrutinzed to ascertain the effectiveness of the controls in place"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>

    <div class="footer-bar"></div>
    <div class="footer-button">
      <div>
        <img class="footer-button_icon" src="../pictures/capture.png" alt="" />
        <a class="footer-button_back" @click="$router.push('/about')" href=""
          >Back
        </a>
      </div>
      <div>
        <button class="footer-button_next" @click="handleNext">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { toHandlers } from "vue";
import { RouterLink } from "vue-router";
export default {
  name: 'NextPage',
  RouterLink,
  data() {
    return {
      activity: "",
      process: "",
      subProcess: "",
      responsible: "",
      potentialRisk: "",
      occurs: "",
      riskImpact: "",
      riskLevel: "",
      causalFactor: "",
      detailsCausalFactor: "",
      keyControl: "",
      controlUseValue: '',
      effectControl: "",
      inherentRisk: "",
      residualRisk: "",
      testFrequency: "",
      testMethodology: "",
      testStep: "",
      selectOccurrence: false,
      selectRiskImpact: false,
      selectCausalFactor: false,
      selectEffectControl:false,
      selectInherentRisk: false,
      selectResidualRisk: false
    };
  },
  methods: {
    handleOccurrence() {
      this.selectOccurrence = true;
    },

    handleRiskImpact() {
      this.selectRiskImpact = true;
    },

    handleCausalFactor() {
      this.selectCausalFactor = true
    },

    handleEffectControl() {
      this.selectEffectControl = true
    },

    handleInherentRisk() {
      this.selectInherentRisk = true
    },

    handleResidualRisk() {
      this.selectResidualRisk = true
    },

    handleControlUse(e) {
      this.controlUseValue = e.target.value
    },

    changeOccurrence(occurs_role) {
      this.occurs = occurs_role;
      this.selectOccurrence = false;
    },

    changeRisk(risk_role) {
      this.riskImpact = risk_role;
      this.selectRiskImpact = false;
    },

    changeFactor(factor_role) {
      this.causalFactor = factor_role;
      this.selectCausalFactor = false
    },

    changeEffect(effect_role) {
      this.effectControl = effect_role
      this.selectEffectControl = false
    },

    changeInherentRisk(inherent_role) {
      this.inherentRisk = inherent_role
      this.selectInherentRisk = false
    },

    changeResidualRisk(residual_role) {
      this.residualRisk = residual_role
      this.selectResidualRisk = false
    },

    handleNext() {
      if(this.activity === '' 
      && this.process === '') {
        console.log('not ready')
      } else {
        localStorage.setItem("activity", this.activity.valueOf())
        localStorage.setItem("process", this.process.valueOf())
        localStorage.setItem("subProcess", this.subProcess.valueOf())
        localStorage.setItem("res", this.responsible.valueOf())
        localStorage.setItem("potentialRisk", this.potentialRisk.valueOf())
        localStorage.setItem("occurs", this.occurs.valueOf())
        localStorage.setItem("riskImpact", this.riskImpact.valueOf())
        localStorage.setItem("riskLevel", this.riskLevel.valueOf())
        localStorage.setItem("casualFactor", this.causalFactor.valueOf())
        localStorage.setItem("detailsCausalFactor", this.detailsCausalFactor.valueOf())
        localStorage.setItem("keyControl", this.keyControl.valueOf())
        localStorage.setItem("controlUseValue", this.controlUseValue.valueOf())
        localStorage.setItem("effectControl", this.effectControl.valueOf())
        localStorage.setItem("inherentRisk", this.inherentRisk.valueOf())
        localStorage.setItem("residualRisk", this.residualRisk.valueOf())
        localStorage.setItem("testFrequency", this.testFrequency.valueOf())
        localStorage.setItem("testMethodology", this.testMethodology.valueOf())
        localStorage.setItem("testStep", this.testStep.valueOf())
      }
      this.$router.push("/summary");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: scroll;
}

nav {
  position: sticky;
  top: 0;
  z-index: 999;
}

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
  margin-top: 2px;
  height: 30px;
  width: 30px;
}

ul {
  position: absolute;
  background-color: #fff;
  /* width: 18.7rem; */
  z-index: 999;
}

.occurs-list .li-risk {
  list-style: none;
  border: 1px solid #003366;
  text-align: left;
  padding: 10px 8px;
  margin-left: -24px;
  width: 18.7rem;
  color: #003366;
  background-color: #fff;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
}

.occurs-list-hide {
  display: none;
}

.risk-list .li-risk {
  list-style: none;
  border: 1px solid #003366;
  text-align: left;
  padding: 10px 8px;
  margin-left: 15px;
  width: 18.8rem;
  color: #003366;
  background-color: #fff;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
}

.risk-list-hide {
  display: none;
}

.factor-list .li-factor {
  list-style: none;
  border: 1px solid #003366;
  text-align: left;
  padding: 10px 8px;
  margin-left: 15px;
  width: 18.8rem;
  color: #003366;
  background-color: #fff;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
}

.factor-list-hide {
  display: none;
}

.effect-list .li-effect {
  list-style: none;
  border: 1px solid #003366;
  text-align: left;
  padding: 10px 8px;
  margin-left: 15px;
  width: 18.8rem;
  color: #003366;
  background-color: #fff;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
}

input:focus {
  border-left: 3px solid #003366;
}

textarea:focus{
  border-left: 3px solid #003366;
}

.effect-list-hide {
  display: none;
}

.inherentr-list .li-inherentr {
  list-style: none;
  border: 1px solid #003366;
  text-align: left;
  padding: 10px 8px;
  margin-left: -35px;
  width: 19.5rem;
  color: #003366;
  background-color: #fff;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
}

.inherentr-list-hide {
  display: none;
}

.residualRisk-list .li-residualRisk {
  list-style: none;
  border: 1px solid #003366;
  text-align: left;
  padding: 10px 8px;
  margin-left: 11px;
  width: 19rem;
  color: #003366;
  background-color: #fff;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
}


.residualRisk-list-hide {
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

.log-out {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  margin-left: 1.5rem;
  cursor: pointer;
}

.nav-right {
  display: flex;
}

.boder-one {
  border-left: 2px solid #ececec;
  margin-left: 1rem;
  margin-top: 4px;
  height: 25px;
}

.border-two {
  border-left: 2px solid #ececec;
  margin-left: 5px;
  margin-top: 4px;
  height: 25px;
}

.user {
  height: 30px;
  width: 30px;
}

.progress {
  background-color: #e2ecf5;
  height: 7rem;
  display: flex;
  justify-content: space-around;
}

.progress-first-stage {
  margin-top: 2rem;
}

.progress-bar_active {
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.progress-bar_inactive {
  font-size: 10px;
  color: #adadad;
}

.progress-bar-inactive_sub {
  margin-left: 25px;
}

.first-stage {
  background-color: #ff0000;
  border: 2px solid red;
  color: #fff;
  height: 15px;
  width: 15px;
  margin-bottom: 5px;
  margin-left: 22px;
  border-radius: 50%;
}

.second-stage {
  background-color: #fff;
  border: 2px solid red;
  color: #fff;
  height: 15px;
  width: 15px;
  margin-bottom: 10px;
  margin-left: 60px;
  border-radius: 50%;
}

.check-second-stage {
  margin-bottom: 2px;
  margin-left: 0;
  height: 9px;
  width: 9px;
}

.third-stage {
  background-color: #e4e4e4;
  border: 2px solid #adadad;
  color: #fff;
  height: 15px;
  width: 15px;
  margin-bottom: 15px;
  margin-left: 40px;
  border-radius: 50%;
}

.progress-bar_first {
  position: relative;
  top: 6px;
  left: 17px;
  width: 27.6rem;
  border-top: 3px solid red;
}

.progress-bar_second {
  position: relative;
  top: -12px;
  left: 17px;
  width: 28rem;
  border-top: 3px solid #adadad;
}

.info {
  background-color: #fff;
  height: 165vh;
  width: 47rem;
  margin: 20px auto;
  border-radius: 4px;
  border: 1px solid #ececec;
}

.heading {
  background-color: #e2ecf5;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 25px 0;
  border-radius: 4px;
}

.info-heading {
  font-size: 11.5px;
  font-weight: bold;
  text-align: left;
  width: 40rem;
  margin-left: 20px;
}

.info-text {
  font-size: 10px;
  margin-top: 5px;
  margin-left: 20px;
  text-align: justify;
  line-height: 1.5;
  width: 36rem;
}

.info-logo {
  height: 40px;
  width: 40px;
  margin-right: 20px;
}

.info-text_bold {
  font-weight: bolder;
}

.info-input {
  display: flex;
  flex-wrap: wrap;
  width: 40rem;
  margin: 40px auto;
}

.branch-list .li {
  list-style: none;
  border: 1px solid #003366;
  text-align: left;
  padding: 10px 8px;
  margin-left: -14px;
  width: 17rem;
  color: #003366;
  background-color: #fff;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
}

.branch-list-hide {
  display: none;
}

.label-first {
  position: relative;
  left: -15px;
  top: -15px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.input-first {
  margin-left: -4.5rem;
  width: 19rem;
  height: 2rem;
  font-size: 9px;
  padding-top: 10px;
  padding-left: 1rem;
}

.input-first:focus {
  border-left: 4px solid #036;
}

.sort-arrow {
  position: relative;
  top: 0.2rem;
  left: -2.5rem;
  cursor: pointer;
}

input::placeholder {
  font-size: 9px;
}

.label-second {
  position: relative;
  left: 35px;
  top: -15px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

input {
  outline: none;
}

.input-second {
  border: 1px solid #adadad;
  margin-left: -1.1rem;
  width: 19rem;
  height: 2rem;
  font-size: 9px;
  padding-top: 10px;
  padding-left: 12px;
}

.input-second:focus {
  border-left: 4px solid #036;
}

.sort-arrow-second {
  position: relative;
  left: -0.7rem;
}

.label-third {
  position: relative;
  left: -18px;
  top: -15px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.input-third {
  margin-left: -6rem;
  width: 19rem;
  height: 2rem;
  margin-top: 1.5rem;
  padding-top: 10px;
  padding-left: 1rem;
}

.label-fourth {
  position: relative;
  left: 35px;
  top: -15px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.input-fourth {
  border: 1px solid #adadad;
  margin-left: -3rem;
  margin-top: 1.5rem;
  width: 19rem;
  height: 2rem;
  padding-top: 10px;
  padding-left: 15px;
}

.label-fifth {
  position: relative;
  left: -19rem;
  top: 2rem;
  font-size: 10px;
  font-weight: bolder;
  background-color: white;
  color: #003366;
}

.textarea {
  margin-left: -3rem;
  width: 40.2rem;
  height: 3.5rem;
  margin-top: 0.5rem;
  padding-top: 30px;
  padding-left: 1.3rem;
  resize: none;
  overflow: hidden;
}

.info-risk {
  display: flex;
  flex-wrap: wrap;
}

.label-risk-first {
  position: relative;
  top: -18px;
  left: -22px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

textarea {
  outline: none;
}

.input-risk-first {
  margin-left: -9.7rem;
  width: 19rem;
  height: 2rem;
  margin-top: 1.5rem;
  padding-top: 10px;
  padding-left: 0.7rem;
}

.label-risk-second {
  position: relative;
  top: -15px;
  left: 36px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.input-risk-second {
  border: 1px solid #adadad;
  margin-left: -2.5rem;
  margin-top: 1.5rem;
  width: 19rem;
  height: 2rem;
  padding-top: 10px;
  padding-left: 1.1rem;
}

.label-risk-third {
  position: relative;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  top: -18px;
  left: -13px;
}

.input-risk-third {
  margin-left: -4.5rem;
  width: 19rem;
  height: 2rem;
  margin-top: 1.5rem;
  padding-top: 10px;
  padding-left: 0.7rem;
}

.label-risk-fourth {
  position: relative;
  top: -18px;
  left: 32px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.input-risk-fourth {
  border: 1px solid #adadad;
  margin-left: -3.3rem;
  margin-top: 1.5rem;
  width: 19rem;
  height: 2rem;
  padding-top: 10px;
  padding-left: 1rem;
}

.big-input {
  display: flex;
  flex-direction: column;
}

.labelFirst-BI {
  position: relative;
  top: 30px;
  left: -17.8rem;
  margin: 15px;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.inputFirst-BI {
  margin-top: 10px;
  margin-left: -2.8rem;
  width: 40.6rem;
  height: 3.5rem;
  padding-top: 1.5rem;
  padding-left: 1.1rem;
  resize: none;
  overflow: hidden;
}

.labelSecond-BI {
  position: relative;
  top: 30px;
  left: -19.5rem;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  font-size: 10px;
}

.inputSecond-BI {
  margin-top: 10px;
  margin-left: -2.8rem;
  width: 40.5rem;
  height: 3.5rem;
  padding-top: 25px;
  padding-left: 1rem;
  resize: none;
  overflow: hidden;
}

.inputFields-lastSection {
  display: flex;
  flex-wrap: wrap;
}

.lastSection {
  border: 1px solid #adadad;
  margin-left: -2.2rem;
  margin-top: 1.5rem;
  width: 19rem;
  height: 2rem;
  padding-top: 10px;
  padding-left: 1.6rem;
}

.lastSection-labelFirst {
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  position: relative;
  top: -10px;
  left: -20px;
}

.custom-radio-btn {
  display: flex;
  justify-content: space-between;
  width: 8rem;
  position: relative;
  right: 2px;
  font-size: 13px;
  margin-top: -8px;
}
/* .input-radio {
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 3px;
  background-color: red;
} */

/* .checkbox.input-radio {
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 3px;
  background-color: red;
} */

.lastSection-labelSecond {
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  position: relative;
  top: -1rem;
  left: 1.9rem;
}

.lastSection-inputSecond {
  margin-top: 25px;
  margin-left: -6.5rem;
  height: 2.5rem;
  width: 19rem;
  padding-left: 1rem;
}

.lastSection-labelThird {
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  position: relative;
  top: -13px;
  left: -1.4rem;
}

.lastSection-inputThird {
  margin-top: 20px;
  margin-left: -6.2rem;
  width: 19.7rem;
  height: 2.5rem;
  padding-left: 0.8rem;
}

.lastSection-labelFourth {
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  position: relative;
  top: -15px;
  left: 1.7rem;
}

.lastSection-inputFourth {
  margin-top: 20px;
  margin-left: -3.4rem;
  height: 2.5rem;
  width: 19rem;
  padding-left: 1rem;
}

.lastSection-labelFifth {
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  position: relative;
  top: -15px;
  left: -18px;
}

.lastSection-inputFifth {
  margin-top: 20px;
  margin-left: -6.5rem;
  width: 19.5rem;
  height: 2.5rem;
  padding-left: 0.7rem;
}

.lastSection-labelSixth {
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
  position: relative;
  top: -15px;
  left: 1.8rem;
}

.lastSection-inputSixth {
  margin-top: 20px;
  margin-left: -4.7rem;
  height: 2.5rem;
  width: 19rem;
  padding-left: 1rem;
}

.last-label {
  position: relative;
  top: 20px;
  left: -19.7rem;
  font-size: 10px;
  font-weight: bolder;
  color: #003366;
}

.last-text {
  margin-top: 0;
  margin-left: -2.8rem;
  width: 40.6rem;
  height: 3.5rem;
  padding-top: 20px;
  padding-left: 1.1rem;
  resize: none;
  overflow: hidden;
}

.last-text::placeholder {
  font-size: 10px;
}

.inputSecond-BI::placeholder {
  font-size: 9px;
}

.textarea::placeholder {
  font-size: 9px;
}

.inputFirst-BI::placeholder {
  font-size: 9px;
}

span {
  color: #acacac;
  font-size: 9px;
  position: relative;
  top: -10px;
}

.footer-bar {
  border: 1px solid #adadad;
  width: 50rem;
  margin: 10px auto;
}

.footer-button {
  display: flex;
  justify-content: space-between;
}
.footer-button_back {
  font-size: 10px;
  text-decoration: underline;
  position: relative;
  left: 17rem;
}

.footer-button_next {
  font-size: 10px;
  text-decoration: none;
  color: #fff;
  background-color: #ff0032;
  padding: 15px 30px;
  position: relative;
  right: 17.6rem;
  border: none;
  border-radius: 4px;
}

.footer-button_icon {
  position: relative;
  top: 5px;
  left: 17.2rem;
  transform: rotate(90deg);
}
</style>
