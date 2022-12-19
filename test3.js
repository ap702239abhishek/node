const googleTrends = require('google-trends-api');
let query = {
    keyword:'god',
    startTime:  new Date(Date.now() - (192 * 60 * 60 * 1000))
  };
  
  googleTrends.interestOverTime(query)
  .then(function(results){
   const data=JSON.parse(results);
  //  console.log(data.default);
  //  console.log(data.default);

  })
  .catch(function(err){
    console.error('Oh no there was an error, double check your proxy settings', err);
  });

  const config_data={
    shouldShowCompetitors:true,
    shouldShowTubePromotion:true
  }
    const ndata=JSON.stringify(config_data);
    console.log(ndata);
