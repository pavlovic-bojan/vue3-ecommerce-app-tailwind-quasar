<template>
    <q-form @submit.prevent="registerUser" class="m-5 flex flex-center flex-col">
      <div class="px-[10px] py-[10px] rounded-md border border-gray-600 flex-col">
          <q-input
            v-model="username"
            label="Username"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-input
            v-model="email"
            label="E-mail"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-input
            v-model="phone"
            label="Phone"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-input
            v-model="address"
            label="Address"
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
          <q-input
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-btn type="submit" label="Register" class="!bg-gray-700 !text-white q-mt-md w-80 h-13 mb-5" />
          <span class="pt-2"><q-checkbox size="xs" v-model="right" /> I agree with <RouterLink to="#" class="text-sm/[20px] text-[#3683cd]">the Privacy Policy</RouterLink></span>
          <br><RouterLink to="/login" class="gt-xs text-sm/[20px]"><strong>If You Have An Account, Please Login</strong></RouterLink>
    </div>
    </q-form>
</template>
<script setup>
import { ref } from 'vue'
import { useAuthUser} from '../stores/authUser.js'
import axios from 'axios'

const authUser = useAuthUser()

const right = ref(true)

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')

const registerUser = async () => {
  const user = { 
    username: username.value, 
    password: password.value, 
    confirmPassword: 
    confirmPassword.value, email: 
    email.value, phone: 
    phone.value, 
    address: address.value, 
    right: right.value
  }
  const response = await axios.post('http://localhost:3000/users', user)
  authUser.users.push(user)
  localStorage.setItem('users', JSON.stringify(authUser.users))
  window.location.href = '/dashboard'
  console.log(response)
}
</script>