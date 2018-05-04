var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'BcgqXoyz9Le3v2OCXAyBbOw7x',
  consumer_secret: '4bVDRNYl5VZctyEmvqruorQq8dau5avUSXiIx3W5sJUA04CYIN',
  access_token_key: '3172723188-iaIAOQg4wYaLs2T0UpV72PK4BznKzsI6K3ZaZLO',
  access_token_secret: 'ouEzSOkLFhANgThjqbXszpfwsp8Tri8ocPCgwU06Mjgr4'
});

var params = {screen_name: 'einsteiniumcoin'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    tweets.forEach((tweet) => {
      console.log('1',tweet.retweet_count)
      console.log('2',tweet.favorite_count)
    })
    // console.log('%j', tweets);
  }
});
