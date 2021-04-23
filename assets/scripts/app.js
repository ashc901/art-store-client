'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const etcEvents = require('./auth/ui.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.signed-in').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#show-change-password').on('click', etcEvents.onShowChangePassword)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  //products
  $('#new-item').on('submit', authEvents.onCreateItem)
  $('#index').on('click', authEvents.onIndexItems)
})
