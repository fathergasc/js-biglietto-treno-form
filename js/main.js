/* const yearOfBirth = parseInt(prompt('Inserisci la tua data di nascita'));
console.log("yearOfBirth variable's type is " + typeof yearOfBirth);

const travelDistance = parseInt(prompt('Inserisci la distanza da percorrere in km'));
console.log("travelDistance variable's type is " + typeof yearOfBirth); */

const getDomValues = document.getElementById('get_values');

getDomValues.addEventListener('click', 
    function() {
        const nameDom = document.getElementById('name');
        const travelDistanceDom = document.getElementById('travel_distance');
        const travelDistanceDomN = parseInt(travelDistanceDom);
        const ageDom = document.getElementById ('age');
        //alert('I valori inseriti sono: ' + nameDom.value + ' e ' + travelDistanceDomN.value + ' e ' + ageDom.value);
        
        const priceForKm = 0.21;
        console.log('priceForKm is a ' + typeof priceForKm);

        let ticketPrice = priceForKm * travelDistanceDomN;
        let ticketPriceN = parseInt(ticketPrice);
        console.log('ticketPriceN is a ' + typeof ticketPriceN);

        alert('Il tuo nome è ' + nameDom.value + ', il costo del biglietto è ' + ticketPriceN.toFixed(2) + '€');

/*
        if (ageDom == '1') {
            ticketPrice = ticketPrice / 100 * 80;
        } else if (ageDom == '3') {
            ticketPrice = ticketPrice / 100 * 60;
        }  */


    }
);
