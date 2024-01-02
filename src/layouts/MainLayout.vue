<template>
  <q-layout view="lHh Lpr lFf">

    <TopBar />

    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <YellowSection />
    <Footer />
</q-layout>
</template>

<script setup>
// import { defineComponent, ref } from 'vue'
import TopBar from '../layouts/TopBar.vue'
import YellowSection from '../layouts/YellowSection.vue'
import Footer from '../layouts/Footer.vue'
</script>
