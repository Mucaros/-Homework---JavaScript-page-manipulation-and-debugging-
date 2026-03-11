// 1 a)

const body = document.querySelector('body')
const section1 = document.querySelector('.section1')

const splitInput = document.createElement('input')
const splitButton = document.createElement('button')
splitButton.textContent = 'split newline'
section1.append(splitInput)
section1.append(splitButton)

splitButton.addEventListener('click', () => {
    const splitArray = splitInput.value.split('\\n')

    const result = document.createElement('p')
    result.textContent = splitArray
    section1.append(result)
})



// 1 b)
const section2 = document.createElement('section')
body.append(section2)

const splitCommaInput = document.createElement('input')
const splitCommaButton = document.createElement('button')
splitCommaButton.textContent = 'split comma'
section2.append(splitCommaInput)
section2.append(splitCommaButton)

splitCommaButton.addEventListener('click', () => {
    const splitArray = splitCommaInput.value.replace(/[\[\]\/"]/g, '').split(',')

    const result = document.createElement('p')
    result.textContent = splitArray
    section2.append(result)
})