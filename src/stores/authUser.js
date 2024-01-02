import { defineStore } from 'pinia';

export const useAuthUser = defineStore('authUser', {
  state: () => ({
    users: []
  }),
  actions: {}
});
