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

let createScreen = document.createElement('div')
createScreen.classList.add('screen')
createScreen.textContent = '0'
topCalculatorContainer.appendChild(createScreen)

let createBotDivs = () => {
    for (let x = 0; x < 16; x++){
        let newDiv = document.createElement('div')
        newDiv.classList.add('buttons')
        newDiv.setAttribute('id',`div${x}`)
        botButtonsContainer.appendChild(newDiv)
        botButtonsContainer.style.gridTemplateColumns = `repeat(${4}, 1fr)`
    }

}

createBotDivs()
