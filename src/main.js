// import { createApp } from 'vue'
import Vue from "vue"
import App from './App.vue'
import router from './router'
import Toast from 'vue-toasted'

Vue.config.productionTip = false;

Vue.use(Toast, {
    duration:1500
});

new Vue ({
    router,
    render: (h) => h(App),
}).$mount("#app")

