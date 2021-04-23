const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

//sign up
const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  //get rid on this console log later
  console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

//sign in
const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}


//change password
const onChangePassword = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

//sign out
const onSignOut = function(event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  //onShowChangePassword,
  onChangePassword,
  onSignOut
}
