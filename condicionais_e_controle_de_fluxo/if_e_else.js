let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

// if (temperature >= 37) {
//   console.log('Febre')
// } else {
//   console.log('saudável')
// }

if (highTemperature) {
  console.log('Febre Alta')
} else if (mediumTemperature) {
  console.log('Febre Moderada')
} else {
  console.log('Saudável')
}
