const request = require('request')

const forecast = (lat , long, callback) => {

  const url = `https://api.darksky.net/forecast/fc30098cd1696bd3cd5342801fdb0ac8/${lat},${long}?units=us`

  request({ url , json:true } , (error , { body }) => {

    if (error) {
      callback('unable to connect' , undefined)
    }else if (body.code === 400) {
      callback('unable to find location for forecast' , undefined)
    }else {
      callback(undefined , `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degree out. There is a ${body.currently.precipProbability}% chance of rain`)

   }

})

}


module.exports = forecast
