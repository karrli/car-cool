(function() {
    "use strict"
    var rowCards = document.getElementById("rowCards")
    var candidatos = []
    var marca = document.getElementById('inputState') //Voy a buscar por el id de una etiqueta
    console.log(marca)
    var anio = document.getElementById('inputStateModel')
    console.log(anio)
    var caja = document.getElementById('inputStateTransmision')
    console.log(caja)
    var presupuesto = document.getElementById('inputBudget')
    console.log(presupuesto)
    var guardar = document.getElementById('login-btn')


  
    // console.log(marca);
    // console.log(carros)
        // verificacion de datos

    guardar.addEventListener('click', function() { //funcion anonima
        // console.log(marca.value)
        // console.log(anio.value);
        // console.log(caja.value);
        // console.log(presupuesto.value);



        if (marca.value == "") {
            alert("Elige una marca válida 😇 ")

        } else if (anio.value == "") {
            alert("LOlvidó decirnos de que año quiere su nuevo Auto")
        } else if (caja.value == "") {
            alert("Defina cual es su tipo de transmisión de preferencia 🏎 ")
        } else if (presupuesto.value == "") {
            alert("Platiquenos su presupesto recuerde que debe de ser mayo a $15,000 pesos MX :)")

        } else if (presupuesto.value < 15000) {
            alert("solo aceptamos valores entre 15 mil pesos y 150 mil pesos de enganche ")
        } else if (presupuesto.value > 150000) {
            alert("WOW eso es mucho dinero seguro que quieres uno de nuestros carros?")
        } else {
            // hare una lista con los carros que cumplen el requerimiento de precio para esta consulta
            lista();
            console.log(candidatos);
            console.log(candidatos.length)
            display();

            //for (var i = 0; i < 149; i++)
        }



    })


    function lista() {
        for (var i = 0; i < autos.length; i++) {
            presupuesto = document.getElementById('inputBudget').value
            presupuesto = parseInt(presupuesto)
        var minBudget = 0.2* autos[i].price
            if (
                 autos[i].make == marca.value && autos[i].year == anio.value && autos[i].transmision == caja.value &&  minBudget <= presupuesto  
            ) {

                candidatos.push(autos[i]);
            } else {}
        }
    }


    lista();


    function display() {
        for (var i = 1; i < candidatos.length; i++) {

            var div = document.createElement('div');
            div.className = 'card col-lg-3 shadow-lg p-3 mb-5 bg-white rounded';
            var cardBody = document.createElement('div');
            cardBody.className = 'card-body '
            var img = document.createElement('img')
            img.className = 'card-img-top';
            img.setAttribute('src', "carplaceholder.png" )
            var model = document.createElement('h4')
            model.innerHTML = 'Modelo: ' + candidatos[i].model;
            model.className = 'card-text bg-info rounded'
            var make = document.createElement('h5')
            make.innerHTML = candidatos[i].make;
            make.className = 'card-text'
            var precio = document.createElement('h5')
            precio.innerHTML = 'Precio: $' + candidatos[i].price + '.00';
            precio.className = 'card-text'
            rowCards.appendChild(div);
            div.appendChild(cardBody);
            cardBody.appendChild(img);
            cardBody.appendChild(model);
            cardBody.appendChild(make);
            cardBody.appendChild(precio); //para que me registre el commit xd

        }

    }










})()