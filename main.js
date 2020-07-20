(function (){
"use strict"
// console.log(autos [0]);
// console.log(autos[0].make);
// console.log(autos[0].price);

    var botonLogin = document.getElementById('login-btn');

    botonLogin.addEventListener('click', function() {
  // 1.- Para todo el arreglo, vamos a comparar el valor elegido vs el valor en cada objeto del arreglo      
 var budget = parseInt(document.getElementById ('inputBudget'));
  var makeSelected = document.getElementById('make');
//  console.log(makeSelected)
 var modelSelected = document.getElementById('year');
//  console.log(modelSelected)
  var transmisionSelected = document.getElementById('transmision');
  //2.- La selección principal es que si el presupuesto es mayor o igual al 20% del precio
 //y el valor seleccionado es igual al valor del objeto del arreglo lo ponga en otro arreglo de carros seleccionados
 //Tengo duda sobre cómo podría meter el filtro del if en un arreglo
 
 for (var i = 0; i < autos.length; i++) {
  var prices = autos[i].price; 
  var makes = autos[i].make;
  var models = autos[i].model;
  var transmisions = autos[i].transmision;
 if (budget.value >= 0.20*(prices) 
 && (makeValue(makeSelected.value) = makes) 
 && (modelYear(modelSelected.value) = models) 
 && (transmisionValue(transmisionSelected.value) = transmisions)) {
  let container = document.getElementById('rowCards');
    let column3 = document.createElement('div'); 
  column3.className = 'col-md-3';
  let card = document.createElement('div');
  card.className = 'card mb-4 border-danger rounded';
  let img = document.createElement('img')
  img.className = 'card-img-top';
  img.setAttribute('src', "https://es.chrysler.com/content/dam/fca-brands/na/chrysler/en_us/2020/300/gallery/exterior/2020-chrysler-300-gallery-exterior-1.jpg")
  let nameText = document.createElement('text')
  nameText.innerHTML= model
 
  nameText.className = 'd-flex justify-content-center bg-dark rounded font-weight-bold text-white'
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body bg-white';
  let pTypeName = document.createElement('p');
  let listMake = document.createElement('li')
  listMake.innerHTML = "Make: " + makes
  listMake.className = 'font-weight-bold';
  let listPrice = document.createElement('li')
  listPrice.innerHTML = "Price: " + prices
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
function makeValue(value) {

  if (value == 1) {
      return "Nissan";
  } else if (value == 2) {
      return "Chevrolet";
  } else {
      return "Ford";
  }

}

function modelYear(value) {
  if (value == 1) {
      return 2019;
  } else
      return 2020;
}

function transmisionValue (value) {
  if (value == 1) {
      return "manual"
  } else
      return "auto";
}


})()