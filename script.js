/* CONSEGNA:    A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
                Il prezzo orario per una commissione varia in questo modo:
                Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
                Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
                Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
                Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
                Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti. */

//Creazione funzione principale che, attivata al click del bottone apposito, calcola il prezzo della commissione, con eventuali deduzioni ad esso per via dei codici sconto

function PrintPrice() {

    //Trasformazione dell'input dell'utente in variabile

    let hours = document.getElementById("formHoursInput").value;

    /*  Nel caso in cui l'utente inserisca un numero di ore con dei decimali, è necessario approssimarlo
        Per fare ciò, è necessario prima sostituire eventuali virgole con dei punti, in modo tale da poter utilizzare l'input nell'approssimazione */

    hours = hours.replace(",", ".");

    //Controllo input dell'utente, nel caso in cui il valore inserito non sia un numero, o sia minore di 1, viene dato errore

    if (isNaN(hours) || hours < 1) {
        console.error("Valore delle ore invalido!");
    }

    //Ora è possibile procedere con l'approssimazione (fino all'unità)

    hours = Math.round(hours);

    //Grazie alla funzione full_price si ottiene il primo prezzo (senza sconti) in base alle ore e al tipo di lavoro richiesto
    
    let first_price = full_price (hours);

    let final_price = discount (first_price);

    console.log(final_price)
}




//Creazione funzione che, leggendo la scelta dell'utente riguardando il tipo di lavoro insieme al numero di ore richieste(hrs), calcola il primo prezzo della commissione (senza sconti)

function full_price (hrs) {

    //Lettura del form riguardante il tipo di lavoro richiesto

    let type_of_work = document.getElementById("type_of_work").value

    if (type_of_work == 1) {                    
        return 15.30 * hrs;                 // Se la commissione riguarda lo sviluppo frontend (1) il prezzo orario è di 15.30 € l’ora
    } else if (type_of_work == 2) {
        return 20.50 * hrs;                 // Se la commissione riguarda lo sviluppo backend (2) il prezzo orario è di 20.50 € l’ora
    } else if (type_of_work == 3) {
        return 33.60 * hrs;                 // Se la commissione riguarda l’analisi progettuale (3) di un progetto il prezzo orario è di 33.60 € l'ora
    }
}


//Prima di creare la funzione per l'applicazione dello sconto, è necesario creare un array con i codici sconto accettati

let discount_codes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//Creazione funzione che calcola il prezzo finale della commissione (applicando eventuali sconti)

function discount (price) {

    //Lettura dell'input dell'utente e trasformazione in variabile

    let input = document.getElementById("formDiscountInput").value;

    input = input.toUpperCase();            // Si trasforma l'input dell'utente in un codice in maiuscolo per verificare se il codice inserito è presente tra quelli consentiti

    if (discount_codes.includes(input)) {                       //Se il codice inserito dall'utente è presente tra quelli accettati, viene applicato il 25% di sconto
        console.log("Codice sconto applicato! (-25%)");             
        return price - 0.25 * price;
    } else {
        console.log("Codice sconto non inserito/invalido.");    
        return price;                                           //Altrimenti, non applicando alcun sconto, il prezzo finale equivale al prezzo iniziale
    }
}