import { validateEmail } from './validateEmailAndPassword.js'

document
  .querySelector('#submitButton')
  .addEventListener('click', () => validateSendMessage(event))

function validateSendMessage(event) {
  event.preventDefault()

  const name = document.querySelector('#nameInput').value
  const email = document.querySelector('#emailInput').value
  const message = document.querySelector('#messageInput').value

  console.log(name, email, message)

  if (name == '' || name == null) {
    alert('Informe o nome.')
  }

  if (!validateEmail(email)) {
    alert('Informe um e-mail válido.')
  }

  if (message == '' || message == null) {
    alert('Informe a mensagem.')
  }
}
