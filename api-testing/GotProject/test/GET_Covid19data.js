const { expect } = require('chai');
const got = require('got');
const core = require('../Libraries/CoreFunctions')


describe('Testing Covid-19 data API to evaluate whether reasonable data is returned', function() {
  
  beforeEach(function() {
    
  })

  const countries = ['UK', 'Spain', 'Italy', 'Germany', 'France'];
  
  countries.forEach(function(country) {
    it(`should display less than than 200,000 Covid-19 deaths for ${country}`, function(done) {
      got.get(`https://covid-19-data.p.rapidapi.com/country/?name=${country}`,
      {headers: core.headers()}, 
      {responseType: 'json'})
      .then(res => {
        core.respDateCode(res);
        console.log(core.prettyJSON(res));  
        expect(core.getRespBody(res)[0].deaths).to.be.lessThan(200000);
        done()
      })
      .catch(err => {
        console.log('Error: ', err.message);
      });
    }).timeout(10000);
  
    

    it(`should display more than than 75,000 Covid-19 deaths for ${country}`, function(done) {
      got.get(`https://covid-19-data.p.rapidapi.com/country/?name=${country}`,
      {headers: core.headers()}, 
      {responseType: 'json'})
      .then(res => {
        core.respDateCode(res);
        console.log(core.prettyJSON(res));  
        expect(core.getRespBody(res)[0].deaths).to.be.greaterThan(75000);
        done()
      })
      .catch(err => {
        console.log('Error: ', err.message);
      });
    }).timeout(10000);
  
  
  });
  
})









