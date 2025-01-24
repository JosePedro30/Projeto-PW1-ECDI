import { defineStore } from "pinia";

export const useProgramStore = defineStore("program", {
    state: () => ({
        events: [
            { id: 1, name: "The Weekend Show", day: "Sábado", startTime: "20:00" },
            { id: 2, name: "Green Rock Festival", day: "Domingo", startTime: "18:00" },
        ],
        isLoading: false,
        error: null,
    }),
    actions: {
        async fetchEvents(apiInstance) {
            this.isLoading = true;
            this.error = null;
        try {
            const response = await apiInstance.get("/events"); // Exemplo de endpoint
            this.events = response.data;
        } catch (error) {
            this.error = "Erro ao carregar o programa.";
        } finally {
            this.isLoading = false;
        }
        },
        addEvent(event) {
            this.events.push(event);
        },
  } ,
});
