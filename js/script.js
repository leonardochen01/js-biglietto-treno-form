//function bottone

document.addEventListener("click", function(){
  
  var km = document.getElementById("km").value;
  
  var age = document.getElementById("age").value;

  var costo = km * 0.21;

  if (age < 18) {
    costo *= 0.8;
  } else if (age >= 65) {
    costo *= 0.6;
  }

  let costoTot = costo.toFixed(2)

  document.getElementById("prezzo").innerHTML = `Il costo del tuo biglietto del treno è pari a ${costoTot} euro`;
  
})

