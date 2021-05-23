const got = require('got');
const core = require('./Libraries/CoreFunctions')

got.get('https://covid-19-data.p.rapidapi.com/country/?name=UK',

{headers: 
    {   
        'x-rapidapi-key':'792bc5d42amsh1268eeda0edeb35p125cb9jsn17df54611ad3', 
        'x-rapidapi-host':'covid-19-data.p.rapidapi.com', 
        'useQueryString':'true'
    }
}, 

{responseType: 'json'})

  .then(res => {
    core.respDateCode(res);
    console.log(core.prettyJSON(res));
    
    const covidData = core.getRespBody(res);
    console.log(covidData[0].deaths > 100000);
    
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });
