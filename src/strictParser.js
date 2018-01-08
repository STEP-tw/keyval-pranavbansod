const Parser=require("./keyValueParser.js");
const strictParseInfoCreator=require("./parseInfoCreator.js").strict;

var StrictParser=function(listOfKeys,caseSensFlag) {
  Parser.call(this);
  let sanitisedListOfKeys=listOfKeys||[];
  let caseFlag = caseSensFlag && true;
  this.parseInfoCreator=strictParseInfoCreator(sanitisedListOfKeys, caseFlag);
}

StrictParser.prototype=Object.create(Parser.prototype);
module.exports=StrictParser;
