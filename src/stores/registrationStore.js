import { defineStore } from "pinia";

export const useRegistrationStore = defineStore("registration", {
    state: () => ({
        registrations: [], // Lista de inscrições
        isLoading: false,
        error: null,
    }),
    actions: {
        async addRegistration(apiInstance, registrationData) {
            this.isLoading = true;
            this.error = null;
        try {
            const response = await apiInstance.post("/registrations", registrationData); // Endpoint de inscrições
            this.registrations.push(response.data);
        } catch (error) {
            this.error = "Erro ao registar.";
        } finally {
            this.isLoading = false;
        }
        },
        async fetchRegistrations(apiInstance) {
            this.isLoading = true;
            this.error = null;
        try {
            const response = await apiInstance.get("/registrations");
            this.registrations = response.data;
        } catch (error) {
            this.error = "Erro ao carregar inscrições.";
        } finally {
            this.isLoading = false;
        }
        },
    },
});
