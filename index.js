const axios = require('axios').default;
var Twit = require('twit')

require('dotenv').config()

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
})

axios.get('http://api.openeventdatabase.org/event/?what=health.blood.collect&when=today&limit=500')
  .then(function (data) {
    for (const feature of data.data.features) {
      var message = "Nouvelle collecte aujourd'hui à " + feature.properties['where:name'] + " (" + feature.properties.name + ")" + " de " + feature.properties.start.match("\T(.*)\CET")[1] + " à " + feature.properties.stop.match("\T(.*)\CET")[1];
      T.post('statuses/update', {
        status: message
      }, function (err, data, response) {
        console.log(data)
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  });