import Vue from 'vue'
import App from './App.vue'
import store from '@/store';
import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
 
Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO(process.env.API_BASE_URL || 'http://localhost:3000'),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
