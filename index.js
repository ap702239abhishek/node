const express = require('express')
const app = express()
const googleTrends = require('google-trends-api');
const port= process.env.PORT||3000;

app.get('/serveTrendingKeywords', (req, res) => {

   googleTrends.dailyTrends({
    geo: req.query.country,//'US',
  }, function(err, results) {
    if (err) {
      console.log(err);
    }else{
      const data=JSON.parse(results);
      res.json(data);
       console.log(results);
    }
  });

  // res.send('hello world')
})
app.get('/searchTermKeywords', (req, res) => {

  let query = {
    keyword: req.query.searchTerm,
    startTime:  new Date(Date.now() - (192 * 60 * 60 * 1000))
  };
  
  googleTrends.interestOverTime(query)
  .then(function(results){
    const data=JSON.parse(results);
    res.json(data.default);
    console.log(data.default);
  })
  .catch(function(err){
    console.error('Oh no there was an error, double check your proxy settings', err);
  });
  
  // res.send('hello world')
})
app.get('/', (req, res) => {
  
   res.send('mission success full')
})
const config_data={
  shouldShowCompetitors:true,
  shouldShowTubePromotion:true
}
app.get('/getConfig', (req, res) => {
  const ndata=JSON.stringify(config_data);
  res.json(ndata);
})

app.listen(port);