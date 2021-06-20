const { expect } = require('chai');
const core = require('../Libraries/CoreFunctions')


describe('Testing Covid-19 data API to evaluate whether reasonable data is returned', function() {
  
  beforeEach(function() {
    
  })

  const countries = ['UK', 'Spain', 'Italy', 'Germany', 'France'];
  
  countries.forEach(function(country) {
    it(`should display less than than 200,000 Covid-19 deaths for ${country}`, async () => {
      const res = await core.sendCovid19Request(country)
        core.getResponse(res)
        expect(core.getRespBody(res)[0].deaths).to.be.lessThan(200000);
    })
  
    

    it(`should display more than than 75,000 Covid-19 deaths for ${country}`, async () => {
      const res = await core.sendCovid19Request(country)
        core.getResponse(res)  
        expect(core.getRespBody(res)[0].deaths).to.be.greaterThan(75000);
    })
  
  
  });
  
})  









