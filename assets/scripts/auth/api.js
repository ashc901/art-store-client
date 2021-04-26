const config = require('../config')
const store = require('../store')


const signUp = function(data) {
  return $.ajax ({
    method: 'POST',
    url: config.apiUrl + '/sign-up/',
    data: data
  })
}

const signIn = function(data) {
  return $.ajax ({
    method: 'POST',
    url: config.apiUrl + '/sign-in/',
    data: data
  })
}

const changePassword = function (data) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data,
  })
}

const signOut = function() {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + "/sign-out",
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

//products


const createItem = function (data) {
    return $.ajax ({
      method: 'POST',
      url: config.apiUrl + '/products',
      data: data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }


const index = function (){
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/products',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/products/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function(id, formData) {
  return $.ajax({

    method: 'PATCH',
    url: config.apiUrl + '/products/' + id,
    data: formData,
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,

  createItem,
  index,
  destroy,
  update
}
