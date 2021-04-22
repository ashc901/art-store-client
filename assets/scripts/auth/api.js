const config = require('../config')
const store = require('../store')


const signUp = function(data) {
  //remove the console.log before finished, this is only to test
  //console.log(data)
  //console.log(config.apiUrl)
  return $.ajax ({
    method: 'POST',
    url: config.apiUrl + '/sign-up/',
    data: data
  })
}
