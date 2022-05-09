const bodyContainer = document.createElement('div')
bodyContainer.setAttribute('class', 'bodyContainer')
document.body.appendChild(bodyContainer)

const calculatorContainer = document.createElement('div')
calculatorContainer.classList.add('calculatorContainer')
bodyContainer.appendChild(calculatorContainer)


const topCalculatorContainer = document.createElement('div')
topCalculatorContainer.classList.add('topCalculatorContainer')
calculatorContainer.appendChild(topCalculatorContainer)

const botCalculatorContainer = document.createElement('div')
botCalculatorContainer.classList.add('botCalculatorContainer')
calculatorContainer.appendChild(botCalculatorContainer)

const botButtonsContainer = document.createElement('div')
botButtonsContainer.classList.add('botButtonContainer')
botCalculatorContainer.appendChild(botButtonsContainer)

let calculationScreen = document.createElement('div')
calculationScreen.classList.add('calculation')
calculationScreen.textContent = '0'
topCalculatorContainer.appendChild(calculationScreen)

let createScreen = document.createElement('div')
createScreen.classList.add('screen')
createScreen.textContent = 0
topCalculatorContainer.appendChild(createScreen)

let createBotDivs = () => {
    for (let x = 0; x < 20; x++){
        let newDiv = document.createElement('div')
        newDiv.classList.add('buttonDivs')
        newDiv.setAttribute('id',`div${x}`)
        botButtonsContainer.appendChild(newDiv)
        botButtonsContainer.style.gridTemplateColumns = `repeat(${4}, 1fr)`

        let newBtns = document.createElement('button')
        newBtns.classList.add('buttons')
        newBtns.setAttribute('id', `btn${x}`)
        let curDiv = document.querySelector(`[id=div${x}]`)
        curDiv.appendChild(newBtns)
    }

}

createBotDivs()


let btn0 = document.querySelector('[id=btn16]')
btn0.textContent = '0'
btn0.style.background = '#FFFFFF'
//btn0.addEventListener('click', () => {
    //btn0.style.transform ='scale(0.98)'
    //let btn0Div = document.querySelector('[id=div12]')
    //btn0Div.style.transform='scale(0.98)'
//})
let btn1 = document.querySelector('[id=btn12]')
btn1.textContent = 1
btn1.style.background = '#FFFFFF'

let btn2 = document.querySelector('[id=btn13]')
btn2.textContent = 2
btn2.style.background = '#FFFFFF'

let btn3 = document.querySelector('[id=btn14]')
btn3.textContent = 3
btn3.style.background = '#FFFFFF'

let btn4 = document.querySelector('[id=btn8]')
btn4.textContent = 4
btn4.style.background = '#FFFFFF'

let btn5 = document.querySelector('[id=btn9]')
btn5.textContent = 5
btn5.style.background = '#FFFFFF'

let btn6 = document.querySelector('[id=btn10]')
btn6.textContent = 6
btn6.style.background = '#FFFFFF'

let btn7 = document.querySelector('[id=btn4]')
btn7.textContent = 7
btn7.style.background = '#FFFFFF'

let btn8 = document.querySelector('[id=btn5]')
btn8.textContent = 8
btn8.style.background = '#FFFFFF'

let btn9 = document.querySelector('[id=btn6]')
btn9.textContent = 9
btn9.style.background = '#FFFFFF'

let btnOpenBracket = document.querySelector('[id=btn0]')
btnOpenBracket.textContent = '('

let btnCloseBracket = document.querySelector('[id=btn1]')
btnCloseBracket.textContent = ')'

let btnBKSPC = document.querySelector('[id=btn2]')
btnBKSPC.textContent = 'BKSPC'
btnBKSPC.classList.add('BKSPC')

let btnClear = document.querySelector('[id=btn3]')
btnClear.textContent = 'AC'

let btnDivide = document.querySelector('[id=btn7]')
btnDivide.textContent = '÷'

let btnMultiply = document.querySelector('[id=btn11]')
btnMultiply.textContent = 'x'

let btnAdd = document.querySelector('[id=btn19]')
btnAdd.textContent = '+'

let btnSubtract = document.querySelector('[id=btn15]')
btnSubtract.textContent = '-'

let btnEqual = document.querySelector('[id=btn18]')
btnEqual.textContent = '='
btnEqual.style.background = '#ADD8E6'

let btnDecimal = document.querySelector('[id=btn17]')
btnDecimal.textContent = '.'
btnDecimal.style.background = '#FFFFFF'

let formulaArray =[]

let calculatorParser = (formula) => {
    let divCount = 0
    let mCount = 0
    let sCount = 0
    let aCount = 0
    parsedFormula = formula
    console.log(parsedFormula)
    parsedFormula.forEach(element => {
        
        if (element == '÷') {
            divCount += 1
        }
        else if (element == 'x'){
            mCount += 1
        }
        else if (element == '-') {
            sCount += 1
        }
        else if (element == '+') {
            aCount +=1
        }
    })
    console.log('div count', divCount)
    while (divCount > 0){
        dIndex = parsedFormula.indexOf('÷')
        console.log('div index', dIndex)
        console.log(parsedFormula[dIndex-1])
        let result = `${Number(parsedFormula[dIndex-1]) / Number(parsedFormula[dIndex+1])}`
        console.log('result', result)
        parsedFormula[dIndex] = result
        divCount -= 1
        parsedFormula.splice(dIndex-1, 1)
        parsedFormula.splice(dIndex, 1)
        

    }
    console.log(parsedFormula)
    while (mCount > 0) {
        mIndex = parsedFormula.indexOf('x')
        console.log('m index', mIndex)
        let mResult = `${Number(parsedFormula[mIndex-1]) * Number(parsedFormula[mIndex+1])}`
        console.log('mresult', mResult)
        parsedFormula[mIndex] = mResult
        mCount -= 1
        parsedFormula.splice(mIndex-1, 1)
        parsedFormula.splice(mIndex, 1)
    }
    console.log(parsedFormula)
    while (sCount > 0) {
        sIndex = parsedFormula.indexOf('-')
        console.log('s index', sIndex)
        let sResult = `${Number(parsedFormula[sIndex-1]) - Number(parsedFormula[sIndex+1])}`
        console.log('sresult', sResult)
        parsedFormula[sIndex] = sResult
        sCount -= 1
        parsedFormula.splice(sIndex-1, 1)
        parsedFormula.splice(sIndex, 1)
    }
    console.log(parsedFormula)
    while (aCount > 0) {
        aIndex = parsedFormula.indexOf('+')
        console.log('add index', aIndex)
        let aResult = `${Number(parsedFormula[aIndex-1]) + Number(parsedFormula[aIndex+1])}`
        console.log('Addresult', aResult)
        parsedFormula[aIndex] = aResult
        aCount -= 1
        parsedFormula.splice(aIndex-1, 1)
        parsedFormula.splice(aIndex, 1)
    }
    console.log(parsedFormula)
    if (parsedFormula[0].length > 16 && parsedFormula[0].includes('.') ) {
        console.log('more than 16 digits')
        parsedFormula[0] = Math.round(parsedFormula[0] * 100) / 100
    } else if (parsedFormula[0] == 'NaN'){
        parsedFormula[0] = 'ERROR'
    }
    return parsedFormula[0]
}

let newCalc = false
let cInput = 0



let AllBtns = document.querySelectorAll('.buttons')
AllBtns.forEach(element => {
    element.addEventListener('click', () => {
        let txtC = element.textContent
        console.log(txtC, typeof(txtC), isNaN(txtC))
        if (isNaN(txtC) == false){
            if (createScreen.textContent === '0' || newCalc === true) {
                createScreen.textContent = txtC
                cInput = txtC
                console.log('new calc1', formulaArray)
                formulaArray =[]
                newCalc = false
            } else{
                createScreen.textContent += txtC
                cInput += txtC
            }
            
        } else if (isNaN(txtC) == true) {
            if (txtC != '.'){
                btnDecimal.disabled = false
            }
            if (txtC == 'AC'){
                formulaArray = []
                createScreen.textContent = 0
            } else if (txtC === '=') {
                let formula = createScreen.textContent
                let lastInput = formula.split(/[x+\-÷]/gm)
                formulaArray.push(lastInput.at(-1))
                console.log('formula & lastinput', formula, lastInput)
                console.log('farray',formulaArray)
                calculationScreen.textContent = formula + '='
                createScreen.textContent = calculatorParser(formulaArray)
                newCalc = true
                formula = ''
                if (createScreen.textContent.includes('.')) {
                    btnDecimal.disabled = true
                }
                
        
            }else if (txtC === 'BKSPC') {
                
                if (createScreen.textContent.length > 1) {
                    createScreen.textContent = createScreen.textContent.slice(0, -1)
                    cInput = cInput.slice(0, -1)
                    formulaArray.pop()
                } else if (createScreen.textContent.length == 1) {
                    createScreen.textContent = '0'
                    formulaArray.pop()
                }
            
            }else if (txtC === '.'){
                if (createScreen.textContent === '0' || newCalc === true) {
                    createScreen.textContent += txtC
                    cInput = createScreen.textContent
                    console.log('dot used', formulaArray, cInput)
                    formulaArray =[]
                    newCalc = false
                    btnDecimal.disabled = true
                } else {
                    createScreen.textContent += txtC
                    cInput += txtC
                    btnDecimal.disabled = true
                }

            } 
            
            else {
                if (newCalc == true && txtC != '.'){
                    formulaArray = []
                    cInput = ''
                    formulaArray.push(createScreen.textContent)
                    createScreen.textContent += txtC
                    formulaArray.push(txtC)
                    
                    newCalc = false
                } else {
                    console.log('c input:', cInput, formulaArray)
                    formulaArray.push(cInput)
                    console.log('2nd cinp', cInput)
                
                    cInput = ''
                    createScreen.textContent += txtC
                    formulaArray.push(txtC)

                console.table(formulaArray)

                }
                
                
            }
        }
        console.log(createScreen.textContent.length)
        if (createScreen.textContent.length > 16 && createScreen.textContent.length < 20) {
            
            createScreen.classList.replace('screen','smallerFontScreen')
        } else if (createScreen.textContent.length > 20) {
            createScreen.classList.replace('smallerFontScreen', 'smallestFontScreen')
        }       
        else if (createScreen.textContent.length < 16) {
            createScreen.setAttribute('class', 'screen')
        }
    })
});

document.addEventListener('keypress', event => {
        if (event.key === '1') {
            console.log('1 pressed');
            btn1.click()
            btn1.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn1.classList.remove('keypress')
            })
        } else if (event.key === '2'){
            btn2.click()
            btn2.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn2.classList.remove('keypress')
            })
        } else if (event.key === '3') {
            btn3.click()
            btn3.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn3.classList.remove('keypress')
            })
        } else if (event.key === '4') {
            btn4.click()
            btn4.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn4.classList.remove('keypress')
            })
        } else if (event.key === '5') {
            btn5.click()
            btn5.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn5.classList.remove('keypress')
            })
        } else if (event.key === '6') {
            btn6.click()
            btn6.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn6.classList.remove('keypress')
            })
        } else if (event.key === '7') {
            btn7.click()
            btn7.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn7.classList.remove('keypress')
            })
        } else if (event.key === '8') {
            btn8.click()
            btn8.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn8.classList.remove('keypress')
            })
        } else if (event.key === '9') {
            btn9.click()
            btn9.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn9.classList.remove('keypress')
            })
        } else if (event.key === '0') {
            btn0.click()
            btn0.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btn0.classList.remove('keypress')
            })
        } else if (event.key === '+') {
            btnAdd.click()
            btnAdd.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btnAdd.classList.remove('keypress')
            })
        } else if (event.key === '-') {
            btnSubtract.click()
            btnSubtract.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btnSubtract.classList.remove('keypress')
            })
        } else if (event.key === '/') {
            btnDivide.click()
            btnDivide.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btnDivide.classList.remove('keypress')
            })
        } else if (event.key === '*') {
            btnMultiply.click()
            btnMultiply.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btnMultiply.classList.remove('keypress')
            })
        } else if (event.key === '=' || event.key === 'Enter') {
            event.preventDefault()
            btnEqual.click()
            btnEqual.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btnEqual.classList.remove('keypress')
            })
        } else if (event.key === '.') {
            btnDecimal.click()
            btnDecimal.classList.add('keypress')
            document.addEventListener('keyup', () => {
                btnDecimal.classList.remove('keypress')
            })
        }
        
    })
