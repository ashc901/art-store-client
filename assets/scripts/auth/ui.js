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
  $('modal').modal('hide')
}

const onSignOutSuccess = function () {
  $('#message').text("Signed out.")
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.signed-in').hide()
  store.user = null
}


//product section


const onCreateItemSuccess = function(response) {
  store.item = response.item

  // const itemHtml = `
  //   <h4>${response.item.name}</h4>
  //   <p>${response.item.price}</p>
  // `
  $('#message').text("Item successfully created.")
//  $('#items').html(itemHtml)
  $('#new-item').trigger('reset')
}

//error
const onError = function(err) {
  console.log(err)
  $('#message').text("Whoopsie doodle, there's been an error.")
}




module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onShowChangePassword,
  onSignOutSuccess,
  onCreateItemSuccess,

  onError
}
