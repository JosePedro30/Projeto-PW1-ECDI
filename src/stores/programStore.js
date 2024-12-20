import { defineStore } from "pinia";

export const useProgramStore = defineStore("program", {
    state: () => ({
        programs: [],
    }),
    actions: {
        setPrograms(programs) {
        this.programs = programs;
    },
    },
});
