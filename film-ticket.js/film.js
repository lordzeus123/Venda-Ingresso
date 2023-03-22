class film {
    //static count = 0;
    constructor (film, runtime, price, tickets) {
        this.film = film;
        this.runtime = runtime;
        this.price = price;
        this.tickets = tickets;
        
        //film.count++;    
    }



    getFilm () {
        return this.film;
    }

    getRuntime () {
        return this.runtime;
    }

    getPrice () {
        return this.price;
    }

    getTickets () {
        return this.tickets;
    }
}

let avatar = new film("Avatar", 120, 30, 300);

console.log(avatar.getTickets());





exports.film = film;


