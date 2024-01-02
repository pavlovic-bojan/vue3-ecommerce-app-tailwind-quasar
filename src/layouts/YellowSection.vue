<template>
    <div class="bg-[#ffff00] min-h-40 p-20" id="newsletter">
        <div class="flex flex-row justify-center">
            <span class="pt-5 mr-8"><strong>SUBSCRIBE TO OUR NEWSLETTER</strong></span>
            <q-input outlined v-model="ph" placeholder="Enter Your Email Address" class="bg-white h-13 w-80 mr-3" />
            <q-btn class="!bg-gray-700 !text-white !h-13 !w-80" label="Check-in" />
        </div>
        <div class="flex flex-row justify-center pt-3">
            <q-checkbox size="xs" v-model="right" class="bg-white mr-3" />
            <span class="pt-1">I agree with </span>
            <span class="pt-1 ml-1"><RouterLink to="#" class="text-sm/[20px] text-[#3683cd]">the Privacy Policy</RouterLink></span>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const right = ref(true)
  const ph = ref('')
  </script>
  