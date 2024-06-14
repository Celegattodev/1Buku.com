document
  .querySelector('#submitButton')
  .addEventListener('click', () => validateSignUp(event))

function validateEmail(email) {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function validatePassword(password) {
  return password.match(
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/
  )
}

function validateSignUp(event) {
  event.preventDefault()

  const name = document.querySelector('#nameInput').value
  const email = document.querySelector('#emailInput').value
  const password = document.querySelector('#passwordInput').value
  const passwordConfirm = document.querySelector('#passwordConfirmInput').value

  if (name == '' || name == null) {
    alert('Informe o nome.')
  }

  if (!validateEmail(email)) {
    alert('Informe um e-mail válido.')
  }

  if (!validatePassword(password)) {
    alert(`Informe uma senha válida.
      A senha deve conter:
      - no minimo 8 caracteres
      - no minimo 1 caracter especial
      - no minimo 1 letra maiuscula
      - no minimo 1 letra minuscula
      - no minimo 1 numero`)
  }

  if (password !== passwordConfirm) {
    alert('As senhas devem ser iguais.')
  }
}
