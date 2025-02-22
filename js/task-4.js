const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const pass = event.target.elements.password.value;

  if (email.trim() === '' || pass.trim() === '') {
    alert('All form fields must be filled in');
  }

  const formData = {
    email: email.trim(),
    password: pass.trim(),
  };
  console.log(formData);
  form.reset();
}
