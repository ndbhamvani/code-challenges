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