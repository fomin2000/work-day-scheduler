var currentDay = document.getElementById('currentDay')

// hour block elements
var hour9 = document.querySelector('.hour9').textContent
var hour10 = document.querySelector('.hour10').textContent
var hour11 = document.querySelector('.hour11').textContent
var hour12 = document.querySelector('.hour12').textContent
var hour13 = document.querySelector('.hour13').textContent
var hour14 = document.querySelector('.hour14').textContent
var hour15 = document.querySelector('.hour15').textContent
var hour16 = document.querySelector('.hour16').textContent
var hour17 = document.querySelector('.hour17').textContent

// hour block textarea
var ta1 = document.getElementById('ta1')
var ta2 = document.getElementById('ta2')
var ta3 = document.getElementById('ta3')
var ta4 = document.getElementById('ta4')
var ta5 = document.getElementById('ta5')
var ta6 = document.getElementById('ta6')
var ta7 = document.getElementById('ta7')
var ta8 = document.getElementById('ta8')
var ta9 = document.getElementById('ta9')



var getDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
var getTime = moment().hour()

console.log(hour16)


currentDay.textContent = getDate






// functions



function setColorBlock1() {
    if (hour9 < getTime) {
        ta1.classList.add('past')
    } else if (hour9 == getTime) {
        ta1.classList.add('present')
    } else if (hour9 > getTime) {
        ta1.classList.add('future')
    }
}

function setColorBlock2() {
    if (hour10 < getTime) {
        ta2.classList.add('past')
    } else if (hour10 == getTime) {
        ta2.classList.add('present')
    } else if (hour10 > getTime) {
        ta2.classList.add('future')
    }
}

function setColorBlock3() {
    if (hour11 < getTime) {
        ta3.classList.add('past')
    } else if (hour11 == getTime) {
        ta3.classList.add('present')
    } else if (hour11 > getTime) {
        ta3.classList.add('future')
    }
}

function setColorBlock4() {
    if (hour12 < getTime) {
        ta4.classList.add('past')
    } else if (hour12 == getTime) {
        ta4.classList.add('present')
    } else if (hour12 > getTime) {
        ta4.classList.add('future')
    }
}

function setColorBlock5() {
    if (hour13 < getTime) {
        ta5.classList.add('past')
    } else if (hour13 == getTime) {
        ta5.classList.add('present')
    } else if (hour13 > getTime) {
        ta5.classList.add('future')
    }
}

function setColorBlock6() {
    if (hour14 < getTime) {
        ta6.classList.add('past')
    } else if (hour14 == getTime) {
        ta6.classList.add('present')
    } else if (hour14 > getTime) {
        ta6.classList.add('future')
    }
}

function setColorBlock7() {
    if (hour15 < getTime) {
        ta7.classList.add('past')
    } else if (hour15 == getTime) {
        ta7.classList.add('present')
    } else if (hour15 > getTime) {
        ta7.classList.add('future')
    }
}

function setColorBlock8() {
    if (hour16 < getTime) {
        ta8.classList.add('past')
    } else if (hour16 == getTime) {
        ta8.classList.add('present')
    } else if (hour16 > getTime) {
        ta8.classList.add('future')
    }
}

function setColorBlock9() {
    if (hour17 < getTime) {
        ta9.classList.add('past')
    } else if (hour17 == getTime) {
        ta9.classList.add('present')
    } else if (hour17 > getTime) {
        ta9.classList.add('future')
    }
}


// Function Callers
setColorBlock1()
setColorBlock2()
setColorBlock3()
setColorBlock4()
setColorBlock5()
setColorBlock6()
setColorBlock7()
setColorBlock8()
setColorBlock9()


// Event Listeners