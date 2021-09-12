
let charset;




function NEW_KEY(Length, Numbers=false, Symbols=false) {
    var length = Length;
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      
      if(Numbers == true) {
        charset = charset + `0123456789`;
      }
      if(Symbols == true) {
        charset = charset + `@$.?&*/=`;
      }
      
      
      
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}






module.exports = {
  NEW_KEY
}

