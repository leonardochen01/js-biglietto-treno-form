// Dati da far compilare all'utente

const costoPerKm = 0.21;
const btn1 = document.getElementById('btn-save')

btn1.addEventListener('click',function(){

  let kmDaPercorrere = document.getElementById("req-km");

  let age = document.getElementById("req-age").value;
  console.log( );
})










// Calcola il costo totale del viaggio
let costoTot = kmDaPercorrere * costoPerKm;








/*

// Applica lo sconto del 20% per i minorenni e del 40% agli over 65
if (age < 18) {
  costoTot *= 0.8;
} else if (age > 65) {
  costoTot *=0.6;
}

let costoScontato = costoTot.toFixed(2)
console.log(costoScontato)

// Output
document.getElementById("output").innerHTML = `Il costo del tuo biglietto del treno è di ${costoTot} €`

*/