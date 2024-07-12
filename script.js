let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null
let prevEl;
let hitCalculate=false

function updateDisplay(skipSlidingEl = false) {
  // const display = document.getElementById('display')
  const displayNums = document.getElementById('displayNums')
  displayValue=displayValue.replaceAll(',', '')

  switch(displayValue){
    case '8675309':
      displayValue="Jenny"
    default:
  }
  if(displayValue.length>10){
    displayValue=displayValue.substring(0,10)
    addSlidingEl('Too Long',true)
  }
  displayValue=numberWithCommas(displayValue)
  if(!skipSlidingEl){
    if(displayValue*1===0){
      addSlidingEl('Cleared')
    }else{
      addSlidingEl(displayValue.substring(displayValue.length-1,displayValue.length))
    }
  }else{
    addSlidingEl(displayValue,true)
  }
  displayNums.textContent=displayValue
}

function addSlidingEl(num,isSlow=false){
  let newEl = document.createElement('p')
  let newTop
  if(isSlow){
    newEl.classList.add('flyingText','animation_2')
    newTop= '10%'
  }else{
    newEl.classList.add('flyingText','animation_1')
    newTop= Math.floor((Math.random() * 75)-2.5) + '%';
  }
  newEl.textContent=num
  newEl.style.top=newTop
  if(isSlow){
    console.log(newEl.style.height)
    newEl.style.fontWeight='900' ;

  }
  if(prevEl){
    removeEl(prevEl)
  }
  document.body.append(newEl)
  prevEl=newEl
}

function removeEl(El){
  setTimeout(()=>{
    El.remove()
  },3000)
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function appendNumber(number) {
  if(hitCalculate){
    hitCalculate=!hitCalculate
    displayValue=''
  }
  if (displayValue === '0') {
    displayValue = number.toString()
  } else {
    displayValue += number.toString()
  }
  updateDisplay()
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate()
  }
  displayValue=displayValue.replaceAll(',', '')
  firstOperand = parseFloat(displayValue)
  currentOperator = operator
  displayValue = '0'
  addSlidingEl(currentOperator)
}

function calculate() {
  displayValue=displayValue.replaceAll(',', '')
  secondOperand = parseFloat(displayValue)
  if (currentOperator === '+') {
    displayValue = (firstOperand + secondOperand).toString()
  } else if (currentOperator === '-') {
    displayValue = (firstOperand - secondOperand).toString()
  } else if (currentOperator === '*') {
    displayValue = (firstOperand * secondOperand).toString()
  } else if (currentOperator === '/') {
    displayValue = (firstOperand / secondOperand).toString()
  }
  // addSlidingEl(displayValue,true)
  updateDisplay(true)
  firstOperand = null
  secondOperand = null
  currentOperator = null
  hitCalculate=true
}

function clearDisplay() {
  displayValue = '0'
  firstOperand = null
  secondOperand = null
  currentOperator = null
  updateDisplay()
}

updateDisplay()
