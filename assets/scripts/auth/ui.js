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
  store.product = response.product
  console.log(response)
  $('#message').text("Item successfully created.")
//  $('#items').html(itemHtml)
  $('#new-item').trigger('reset')
}


const onIndexSuccess = function (response) {
    const products = response.products
    console.log(response)

    let productsHtml = ''
    console.log("productsHtml = ",  productsHtml)
    console.log("productsHtml should be an empty string")
    console.log("now I need to figure out why 'products.forEach' isn't working \
    since it obviously makes it into this function")

    products.forEach(product => {
      productsHtml += `
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
        `
      console.log(productsHtml)
      console.log("productsHtml should not be an empty string after this function runs")
    })
    // setting the books-display to have the html of all the books
    $('#products-display').html(productsHtml)
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
  onIndexSuccess,

  onError
}
