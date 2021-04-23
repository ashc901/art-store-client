const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#message').text("Account successfully created.")
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Logged in.')
  $('#sign-in').trigger('reset')
  $('.signed-in').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onShowChangePassword = function () {
  $('.modal').modal('show')
}

const onChangePasswordSuccess = function (){

  $('#message').text("Password successfully changed." )
  $('#change-password').trigger('reset')
  $('.modal').modal('hide')
}

const onSignOutSuccess = function () {
  $('#message').text("Signed out.")
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  store.user = null
}


module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onShowChangePassword,
  onSignOutSuccess
}
