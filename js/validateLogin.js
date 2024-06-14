import { validateEmail } from './validateEmailAndPassword.js'

document
  .querySelector('#submitButton')
  .addEventListener('click', () => validateLogin(event))

function validateLogin(event) {
  event.preventDefault()

  const email = document.querySelector('#emailInput').value
  const password = document.querySelector('#passwordInput').value

  if (!validateEmail(email)) {
    alert('Informe um e-mail válido.')
  }

  if (password == '' || password == null) {
    alert('Informe a senha.')
  }
}
