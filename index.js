const christmas = document.querySelector('#christmas');
const newYear = document.querySelector('#new-year');
const easter = document.querySelector('#easter');
const thanksgiving = document.querySelector('#thanksgiving');
const mothersDay = document.querySelector('#mothers-day');
const fathersDay = document.querySelector('#fathers-day');
const valentines = document.querySelector('#valentines');
const content = document.querySelector("#content");
let work;


christmas.addEventListener('click', () => {
    clearInterval(work);
    work = setInterval(function(){
        let year = new Date().getFullYear();
        let difference = (Number(new Date(year, 11, 25)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        if(difference < 0){
            difference = (Number(new Date(year + 1, 03, 09)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        }
        getRemainder(difference);
    },1000);
})

newYear.addEventListener('click', () => {
    clearInterval(work);
    work = setInterval(function(){
        let year = new Date().getFullYear();
        let difference = (Number(new Date(year + 1, 00, 01)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        getRemainder(difference);
    },1000);
})

easter.addEventListener('click', () => {
    clearInterval(work);
    work = setInterval(function(){
        let year = new Date().getFullYear();
        let difference = (Number(new Date(year, 03, 09)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        if(difference < 0){
            difference = (Number(new Date(year + 1, 03, 09)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        }
        getRemainder(difference);
    },1000);
})

thanksgiving.addEventListener('click', () => {
    clearInterval(work);
    work = setInterval(function(){
        let year = new Date().getFullYear();
        let difference = (Number(new Date(year, 10, 24)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        // if(difference < 0){
            // difference = (Number(new Date(year + 1, 10, 24)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        // }
        getRemainder(difference);
    },1000);
})

mothersDay.addEventListener('click', () => {
    clearInterval(work);
    work = setInterval(function(){
        let year = new Date().getFullYear();
        let difference = (Number(new Date(year + 1, 04, 14)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        // if(difference < 0){
            // difference = (Number(new Date(year + 1, 10, 24)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        // }
        getRemainder(difference);
    },1000);
})

fathersDay.addEventListener('click', () => {
    clearInterval(work);
    work = setInterval(function(){
        let year = new Date().getFullYear();
        let difference = (Number(new Date(year + 1, 05, 18)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        // if(difference < 0){
            // difference = (Number(new Date(year + 1, 03, 09)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        // }
        getRemainder(difference);
    },1000);
})

valentines.onclick = () => {
    clearInterval(work);
    work = setInterval(function(){
        let year = new Date().getFullYear();
        let difference = (Number(new Date(year, 01, 14)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        if(difference < 0){
            difference = (Number(new Date(year + 1, 01, 14)) - Number(new Date())) / (1000 * 60 * 60 * 24);
        }
        getRemainder(difference);

    },1000);
    // valentines.removeEventListener();
}
// valentines.removeEventListener('click', valentines);

function getRemainder(difference) {
    
    let days = Math.floor(difference)
    let hours = (difference - days) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;

    content.innerHTML = `${days} day${days === 1 ? '' : 's'} 
    </br> ${Math.floor(hours)} hour${Math.floor(hours) === 1 ? '': 's'} 
    </br> ${Math.floor(minutes)} minute${Math.floor(minutes) === 1 ? '' : 's'} 
    </br> ${Math.floor(seconds)} second${Math.floor(seconds) === 1 ? '' : 's'}`;
    
    
}
