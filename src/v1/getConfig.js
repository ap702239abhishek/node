const googleTrends = require('google-trends-api');

googleTrends.interestOverTime({keyword: 'dog',startTime: new Date('2022-06-29'), endTime: new Date('2022-05-21')})
.then(function(results){
  console.log(results);
})
.catch(function(err){
  console.error(err);
})
/*
googleTrends.autoComplete({keyword: 'dog',granularTimeResolution : true})
.then(function(results) {
  console.log(results);
})
.catch(function(err) {
  console.error(err);
})*/