let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null

let prevEl;


// const single_digit=['Zero','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
// const double_underTwenty=['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
// const double_overTwenty=['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
// const higher_digits=['Thousand', 'Million', 'Billion', 'Trillion','Quadrillion','Quintillion','Sextillion','Septillion','Octillion','Nonillion','Decillion']

function updateDisplay(skipSlidingEl = false) {
  const display = document.getElementById('display')

  switch(displayValue){
    case '8675309':
      displayValue="Jenny"
    default:
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
    // addSlidingEl(displayValue,true)
    // addSlidingEl(displayValue,true)
  }
  // addSlidingEl(displayValue)
  display.innerText = displayValue
}

function addSlidingEl(num,isSolution=false){
  let newEl = document.createElement('p')
  if(isSolution){
    newEl.classList.add('backgroundText','animation_2')    
  }else{
    newEl.classList.add('backgroundText','animation_1')
  }
  newEl.textContent=num

  let newTop = Math.floor(Math.random() * 50) + '%';
  newEl.style.top=newTop
  if(isSolution){
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
  firstOperand = parseFloat(displayValue)
  currentOperator = operator
  displayValue = '0'
  addSlidingEl(currentOperator)
}

function calculate() {
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
}

function clearDisplay() {
  displayValue = '0'
  firstOperand = null
  secondOperand = null
  currentOperator = null
  updateDisplay()
}

updateDisplay()
