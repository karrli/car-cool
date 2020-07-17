(function (){
"use strict"
console.log(autos [0]);
console.log(autos[0].make);
console.log(autos[0].price);
// var makeSelected = document.getElementById('inputState');
// console.log(makeSelected.value)

function getCars (){
    var botonLogin = document.getElementById('login-btn')

    botonLogin.addEventListener('click', function() {
  // 1.- Para todo el arreglo, vamos a comparar el valor elegido vs el valor en cada objeto del arreglo      
for (var i = 0; i < autos.length; i++) {
 var budget = document.getElementById ('inputBudget');
 var price = autos[i].price 

 var makeSelected = document.getElementById('inputState');
 console.log(makeSelected)
 var make = autos[i].make

 var modelSelected = document.getElementById('inputStateModel');
 console.log(modelSelected)
 var model = autos[i].model

 var transmisionSelected = document.getElementById('inputStateTransmision');
 var transmision = autos[i].transmision

 //2.- La selección principal es que si el presupuesto es mayor o igual al 20% del precio
 //y el valor seleccionado es igual al valor del objeto del arreglo lo ponga en otro arreglo de carros seleccionados
 //Tengo duda sobre cómo podría meter el filtro del if en un arreglo
 var carSelection = []
 if (budget.value >= 0.20*(price) 
 && (makeSelected.value = make) 
 && (modelSelected.value = model) 
 && (transmisionSelected.value = transmision)) {
 
 carSelection.push(autos[i])
 }
 
} //cierre para for
    })
} 

getCars()
})()