const SecurityData = require('../Data/Security.json');



function Info() {
  
  let DEFAULT_KEY = SecurityData["DEFAULT KEY"];
  
  
  
  
  let results = `Security\n---------------------------------------------\n\nDefault Key: ${DEFAULT_KEY}`;
  return results;
}






module.exports = {
  Info
}

