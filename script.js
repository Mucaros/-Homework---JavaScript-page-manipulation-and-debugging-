const body = document.querySelector('body')
const section1 = document.querySelector('.section1')

const splitInput = document.createElement('input')
const splitButton = document.createElement('button')
splitButton.textContent = 'split'
section1.append(splitInput)
section1.append(splitButton)

splitButton.addEventListener('click', () => {

    const splitArray = splitInput.value.split('\\n')
    

    const result = document.createElement('p')
    result.textContent = splitArray
    section1.append(result)
})

