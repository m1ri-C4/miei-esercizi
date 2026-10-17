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

// Catalogo prodotti: crea 4 funzioni indipendenti con un scopo preciso 

const prodotti = [
    { nome: "Iphone", prezzo: 899, categoria: "Elettronica", disponibile: true, rating: 5 },
    { nome: "Mouse", prezzo: 25, categoria: "Elettronica", disponibile: true, rating: 3 },
    { nome: "Maglietta", prezzo: 20, categoria: "Abbigliamento", disponibile: false, rating: 4 },
    { nome: "Jeans", prezzo: 65, categoria: "Abbigliamento", disponibile: true, rating: 5 },
    { nome: "Monitor", prezzo: 220, categoria: "Elettronica", disponibile: true, rating: 4 },
    { nome: "Felpa", prezzo: 45, categoria: "Abbigliamento", disponibile: true, rating: 2 },
];

function filtraCategoria(prodotti, categoria) {
    const scelti = [];

    for (let i = 0; i < prodotti.length; i++) {
        if (prodotti[i].categoria === categoria) {
            scelti.push(prodotti[i]);
        }
    }
    return scelti;
}
console.log(filtraCategoria(prodotti, "Elettronica"));

function prodottiMigliori(prodotti) {
    const migliori = [];

    for (let i = 0; i < prodotti.length; i++) {
        if (prodotti[i].disponibile === true && prodotti[i].rating >= 4) {
            migliori.push(prodotti[i]);
        }
    }
    return migliori;
}

console.log(prodottiMigliori(prodotti));

function mediaProdotti (prodotti){

    let media = 0;

     for (let i = 0; i < prodotti.length; i++) { 
          media += prodotti[i].prezzo / prodotti.length;
     }
     return media;
}
console.log(mediaProdotti(prodotti));

function trovaPiuCostoso (prodotti){
      let piuCostoso = prodotti[0];

    for (let i = 0; i < prodotti.length; i++) {

        if (prodotti[i].prezzo > piuCostoso.prezzo) {
              piuCostoso = prodotti[i];
        }
    }
    return piuCostoso;
}

console.log(trovaPiuCostoso(prodotti));