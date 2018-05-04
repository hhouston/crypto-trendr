import reddit from 'redwrap'

reddit.r('WTF', function(err, data, res){
  console.log('%j:', data); //outputs object representing first page of WTF subreddit
});
