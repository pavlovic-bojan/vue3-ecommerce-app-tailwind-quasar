<template>
    <div class="grid grid-cols-12 grid-rows-1 gap-4 m-10 !h-full">
      <q-page-container class="col-span-3 !h-full">
        <q-card>
          <q-card-section>
            <a @click="activeTab = 'orders'" :class="{ 'border-b-2': activeTab === 'orders' }" class="mr-4 cursor-pointer">My Orders</a>
          </q-card-section>
  
          <q-card-section>
            <a @click="activeTab = 'question'" :class="{ 'border-b-2': activeTab === 'question' }" class="mr-4 cursor-pointer">My Question</a>
          </q-card-section>
  
          <q-card-section>
            <a @click="activeTab = 'account'" :class="{ 'border-b-2': activeTab === 'account' }" class="mr-4 cursor-pointer">My Account</a>
          </q-card-section>
        </q-card>
      </q-page-container>
  
      <q-page-container class="col-start-4 col-span-9">
        <!-- Content based on the selected tab -->
        <div v-show="activeTab === 'orders'" class="mt-4">
          <h2 class="text-xl font-semibold mb-4">My Orders</h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
             anim id est laborum.
          </p>
        </div>
  
        <div v-show="activeTab === 'question'" class="mt-4">
          <h2 class="text-xl font-semibold mb-4">My Question</h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
             anim id est laborum.
          </p>          
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
             anim id est laborum.
          </p>
        </div>
  
        <div v-show="activeTab === 'account'" class="mt-4">
          <h2 class="text-xl font-semibold mb-4">My Account</h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
             anim id est laborum.
          </p>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
             anim id est laborum.
          </p>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
             anim id est laborum.
          </p>  
        </div>
      </q-page-container>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeTab = ref('orders');
  </script>
  