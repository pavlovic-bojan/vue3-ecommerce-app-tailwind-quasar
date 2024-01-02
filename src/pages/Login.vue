<template>
      <q-form @submit.prevent="loginUser" class="m-5 flex flex-center flex-col">
        <div class="px-[10px] py-[10px] rounded-md border border-gray-600">
          <q-input
            v-model="username"
            label="Username"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-btn type="submit" label="Login" class="!bg-gray-700 !text-white q-mt-md w-80 h-13" />
          <RouterLink to="/forgot-password" class="gt-xs text-sm/[20px] mx-5 mt-5 mb-5"><strong>Forgot Password</strong></RouterLink>
        </div>
      </q-form>
  </template>
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'

  const username = ref('')
  const password = ref('')

const loginUser = async () => {
    const user = { 
      username: username.value, 
      password: password.value
    }
    const response = await axios.get(`http://localhost:3000/users?username=${user.username}&password=${user.password}`)
    console.log(response)
    const responseLogin = await axios.post('http://localhost:3000/login', user)
    console.log(responseLogin)

    const users = JSON.parse(localStorage.getItem('users'))
    // comparison
    const matchedLocalStorage = users.find(item => item.username === user.username && item.password === user.password)
    const matchedLoginApi = await axios.get(`http://localhost:3000/login?username=${user.username}&password=${user.password}`)
    const matchedLoginApiRespons = matchedLoginApi.data.length > 0
    // matched and redirect
    if (matchedLocalStorage && matchedLoginApiRespons) {
      localStorage.setItem('loginUser', JSON.stringify(user))
      window.location.href = '/dashboard'
    } else {
      console.log('invalid username or incorrect password')
    }
}
  </script>