let homeCountEl = document.getElementById("home-count-el")
let guestCountEl = document.getElementById("guest-count-el")

let homeCount = 0
let guestCount = 0


function homeAdd1() {
    homeCount += 1
    homeCountEl.textContent = homeCount
}
function homeAdd2() {
    homeCount += 2
    homeCountEl.textContent = homeCount
}
function homeAdd3() {
    homeCount += 3
    homeCountEl.textContent = homeCount
}
//guest count
function guestAdd1() {
    guestCount += 1
   guestCountEl.textContent = guestCount
}
function guestAdd2() {
    guestCount += 2
    guestCountEl.textContent = guestCount
}
function guestAdd3() {
    guestCount += 3
    guestCountEl.textContent = guestCount
}

//reset
function reset(){
    guestCount = 0
    homeCount = 0
    guestCountEl.textContent = guestCount
    homeCountEl.textContent = homeCount
}