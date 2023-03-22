 const { film } = require("./film.js");

class tickets {
    constructor(film) {
        ticketsAmount = film.tickets;
        ticketValue = film.ticketValue;

    }

    getTicketsAmount() {
        return ticketsAmount;
    }

    getTicketsValue () {
        return ticketValue;
    }

}



