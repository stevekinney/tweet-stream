var Twitter = require('node-tweet-stream');
var io = require('socket.io')(8080);

var t = new Twitter({
  consumer_key: 'hRolA824CQSrMtMYMnWfYAN7D',
  consumer_secret: '866SCQr19JIn1DuKXKQZgne263vJ1EZXIhIw9AOMb6oMBbHTWw',
  token: '2118841-GxOE9wlt7E6QiFMtqssoYaVJgYk07EJtOap6yhw8Uo',
  token_secret: 'uoXA8bQuZon0GGstS4OKngFfEYOv2UHPZCjOqJ3wYY6b6'
});

t.on('tweet', function (tweet) {
  io.emit('tweet', tweet);
  console.log('tweet received', tweet);
});

t.on('error', function (err) {
  console.log('Oh no!');
});

t.track('emberconf');