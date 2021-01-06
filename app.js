let pluseBtn = document.getElementById('pluse')
let minuseBtn = document.getElementById('minues')
// let numberSlot = []
// let numberTotal = []


function addNumber(numberTotal, numberSlot) {
   return pluseBtn + numberSlot
}
 addNumber(numberSlot + numberTotal)

function subNumber(numberTotal, numberSlot) {
    return minuseBtn - numberSlot
}
subNumbers(numberSlot - numberTotal)

pluseBtn.addEventListener('click', addNumber)
minuseBtn.addEventListener('click', subNumber)