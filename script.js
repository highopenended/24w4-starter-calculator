let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null

let prevEl;


// const single_digit=['Zero','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
// const double_underTwenty=['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
// const double_overTwenty=['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
// const higher_digits=['Thousand', 'Million', 'Billion', 'Trillion','Quadrillion','Quintillion','Sextillion','Septillion','Octillion','Nonillion','Decillion']

function updateDisplay() {
  const display = document.getElementById('display')

  switch(displayValue){
    case '8675309':
      displayValue="Jenny"
    default:
  }
  addSlidingEl(displayValue.substring(displayValue.length-1,displayValue.length))
  // addSlidingEl(displayValue)
  console.log(getTriples(displayValue))
  display.innerText = displayValue
}

function addSlidingEl(num){
  let newEl = document.createElement('p')
  newEl.classList.add('backgroundText','animation_1')
  newEl.textContent=num

  let newTop = Math.floor(Math.random() * 50) + '%';
  console.log(newTop)
  newEl.style.top=newTop
  if(prevEl){
    removeEl(prevEl)
  }
  document.body.append(newEl)
  prevEl=newEl
}

function removeEl(El){
  setTimeout(()=>{
    El.remove()
    console.log('done')
  },2000)
}






function getNumberWordArr(num){
  let arrTriples = getTriples(num)
  let arrTripleWords = getTripleWords(arrTriples)
  let hDigitWords=[]
  let arrTripleWordsFinal =[]

  for (let i = 0; i < arrTripleWords.length; i++) {
    if(i>0){
      hDigitWords.push(higher_digits[i-1])
    }
  }
  hDigitWords.reverse()

  for (let i = 0; i < arrTripleWords.length; i++) {
    if(i<arrTripleWords.length-1){
      arrTripleWordsFinal.push(`${arrTripleWords[i]}-${hDigitWords[i]}`)
    }else{
      arrTripleWordsFinal.push(`${arrTripleWords[i]}`)
    }
  }
  return arrTripleWordsFinal.join("\n")
  
  function getTripleWords(arr){
    let returnArr=[]    
    arr.map(triple=>{
      const myNum=triple*1
      switch (myNum.toString().length){
        case 1: returnArr.push(getOneDigit(triple));break;
        case 2: returnArr.push(getTwoDigit(triple));break;
        case 3: returnArr.push(getThreeDigit(triple));break;
      }
    })

    console.log('ReturnArr: ', returnArr)
    return returnArr

    //  Returns a ONE digit number in text format
    function getOneDigit(triple){return single_digit[triple[2]]}

    //  Returns a TWO digit number in text format
    function getTwoDigit(triple){
      const dub=[triple[1],triple[2]].join('')*1
      if(dub<10){
        return `${single_digit[triple[2]]}`
      }else if(dub<20){
        return `${double_underTwenty[triple[2]]}`
      }else{    
        return `${double_overTwenty[triple[1]-2]}-${single_digit[triple[2]]}`
      }
    }

    //  Returns a THREE digit number in text format
    function getThreeDigit(triple){
      const myNum=triple*1
      let s1=`${single_digit[triple[0]]}-Hundred `
      let s2=getTwoDigit(triple)
      return `${s1} and ${s2}`
    }
  }
}

// Groups of 3 single-digit numbers (58 would be [0,5,8])
function getTriples(num){
  let returnArr=[]
  let remainder=num.length%3
  let numArr =[]
  if(remainder!==0){
    for (let i = 0; i < 3-remainder; i++) {
      numArr.push('0')
    }
  }
  for (let i = 0; i < num.length; i++) {
    numArr.push(num.substring(i,i+1))
  }
  for (let i = 0; i < numArr.length/3; i++) {
    const startIdx=i*3
    const tArr=[numArr[startIdx],numArr[startIdx+1],numArr[startIdx+2]]
    returnArr.push(tArr.join(''))
  }
  return returnArr
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
  updateDisplay()
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
