// Dati e prompt da far compilare all'utente
const costoPerKm = 0.21;
let kmDaPercorrere = prompt("Inserisci il numero di chilometri che desideri percorrere:");
console.log(`desideri percorrere` + kmDaPercorrere + `kilometri`)
let age = prompt("Inserisci la tua età:");

// Calcola il costo totale del viaggio
let costoTot = kmDaPercorrere * costoPerKm;
console.log( kmDaPercorrere, age, costoPerKm, costoTot )

// Applica lo sconto del 20% per i minorenni e del 40% agli over 65
if (age < 18) {
  costoTot *= 0.8;
} else if (age > 65) {
  costoTot *=0.6;
}

// Tradurre lo sconto in max 2 numeri decimali

/* questa è una prova che ho fatto prima di applicare lo sconto
let try = 3.12345
let complete = try.toFixed(2)
console.log(costoScontato)
*/
let costoScontato = costoTot.toFixed(2)
console.log(costoScontato)

// Output
document.getElementById("output").innerHTML = `Il costo del tuo biglietto del treno è di ${costoTot} €`

document.getElementById("commento").innerHTML = `Non ci credo, l'esercizio era così semplice?? Ho fatto tutto bene?`
