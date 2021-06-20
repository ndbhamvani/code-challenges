const config = require('../User/config');
const got = require('got');

exports.respDateCode = (res) => {
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);
}


exports.getRespBody = (res) => {
  const respBody = JSON.parse(res.body);
  return respBody;
}

exports.prettyJSON = (res) => {
  const uglyJSON = this.getRespBody(res);
  return JSON.stringify(uglyJSON, null, 4);
}

exports.headers = () => {
  return {   
    'x-rapidapi-key':config.apiAccess(), 
    'x-rapidapi-host':'covid-19-data.p.rapidapi.com', 
    'useQueryString':'true'
  }
}

exports.sendCovid19Request = (country) => {
  return got.get(`https://covid-19-data.p.rapidapi.com/country/?name=${country}`, {headers: this.headers()})
}

exports.getResponse = (res) => {
  this.respDateCode(res);
  console.log(this.prettyJSON(res));  
}