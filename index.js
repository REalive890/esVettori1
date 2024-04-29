window.onload = init;

//Array semplice JSON
var utenti = ["Elisa", "Giacomo", "Alessandro", "Sara", "Negozio", "Locale"];

//LOGIN -> Array associativo
var utenti2 = {
    "Elisa": {
        pwd: "eli67!",
        transazioni: [],
        transazioniDaConfermare:[]
    },
    "Giacomo": giacomo,
    "Alessandro": {
        pwd: "ale!!1995",
        transazioni: []
    },
    "Sara": {
        pwd: "1990Sara!!",
        transazioni: [{
            data: new Date(),
            importo: 5,
            utente: "Elisa",
            utente2: "Negozio",
            divisione: []
        }]
    }
};

//DEFINIZIONE DI UN OGGETTO JSON
var giacomo = {
    pwd: "gia2000!!",
    transazioni: []
};

var transazione = {
    data: new Date(),
    importo: 5,
    utente: "Elisa",
    utente2: "Negozio",
    divisione: []
}

function init() {
    console.log(utenti2);
    console.log(utenti);
    console.log(transazione);

    console.log(utenti2["Elisa"]);
    //console.log(utenti2[Elisa]); //ATTENZIONE!!!!

    //Inserimento in coda di un nuovo elemento in un array
    utenti.push("Pippo");
    utenti[utenti.length] = "Pluto";
    utenti[0] = "Elena";

    //Inserimento di un nuovo elemento in un array associativo
    utenti2["Pluto"] = {
        pwd:"test"
    };

    console.log(utenti);
    console.log(utenti2);

    let select = "";
    for(let i=0;i<utenti.length; i++){
        select += `<option>${utenti[i]}</option>`;
    }
    console.log(select);

    let select2 = "";
    //CICLA SUI CONTENUTI (non si vede l'indice)
    for(let item of utenti){
        select2 += `<option>${item}</option>`;
    }
    console.log(select2);

    let select3 = "";
    //CICLA SUI INDICI (non si vede l'indice)
    for(let indice in utenti){
        select3 += `<option>${utenti[indice]}</option>`;
    }
    console.log(select3);

    
    let select4 = "";
    //CICLA SULLE KEY (UNICO FUNZIONANTE SUGLI ARRAY ASSOCIATIVI)
    for(let key in utenti2){
        select4 += `<option>${utenti2[key]}</option>`;
    }
    console.log(select4);
}