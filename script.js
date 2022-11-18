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

    //Ora è possibile procedere con l'approssimazione (fino all'unità)

    hours = Math.round(hours);


}




//Creazione funzione che, leggendo la scelta dell'utente riguardando il tipo di lavoro insieme al numero di ore richieste(hrs), calcola il primo prezzo della commissione (senza sconti)

function first_price (hrs) {

    //Lettura del form riguardante il tipo di lavoro richiesto

    let type_of_work = document.getElementById("type_of_work").value

    
}