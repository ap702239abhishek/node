const googleTrends = require('google-trends-api');
googleTrends.dailyTrends({
    geo: 'US',
  }, function(err, results) {
    if (err) {
      console.log(err);
    }else{
      console.log(results);
    }
  });

 