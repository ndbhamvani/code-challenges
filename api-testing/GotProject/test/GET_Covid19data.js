const { expect } = require('chai');
const got = require('got');
const config = require('../User/config');
const core = require('../Libraries/CoreFunctions')

describe('Testing Covid-19 data API to evaluate whether reasonable data is returned', function() {

  beforeEach(function() {
    
  })
  
  it('should display greater than 100,000 UK Covid-19 deaths', function() {
    got.get('https://covid-19-data.p.rapidapi.com/country/?name=UK',
    {headers: 
        {   
            'x-rapidapi-key':config.apiAccess(), 
            'x-rapidapi-host':'covid-19-data.p.rapidapi.com', 
            'useQueryString':'true'
        }
    }, 
    {responseType: 'json'})
    .then(res => {
      core.respDateCode(res);
      console.log(core.prettyJSON(res));  
      const covidData = core.getRespBody(res);
      expect(covidData[0].deaths).to.be.greaterThan(100000);
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });
  })
  
  // ...some more tests
  
})









