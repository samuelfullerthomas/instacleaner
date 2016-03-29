var fs = require('fs')
var dbToClean = require('./instagramDB.json')

var clean = /[^\w\s~`!@#$%^&*()_+=\\\]\[}{'";:\|.,?\/\-><]+/g

for (var k in dbToClean) {
  if (dbToClean[k].photos) {
    for (var i = 0; i < dbToClean[k].photos.length; i++) {
      dbToClean[k].photos[i] = dbToClean[k].photos[i].replace(clean, '')
    }
  }
}
fs.writeFile('cleanDB.json', JSON.stringify(dbToClean), function (err) {
  if (err) {
    //  errors thrown here
    return console.log('Error! Error as follows: ' + err)
  } else {
    return console.log('That db is clean as the day it was born')
  }
})
