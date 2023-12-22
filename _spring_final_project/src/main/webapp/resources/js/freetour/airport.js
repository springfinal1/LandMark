
console.log('js in');

let reservationBtn = document.querySelectorAll('.reservation-btn');
let arrChoice = document.querySelectorAll('.arr-choice');
let depInfo = document.querySelector('.dep-info');
let arrInfo = document.querySelector('.arr-info');

let startAirport = document.querySelector('.startAirport');

let depName = document.querySelector('.depName');
let depTime = document.querySelector('.depTime');
let depAir = document.querySelector('.depAir');

let arrName = document.querySelector('.arrName') ;
let arrTime = document.querySelector('.arrTime');
let arrAir = document.querySelector('.arrAir');

let reserH1 = document.querySelector('.reser-h1');

let airlineArr = document.getElementById('airlineArr').value;
let flightIdArr = document.getElementById('flightIdArr').value;
let airlineDep = document.getElementById('airlineDep').value;
let flightIdDep = document.getElementById('flightIdDep').value;


let depAirLine = document.getElementById('depAirLine').innerHTML;
let depFlight = document.getElementById('depFlight').innerHTML;
let arrAirLine = document.getElementById('arrAirLine').innerHTML;
let arrFlight = document.getElementById('arrFlight').innerHTML;



let gateNumber = document.getElementById('gateNumber');
let arrGate = document.getElementById('arrGate');
reservationBtn.forEach(e=>{
    e.addEventListener('click',()=>{
        reserH1.innerHTML=""
        depName.innerHTML = e.closest('div').dataset.airline;
        depTime.innerHTML = `${e.closest('div').dataset.schedule.substring(8,10)}`+" : "+`${e.closest('div').dataset.schedule.substring(10,12)}`;
        depAir.innerHTML =  `${startAirport.innerHTML} <i class="fa-solid fa-arrow-right"></i> `+ e.closest('div').dataset.airport;
        airlineDep = depAirLine;
        flightIdDep = depFlight;
    })
})
arrChoice.forEach(e=>{
    e.addEventListener('click',()=>{
        reserH1.innerHTML=""
        arrName.innerHTML = e.closest('div').dataset.airline;
        arrTime.innerHTML = `${e.closest('div').dataset.schedule.substring(8,10)}`+" : "+`${e.closest('div').dataset.schedule.substring(10,12)}`;
        arrAir.innerHTML =  e.closest('div').dataset.airport+" "+` <i class="fa-solid fa-arrow-right"></i> ${startAirport.innerHTML}`;
        gateNumber.value = arrGate.value; 
        airlineArr = arrAirLine;
        flightIdArr = arrFlight;
    })
})


let adult = document.querySelector('.adult').innerHTML;
let child = document.querySelector('.child').innerHTML;
let infant = document.querySelector('.infant').innerHTML;
let seat = document.querySelector('.seat').innerHTML;


let pepCnt = document.querySelector('.pep-cnt');


