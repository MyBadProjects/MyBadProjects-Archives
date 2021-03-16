// Variables
const database = require('./data/data.json')

// Functions
function _Capitalize(input) {
  function convertToUpper() {
    return arguments[0].toUpperCase();
  }

  return input.toLowerCase().replace(/\b[a-z]/g, convertToUpper);
}

function _GetRandomNumber() {
  return Math.round(Math.random() * (9 - 0) + 0);
}

function _GetRandomNumberBetween(min,max){
  let randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum);
}

exports.GetServiceTypes = function() {
  return database.servicetypes.names
}

exports.GetServiceTypesModes = function() {
  return database.servicetypes.mode
}

exports.GenerateNumber = function(Mode) {
  correct = false;
  var amount = Math.random() < 0.5;
  let randomPhone = '';
  let times;
  switch (mode) {
    case 1:
      correct = true
  
      if (amount) times = 11 
      else times = 10

      for (let i = 0; i < times; i++) {
        randomPhone += `${_GetRandomNumber()}`
      }
      
      randomPhone = `${database.international.areacodes[_GetRandomNumberBetween(
        0,
        database.international.areacodes.length
      )].Code}${database.geographical.areacodes[_GetRandomNumberBetween(
        0,
        database.geographical.areacodes.length
      )].Code.substring(1)} ${randomPhone}`

      if (randomPhone > times) {
        randomPhone = randomPhone.substring(0, randomPhone.length - (randomPhone.length - times))
      }

      break;
    case 2:
      correct = true
      if (amount) times = 11 
      else times = 10

      for (let i = 0; i < times; i++) {
        randomPhone += `${_GetRandomNumber()}`
      }
      
      randomPhone = `${database.geographical.areacodes[_GetRandomNumberBetween(
        0,
        database.geographical.areacodes.length
      )].Code}${randomPhone}`

      if (randomPhone > times) {
        randomPhone = randomPhone.substring(0, randomPhone.length - (randomPhone.length+1 - times))
      }

      break;
    case 3:
      correct = true
      if (amount) times = 11 
      else times = 10

      randomPhone = `${database.mobile.areacodes[_GetRandomNumberBetween(
        0,
        database.mobile.areacodes.length
      )].Code}${_GetRandomNumber()}${_GetRandomNumber()} `

      for (let i = 0; i < times-2; i++) {
        randomPhone += `${_GetRandomNumber()}`
      }

      if (randomPhone > times) {
        randomPhone = randomPhone.substring(0, randomPhone.length - (randomPhone.length - times))
      }
      break;
  }

  if (correct == false){
    console.error("Error: No correct mode was given.")
    return;
  }

  console.log(randomPhone)
}