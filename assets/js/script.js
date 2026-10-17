// Registro studenti: realizza un programma per gestire i voti degli studenti

const studenti = [
    { nome: 'Marco', voto: 8, presente: true },
    { nome: 'Giulia', voto: 5, presente: true },
    { nome: 'Luca', voto: 7, presente: false },
    { nome: 'Sara', voto: 9, presente: true },
    { nome: 'Andrea', voto: 4, presente: true }
];

const promossi = [];
for (let i = 0; i < studenti.length; i++) {

    if (studenti[i].presente === false) {
        console.log(`${studenti[i].nome} Studente assente`);
    } else if (studenti[i].voto >= 6) {
        console.log(`${studenti[i].nome} ${studenti[i].voto} Promosso`);
        promossi.push(studenti[i].nome)
    } else {
        console.log(`${studenti[i].nome} ${studenti[i].voto} Bocciato`);
    }
}
console.log(promossi);
console.log(promossi.length);


//Gestione ordini: calcola automaticamente il costo degli ordini dei clienti

const ordini = [
    { prodotto: 'Mouse', prezzo: 25, quantita: 2 },
    { prodotto: 'Tastiera', prezzo: 60, quantita: 1 },
    { prodotto: 'Monitor', prezzo: 180, quantita: 2 },
    { prodotto: 'Cuffia', prezzo: 45, quantita: 3 },
];

const ordiniPiccoli = [
    { prodotto: 'Mouse', prezzo: 25, quantita: 2 },
    { prodotto: 'Tastiera', prezzo: 60, quantita: 1 }
];



function calcoloTotale(ordini) {
    let totale = 0;

    for (let i = 0; i < ordini.length; i++) {
        totale += ordini[i].prezzo * ordini[i].quantita;
    } if (totale > 300) {
        totale -= totale * 0.10;
    }
    return totale;
}
console.log(calcoloTotale(ordini));
console.log(calcoloTotale(ordiniPiccoli));

function trovaProdottiCostosi(ordini, prezzoMinimo) {
    const prodottiCostosi = [];

    for (let i = 0; i < ordini.length; i++) {

        if (ordini[i].prezzo > prezzoMinimo) {
            prodottiCostosi.push(ordini[i].prodotto);
        }
    }
    return prodottiCostosi;
}

console.log(trovaProdottiCostosi(ordini, 100));

// Catalogo prodotti: