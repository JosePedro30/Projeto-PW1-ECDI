import { defineStore } from "pinia";

export const useRegistrationStore = defineStore("registration", {
    state: () => ({
        registrations: [],
    }),
    actions: {
        addRegistration(registration) {
        this.registrations.push(registration);
    },
  },
});
