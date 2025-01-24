import { defineStore } from "pinia";

export const useTicketStore = defineStore("ticket", {
    state: () => ({
        tickets: [
            { id: 1, name: "Passe Geral", price: 100, available: true },
            { id: 2, name: "Passe de 2 Dias", price: 60, available: true },
            { id: 3, name: "Passe de 1 Dia", price: 40, available: false },
        ],
    }),
    getters: {
        availableTickets: (state) =>
            state.tickets.filter((ticket) => ticket.available),
    },
    actions: {
        addTicket(ticket) {
            this.tickets.push(ticket);
        },
        updateTicketAvailability(id, availability) {
            const ticket = this.tickets.find((t) => t.id === id);
            if (ticket) {
                ticket.available = availability;
        }
        },
    },
});
