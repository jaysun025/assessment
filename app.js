const pluseBtn = document.getElementById('pluse')
const minuseBtn = document.getElementById('minues')
const numberSlot = document.getElementById('numberSlot')

let numberTotal = 0

pluseBtn.addEventListener('click', addNumber)
minuseBtn.addEventListener('click', subNumber)


function addNumber() {
   console.log(numberSlot.value)
   let fromString = parseInt(numberSlot.value)
   numberTotal = numberTotal + fromString
   document.getElementById(numberTotal)
   console.log(numberTotal)
   updateCount()
}


function subNumber() {
   let fromString = parseInt(numberSlot.value)
   numberTotal = numberTotal - fromString
   document.getElementById(numberTotal)
   console.log(numberTotal)
   updateCount()
}


function updateCount(){
   display.innerText = numberTotal
}



