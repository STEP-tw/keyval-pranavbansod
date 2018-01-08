const Parsed=require("./parsed.js");
const ParseInfo=require("./parseInfo.js");
const InvalidKeyError=require("./errors/invalidKeyError.js");

const contains=function(list,key,caseSensFlag) {
  return list.find(function(validKey){
    if(caseSensFlag)
      return key==validKey;
    return key.toLowerCase()==validKey.toLowerCase();
  });
}

var StrictParseInfo=function(initialParsingFunction,validKeys,caseSensFlag) {
  ParseInfo.call(this,initialParsingFunction);
  this.validKeys=validKeys;
  this.caseSensitiveFlag=caseSensFlag;
}

StrictParseInfo.prototype=Object.create(ParseInfo.prototype);

StrictParseInfo.prototype.pushKeyValuePair=function() {
  if(!contains(this.validKeys,this.currentKey,this.caseSensitiveFlag))
    throw new InvalidKeyError("invalid key",this.currentKey,this.currentPos);
  this.parsedKeys[this.currentKey]=this.currentValue;
  this.resetKeysAndValues();
}

module.exports=StrictParseInfo;
