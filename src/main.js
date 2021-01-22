import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBdQlpeFsuzfBBhonIzhctsVD68dHrgVjE",
  authDomain: "movie-picker-app-55590.firebaseapp.com",
  projectId: "movie-picker-app-55590",
  storageBucket: "movie-picker-app-55590.appspot.com",
  messagingSenderId: "1055960855175",
  appId: "1:1055960855175:web:6db90938681d4bdbfffe22"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
