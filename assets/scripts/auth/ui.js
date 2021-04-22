const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#message').text("Account successfully created.")
}

// const onSignInSuccess = function (response) {
//   store.user = response.user
//   $('#message').text('Woowoo! You logged in!')
//   $('#sign-in').trigger('reset')
//   $('.signed-in').show()
//   $('#sign-out').show()
//   $('#sign-up').hide()
//   $('#sign-in').hide()
//   $('.etc').hide()
//   $('.game').show()
//   $('#sign-up').trigger('reset')
//
// }
