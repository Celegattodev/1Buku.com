document
  .querySelector('#submitButton')
  .addEventListener('click', () => validateLogin(event))

function validateEmail(email) {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

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
