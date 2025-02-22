const inputName = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
inputName.addEventListener('input', enterName);

function enterName(event) {
  const input = event.currentTarget;

  userName.textContent = input.value.trim() || 'Anonymous';
}