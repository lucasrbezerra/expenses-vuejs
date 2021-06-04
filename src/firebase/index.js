import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDxx_z0_558_OhBE9KTzQhEAv9gSM8_vWI',
  authDomain: 'expenses-vue-js.firebaseapp.com',
  databaseURL: 'https://expenses-vue-js-default-rtdb.firebaseio.com',
  projectId: 'expenses-vue-js',
  storageBucket: 'expenses-vue-js.appspot.com',
  messagingSenderId: '436685139868',
  appId: '1:436685139868:web:76c5a7ed2222cc24ffe259',
  measurementId: 'G-YT7GKSGQN1'
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
