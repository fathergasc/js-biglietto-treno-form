/* const yearOfBirth = parseInt(prompt('Inserisci la tua data di nascita'));
console.log("yearOfBirth variable's type is " + typeof yearOfBirth);

const travelDistance = parseInt(prompt('Inserisci la distanza da percorrere in km'));
console.log("travelDistance variable's type is " + typeof yearOfBirth); */

const getDomValues = document.getElementById('get_values');


getDomValues.addEventListener('click', 
    function() {
        document.querySelector('.biglietto').classList.add('d_block');

        const nameDom = document.getElementById('name');
        const travelDistanceDom = document.getElementById('travel_distance').value;
        const ageDom = document.getElementById ('age').value;
        
        const priceForKm = 0.21;

        let ticketPrice = priceForKm * travelDistanceDom;

        const nomePasseggeroDom = document.getElementById('nomePasseggero');
        nomePasseggeroDom.innerHTML = nameDom.value;

        const offertaDom = document.getElementById('offerta');
        offertaDom.innerHTML = 'Offerta Standard';

        const prezzoDom = document.getElementById('prezzo');
        prezzoDom.innerHTML = ticketPrice.toFixed(2) + '€';

        let numeroCarrozza = Math.floor(Math.random() * 21) + 1;
        const carrozzaDom = document.getElementById('carrozza');
        carrozzaDom.innerHTML = numeroCarrozza;

        let numeroCp = Math.floor(Math.random() * 10000) + 90000;
        const codiceCpDom = document.getElementById('codiceCp');
        codiceCpDom.innerHTML = numeroCp;


        if (ageDom == 'underage') {
            ticketPrice = ticketPrice / 100 * 80;
            offertaDom.innerHTML = 'Sconto 20%';
            prezzoDom.innerHTML = ticketPrice.toFixed(2) + '€';
        } else if (ageDom == 'senior') {
            ticketPrice = ticketPrice / 100 * 60;
            offertaDom.innerHTML = 'Sconto 40%';
            prezzoDom.innerHTML = ticketPrice.toFixed(2) + '€';
        }
    }
);



const cancelDom = document.getElementById('cancel');

cancelDom.addEventListener('click',
    function() {
        document.querySelector('.biglietto').classList.remove('d_block');
        const nameDom = document.getElementById('name');
        const travelDistanceDom = document.getElementById('travel_distance');
        const ageDom = document.getElementById ('age');

        nameDom.value = '';
        travelDistanceDom.value = '';
        ageDom.value = '';
    }
)


