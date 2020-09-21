var dateFormat = require('dateformat');
const axios = require('axios').default;
require('dotenv').config()

var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:     process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
 

T.post('statuses/update', { status: 'hello world!2' }, function(err, data, response) {
  console.log(data)
})
// https://www.google.com/maps/place/Florange/@49.333412,6.114725,17z/data=!4m5!3m4!1s0x4795257762e07747:0x40a5fb99a3aac90!8m2!3d49.321374!4d6.1182819

axios.get('http://api.openeventdatabase.org/event/?what=health.blood.collect&when=today&limit=500')
  .then(function (data) {
    // console.log(data.data.features);
    // nbCollect = data.data.count;
    // console.log(nbCollect)
    for ( const feature of data.data.features) {
        console.log(feature.properties.start);
        var mydate = new Date("2020-09-21T15:00:00CET");
        var str = dateFormat(mydate, "h:MM:ss");;
        // console.log(Date.parse(feature.properties.start))
        console.log(str)
        console.log(feature.properties.stop);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// var client = new Twitter({
//     consumer_key: 'Wpga3w63eduxq1MxIVQfVu0kF',
//     consumer_secret: 'uBBnAGfo2UeVzgdynNWvyBQava47pAsTqm4YTArmyh2wzHx5xj',
//     bearer_token: 'AAAAAAAAAAAAAAAAAAAAAOKoHgEAAAAARNsLn%2B9aBfd735dKQi%2FYZCxFSCM%3DruejCSYzR0Nc6LEoDjTflrBJqczvO1LnpaAXhAVfE4iZyfKwvK'
// });
// var client = new Twitter({
//   consumer_key: 'DhyPxsRQuN5oxm41mm0ZszO86',
//   consumer_secret: 'JvppBD93PZi2eOWs7KKFS0lSyYkpqGnRxiLOFB9rrOMokeJe7m',
//   access_token_key: '1305168827806875648-kAPmqc6GmNX1dfPB6ZJjFMSZ2SBEwU',
//   access_token_secret: 'OEUaG0uO79f5WMdsTQiV4uixR4QauMUcgGABTRuEPEu9N'
// });
// client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//     if(error) throw error;
//     console.log(tweet);  // Tweet body.
//     console.log(response);  // Raw response object.
//   });
// client.post('statuses/update', {status: 'I Love Twitter'})
//   .then(function (tweet) {
//     console.log(tweet);
//   })
//   .catch(function (error) {
//     throw error;
//   })