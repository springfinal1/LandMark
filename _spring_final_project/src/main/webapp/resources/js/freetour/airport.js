
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






reservationBtn.forEach(e=>{
    e.addEventListener('click',()=>{
        reserH1.innerHTML=""
        depName.innerHTML = e.closest('div').dataset.airline;
        depTime.innerHTML = `${e.closest('div').dataset.schedule.substring(8,10)}`+" : "+`${e.closest('div').dataset.schedule.substring(10,12)}`;
        depAir.innerHTML =  `${startAirport.innerHTML} <i class="fa-solid fa-arrow-right"></i> `+ e.closest('div').dataset.airport;
    })
})
arrChoice.forEach(e=>{
    e.addEventListener('click',()=>{
        reserH1.innerHTML=""
        arrName.innerHTML = e.closest('div').dataset.airline;
        arrTime.innerHTML = `${e.closest('div').dataset.schedule.substring(8,10)}`+" : "+`${e.closest('div').dataset.schedule.substring(10,12)}`;
        arrAir.innerHTML =  e.closest('div').dataset.airport+" "+` <i class="fa-solid fa-arrow-right"></i> ${startAirport.innerHTML}`;
    })
})


let adult = document.querySelector('.adult');
let child = document.querySelector('.child');
let infant = document.querySelector('.infant');
let seat = document.querySelector('.seat');

