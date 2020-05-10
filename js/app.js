const input = document.querySelector('.input');

const clearField = () => {
   input.value = '';
}

input.onload = clearField();