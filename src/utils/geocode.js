const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibXItc3RhbmRhbG9uZXoiLCJhIjoiY2s3dmwxajF4MGMwZDNscGh2NzExamJmMiJ9.-5tlBWk7q8gVDshEY1U43g`

    request({ url , json:true } , (error , { body }) => {

      if (error) {
        callback('unable to connect' , undefined)
      }else if (body.features.length === 0) {
        callback('unable to find location' , undefined)
      }else {
        callback(undefined , {
          latitude : body.features[0].center[1],
          longitude : body.features[0].center[0],
          place: body.features[0].place_name
        })
}

})

}


module.exports = geocode
