let pluseBtn = document.getElementById('pluse')
let minuseBtn = document.getElementById('minues')
let numberSlot = 0
let numberTotal = 0

pluseBtn.addEventListener('click', addNumber)
minuseBtn.addEventListener('click', subNumber)

function addNumber(numberSlot, numberTotal) {
   total = numberSlot + numberTotal
   document.getElementById(numberTotal)
   console.log('yea')
}
 addNumber(numberSlot + numberTotal)

function subNumber(numberSlot, numberTotal) {
    total = numberSlot - numberTotal
    document.getElementById(numberTotal)
    console.log('no')
}

console.log('fuck me')
