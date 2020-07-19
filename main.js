(function (){
"use strict"
console.log(autos [0]);
console.log(autos[0].make);
console.log(autos[0].price);
// var makeSelected = document.getElementById('inputState');
// console.log(makeSelected.value)

// function getCars (){
    // var container = document.querySelector('.row');
    var botonLogin = document.getElementById('login-btn')

    botonLogin.addEventListener('click', function() {
  // 1.- Para todo el arreglo, vamos a comparar el valor elegido vs el valor en cada objeto del arreglo      
for (var i = 0; i < autos.length; i++) {
 var budget = parseInt(document.getElementById ('inputBudget'));
 var price = autos[i].price 

 var makeSelected = document.getElementById('inputState');
//  console.log(makeSelected)
 var make = autos[i].make

 var modelSelected = document.getElementById('inputStateModel');
//  console.log(modelSelected)
 var model = autos[i].model

 var transmisionSelected = document.getElementById('inputStateTransmision');
 var transmision = autos[i].transmision

 //2.- La selección principal es que si el presupuesto es mayor o igual al 20% del precio
 //y el valor seleccionado es igual al valor del objeto del arreglo lo ponga en otro arreglo de carros seleccionados
 //Tengo duda sobre cómo podría meter el filtro del if en un arreglo

 if (budget.value >= 0.20*(price) 
 && (makeSelected.value = make) 
 && (modelSelected.value = model) 
 && (transmisionSelected.value = transmision)) {

  let container = document.getElementById('rowCarCards');
 
  let column3 = document.createElement('div'); 
  column3.className = 'col-md-3';
  let card = document.createElement('div');
  card.className = 'card mb-4 border-danger rounded';
  let img = document.createElement('img')
  img.className = 'card-img-top';
  img.setAttribute('src', "https://es.chrysler.com/content/dam/fca-brands/na/chrysler/en_us/2020/300/gallery/exterior/2020-chrysler-300-gallery-exterior-1.jpg")
  let nameText = document.createElement('text')
  nameText.innerHTML= model
  //The  index [i] helps to select elements of the array
  nameText.className = 'd-flex justify-content-center bg-dark rounded font-weight-bold text-white'
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body bg-white';
  let pTypeName = document.createElement('p');
  let listMake = document.createElement('li')
  listMake.innerHTML = "Make: " + make
  listMake.className = 'font-weight-bold';
  let listPrice = document.createElement('li')
  listPrice.innerHTML = "Type: " + price
  listPrice.className = 'font-weight-bold';
  let listColors = document.createElement('li')
  listColors.innerHTML = "Colors: " + autos[i].colors
  listColors.className = 'font-weight-bold';

  // console.log(listType)
  pTypeName.append(listMake);
  pTypeName.append(listPrice);
  pTypeName.append(listColors);
  cardBody.append(pTypeName);
  card.append(img);
  card.append(nameText);
  card.append(cardBody);
  column3.append(card);
  container.append(column3);
         
 } else {}
 
} //cierre para for
    })
// } 

// getCars()
})()