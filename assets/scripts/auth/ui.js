const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#message').text("Account successfully created.")
  $('form').trigger('reset')
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

    products.forEach(product => {
      productsHtml += `
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
        <button class='product-delete-dynamic' data-id=${product._id}>Delete</button>
        <br>
        <form class='product-update-dynamic' data-id=${product._id}>
          <input name='product[name]' type='text' placeholder='New Product Name'>
          <input name='product[price]' type='number' placeholder='New Price'>
          <button>Update</button>
        `
    })
    $('#products-display').html(productsHtml)
}

const onDeleteSuccess = function() {
  $('#message').text('Deleted')
}

const onUpdateSuccess = function() {
  $('#message').text('Updated')
  $('form').trigger('reset')
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
  onDeleteSuccess,
  onUpdateSuccess,

  onError
}
