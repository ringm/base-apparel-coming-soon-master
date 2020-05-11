const submitBtn = document.querySelector('.submit-btn');
const field = document.querySelector(".field");
const input = field.children[0];
const alertIcon = field.children[1];
const alertMsg = field.children[2];
const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

const clearField = () => {
   input.value = '';
}

input.onload = clearField();
console.log(submitBtn);

submitBtn.addEventListener('click', (e) => {

   e.preventDefault();

   if (input.value == '') {

      input.style.border = '2px solid red';
      alertMsg.textContent = 'This field cannot be empty';
      alertIcon.classList.remove('hidden');
      alertMsg.classList.remove('hidden');

   } else if (!reg.test(input.value)) {
      input.style.border = '2px solid red';
      alertIcon.classList.remove('hidden');
      alertMsg.textContent = 'Please provide a valid email';
      alertMsg.classList.remove('hidden');
   } else {
      alertIcon.classList.add('hidden');
      alertMsg.classList.add('hidden');
      input.style.border = '1px solid hsl(0, 36%, 70%)';
   }

});