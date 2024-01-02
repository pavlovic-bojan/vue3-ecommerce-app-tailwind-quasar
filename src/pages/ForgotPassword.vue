<template>
  <q-form @submit.prevent="register" class="m-5 flex flex-center flex-col">
    <div class="px-[10px] py-[10px] rounded-md border border-gray-600">
        <q-input
          v-model="email"
          label="E-mail"
          dense
          outlined
          clearable
          class="q-mb-md w-80 h-13"
        />
        <q-btn type="submit" label="Reset Password" class="!bg-gray-700 !text-white q-mt-md w-80 h-13 mb-3" />
    </div>
  </q-form>
</template>
<script setup>
import { ref } from 'vue'

const email = ref('')

const register = () => {
  console.log('Reset Password with:', { email: email.value})
}
</script>