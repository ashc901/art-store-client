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
const onChangePassword = function (event) {
  console.log("made  it here")
  event.preventDefault()
  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  // pass the data to an api function
  api.changePassword(data)
    // handle success
    .then(ui.onChangePasswordSuccess)
    // handle failure
    .catch(ui.onChangePasswordFailure)
}

//sign out
const onSignOut = function(event) {
  event.preventDefault()
  //console.log(data)
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

//product section

//create item
const onCreateItem = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)



  api.createItem(data)
    .then(ui.onCreateItemSuccess)
    .catch(ui.onError)
  console.log('onCreateItem')
}

//index
const onIndexItems = function() {
  console.log("getgot")
  //event.preventDefault()

  api.index()
    .then((response) => {
      (ui.onIndexSuccess(response))
    })
    .catch(ui.onError)
}
//delete
const onDynamicDelete = function (event) {

  event.preventDefault()
  const id = $(event.target).data('id')

  api.destroy(id)
    .then(onIndexItems)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}

//update
const onDynamicUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).data('id')

  api.update(id, formData)
    .then(onIndexItems)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,

  onCreateItem,
  onIndexItems,
  onDynamicDelete,
  onDynamicUpdate
}
