let input = document.querySelector('.likharJayga')
let button = document.querySelector('.button')
let output = document.querySelector('.output')







button.addEventListener('click', () => {
    if (input.value =='') {
        alert('are you stupid or something ? Without any number what should we calculate ?')
    } else{ for (let k = 1; k < 11; k++) {
            output.innerHTML += input.value + ' x ' + k + ' = ' + input.value * k + '<br>'
        }
    }
})