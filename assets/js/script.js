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

// buttons
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var btn7 = document.getElementById('btn7')
var btn8 = document.getElementById('btn8')
var btn9 = document.getElementById('btn9')

var clearEventBtn = document.getElementById('clearEvents')

var getDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
var getTime = moment().hour()



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



function saveInfo1(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo1', ta1.value)
}

function saveInfo2(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo2', ta2.value)
}

function saveInfo3(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo3', ta3.value)
}

function saveInfo4(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo4', ta4.value)
}

function saveInfo5(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo5', ta5.value)
}

function saveInfo6(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo6', ta6.value)
}

function saveInfo7(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo7', ta7.value)
}

function saveInfo8(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo8', ta8.value)
}

function saveInfo9(event) {
    event.preventDefault()

    localStorage.setItem('savedInfo9', ta9.value)
}




function renderInfo() {
    var savedInfo1 = localStorage.getItem('savedInfo1')
    var savedInfo2 = localStorage.getItem('savedInfo2')
    var savedInfo3 = localStorage.getItem('savedInfo3')
    var savedInfo4 = localStorage.getItem('savedInfo4')
    var savedInfo5 = localStorage.getItem('savedInfo5')
    var savedInfo6 = localStorage.getItem('savedInfo6')
    var savedInfo7 = localStorage.getItem('savedInfo7')
    var savedInfo8 = localStorage.getItem('savedInfo8')
    var savedInfo9 = localStorage.getItem('savedInfo9')

    ta1.textContent = savedInfo1
    ta2.textContent = savedInfo2
    ta3.textContent = savedInfo3
    ta4.textContent = savedInfo4
    ta5.textContent = savedInfo5
    ta6.textContent = savedInfo6
    ta7.textContent = savedInfo7
    ta8.textContent = savedInfo8
    ta9.textContent = savedInfo9
}

renderInfo()

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
btn1.addEventListener('click', saveInfo1)
btn2.addEventListener('click', saveInfo2)
btn3.addEventListener('click', saveInfo3)
btn4.addEventListener('click', saveInfo4)
btn5.addEventListener('click', saveInfo5)
btn6.addEventListener('click', saveInfo6)
btn7.addEventListener('click', saveInfo7)
btn8.addEventListener('click', saveInfo8)
btn9.addEventListener('click', saveInfo9)

clearEventBtn.addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.clear()

    ta1.textContent = ''
    ta2.textContent = ''
    ta3.textContent = ''
    ta4.textContent = ''
    ta5.textContent = ''
    ta6.textContent = ''
    ta7.textContent = ''
    ta8.textContent = ''
    ta9.textContent = ''
})