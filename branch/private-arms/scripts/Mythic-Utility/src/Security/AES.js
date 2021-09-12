var CryptoJS = require("crypto-js");
const SecurityData = require('../Data/Security.json');
const Keys = require('../Generator/Key.js');




function AES(Setting="Encrypt",Message="Hello World!", KeyMannul=true, Key) {
  let KEY;
  let AllData;
  
  if(KeyMannul == false) {
    // Key Generator
    let Holder = Keys.NEW_KEY(50, true, true);
    KEY = Holder;
  }else{
    if(KeyMannul == true) {
      if(Key.length == 0) {
        KEY = SecurityData["DEFAULT KEY"];
      }else{
        if(Key.length > 0 || Key.length < 51) {
          KEY = Key;
        }
      }
    }
  }
  
  
  
  
  
  if(Setting == "Encrypt" || Setting == "encrypt") {
  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(Message, KEY).toString();
  
  AllData = [`${ciphertext}`,`${KEY}`];
  return AllData;
  }
  
  if(Setting == "Decrypt" || Setting == "decrypt") {
  // Decrypt
  var bytes  = CryptoJS.AES.decrypt(Message, KEY);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  
  AllData = [`${originalText}`, `${KEY}`];
  return AllData;
  }
}




module.exports = {
  AES
}
