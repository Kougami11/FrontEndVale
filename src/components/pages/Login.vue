<script setup>
import LayoutDiv from '@/components/LayoutDiv.vue'
import Constants from '@/Constants'
import axios from 'axios'
import { ref } from 'vue'
import AuthService from '@/services/auth.service'
import store from '@/store'
import router from '@/router'

const user = ref()
const pass = ref()
const message = ref(false)
const loading = ref()
const invalidLogin = ref()

function login() {
  let data = new FormData()
  data.append('username', user.value)
  data.append('password', pass.value)
  axios
    .post('auth/token', data)
    .then((response) => {
      localStorage.setItem('_token', response.data.access_token)
      localStorage.setItem('user', JSON.stringify(response.data))
      axios
        .get('/users/', {
          headers: { Authorization: `Bearer ${response.data.access_token}` }
        })
        .then((response) => {
          console.log(response.data)
        })
    })
    .catch((response) => {
      console.log(response)
      loading.value = true
      invalidLogin.value = true
    })
}
console.log(store.state.auth)
function handleLogin() {
  loading.value = true
  let data = new FormData()
  data.append('username', user.value)
  data.append('password', pass.value)
  store.dispatch('auth/login', data).then(
    () => {
      router.push('/dashboard')
    },
    (error) => {
      loading.value = false
      message.value =
        (error.response && error.response.data && error.response.data.detail.message) ||
        error.message ||
        error.toString()
    }
  )
}
</script>
<template>
  <LayoutDiv>
    <div class="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
      <div class="position-relative z-index-5">
        <div class="row">
          <div class="col-xl-7 col-xxl-8">
            <a href="" class="text-nowrap logo-img d-block px-4 py-9 w-100">
              <img src="/logo.png" class="dark-logo" alt="Logo-Dark" />
              <img src="/logo.png" class="light-logo" alt="Logo-Dark" style="display: none" />
            </a>
            <div class="d-none d-xl-flex align-items-center justify-content-center h-n50">
              <img src="/login-security.svg" alt="modernize-img" class="img-fluid" width="500" />
            </div>
          </div>
          <div class="col-xl-5 col-xxl-4">
            <div class="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
              <div class="auth-max-width col-sm-8 col-md-6 col-xl-7 px-4">
                <h2 class="mb-1 fs-7 fw-bolder">[Welcome Message]</h2>
                <p class="mb-7">[Admin Template] {{ Constants.apiUrl }}</p>

                <div v-if="message" class="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show"
                  role="alert">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"
                    aria-label="Close"></button>
                  <strong>Error - </strong> {{ message }}
                </div>
                <form v-on:submit.prevent="handleLogin">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">[Username]</label>
                    <input type="text" v-model="user" class="form-control" id="user" aria-describedby="emailHelp"
                      required="required" />
                  </div>
                  <div class="mb-4">
                    <label for="exampleInputPassword1" class="form-label">[Password]</label>
                    <input type="password" v-model="pass" class="form-control" id="password" required="required" />
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="form-check">
                      <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked"
                        checked="" />
                      <label class="form-check-label text-dark fs-3" for="flexCheckChecked">
                        [Remeber this Device]
                      </label>
                    </div>
                    <a class="text-primary fw-medium fs-3 d-none" href="">Forgot Password ?</a>
                  </div>
                  <button href="" class="btn btn-primary w-100 py-8 mb-4 rounded-2">
                    [Sign In]
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutDiv>
</template>
