const buttun = document.querySelector('.button ').value;
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  console.log(email, password);
});
