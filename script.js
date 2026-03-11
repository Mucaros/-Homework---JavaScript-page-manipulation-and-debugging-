const body = document.querySelector('body')


const splitInput = document.createElement('input')
const splitButton = document.createElement('button')
splitButton.textContent = 'split'
body.append(splitInput)
body.append(splitButton)

splitButton.addEventListener('click', () => {

    const splitArray = splitInput.value.split('\\n')
    

    const result = document.createElement('p')
    result.textContent = splitArray
    body.append(result)
})

