<script setup>
import { ref } from 'vue';

const loginUser = ref(JSON.parse(localStorage.getItem('loginUser')))

const logout = () => {
    console.log('running logout--->')
    localStorage.removeItem('loginUser')
    loginUser.value = {}
    window.location.href = '/login'
}

const menuTopBar = ["WOMEN", "MEN", "BOYS", "GIRLS", "BRANDS", "HELP"]
const menuTopBar2 = [ "NEW IN", "CLOTHES", "SHOES", "BAGS", "ACCESSORIES", "BEAUTY", "OUTLET"]
</script>
<template>
    <q-bar class="!bg-[#2a2b32] text-white">
        <a href="#newsletter" class="text-sm/[20px]">Sign Up for Newsletter</a>
        <RouterLink to="/products" class="text-sm/[20px] ml-5">Products</RouterLink>
        <RouterLink v-if="loginUser" to="/dashboard" class="gt-xs text-sm/[20px] ml-10">Dashboard</RouterLink>
        <q-space />

        <!-- only before login case -->
        <RouterLink v-if="!loginUser" to="/register" class="gt-xs text-sm/[20px]"><strong>Register</strong> /
        </RouterLink>
        <RouterLink v-if="!loginUser" to="/login" class="text-sm/[20px]">Login</RouterLink>

        <!-- only after login case -->
        <RouterLink v-else-if="loginUser" to="/login" @click="logout" class="text-sm/[20px]">logout</RouterLink>
    </q-bar>
    <q-toolbar
        class="text-center !bg-white text-#2a2b32 h-[71px] !sticky top-0 z-40">
        <q-list dense inline padding class="rounded-borders flex">
            <q-item  v-for="(item, index) in menuTopBar" :key="index" v-ripple clickable>
                    <q-item-section class="q-item-label hover:bg-[#2c2c33] hover:text-white">
                        <RouterLink to="#">{{ item }}</RouterLink>
                    </q-item-section>
                </q-item>
        </q-list>
        <q-toolbar-title class="q-flex q-items-center !bg-white">
            <RouterLink to="/">
                <q-img class="!h-[36px] !w-[100px]"
                    :src="'https://remiks.com/static/version1703103665/frontend/Remiks/default/sr_Latn_RS/images/logo.svg'" />
            </RouterLink>
        </q-toolbar-title>
        <q-input outlined v-model="ph"
            placeholder="Search Product" :dense="dense" class="q-mr-xs mt-[22.5px] mb-[31.5px] !w-29 h-[45px]">
            <template v-slot:prepend>
                <q-btn flat round dense icon="search" />
            </template>
        </q-input>
        <q-btn flat round dense icon="favorite_border" />
        <q-btn flat round dense icon="local_mall">
            <q-badge floating rounded class="!bg-[#2c2c33] text-waith">2</q-badge>
        </q-btn>
    </q-toolbar>
    <q-toolbar class="bg-black text-gray-300 text-center top-[71px] !sticky z-40">
        <q-toolbar-title>
            <q-list class="flex flex-row justify-center text-sm/[20px]">
                <q-item v-for="(item, index) in menuTopBar2" :key="index" v-ripple clickable>
                    <q-item-section class="q-item-label hover:text-white">
                        <RouterLink to="#">{{ item }}</RouterLink>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-toolbar-title>
    </q-toolbar>
</template>