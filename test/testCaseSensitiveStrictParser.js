const src=function(filePath){return "../src/"+filePath};

const assert=require('chai').assert;
const Parsed=require(src('parsed.js'));
const StrictParser=require(src('index.js')).StrictParser;

describe("strict parser that is case insensitive",function(){
  it("should parse when specified key is in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME"]="jayanth";
    let parsed=kvParser.parse("NAME=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified key is lower alpha-numeric(includes '_')  and actual is not",function(){
    let kvParser=new StrictParser(["name_123"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME_123"]="jayanth";
    let parsed=kvParser.parse("NAME_123=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified key is lower alpha-numeric and actual is not in same case ",function(){
    let kvParser=new StrictParser(["name123"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME123"]="jayanth";
    let parsed=kvParser.parse("NAME123=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified key is in upper case and actual is not",function(){
    let kvParser=new StrictParser(["NAME"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["name"]="jayanth";
    let parsed=kvParser.parse("name=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified key is upper alpha-numeric(includes '_') and actual is not",function(){
    let kvParser=new StrictParser(["name_123"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME_123"]="jayanth";
    let parsed=kvParser.parse("NAME_123=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified key is upper alpha-numeric and actual is not in same case ",function(){
    let kvParser=new StrictParser(["NAME123"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["name123"]="jayanth";
    let parsed=kvParser.parse("name123=jayanth");
    assert.deepEqual(parsed,expected);
  });
});



describe("strict parser that is case sensitive",function(){
  it("should throw error when specified key is in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("NAME=jayanth");
    })
  });

  it("should throw error when specified key is lower alpha-numeric(includes '_')  and actual is not",function(){
    let kvParser=new StrictParser(["name_123"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("NAME_123=jayanth");
    })
  })

  it("should throw error when specified key is lower alpha-numeric and actual is not in same case ",function(){
    let kvParser=new StrictParser(["name123"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("NAME123=jayanth");
    })
  })

  it("should throw error when specified key is in upper case and actual is not",function(){
    let kvParser=new StrictParser(["NAME"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("name=jayanth");
    })
  })

  it("should throw error when specified key is upper alpha-numeric(includes '_') and actual is not",function(){
    let kvParser=new StrictParser(["NAME_123"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("name_123=jayanth");
    })
  })

  it("should throw error when specified key is upper alpha-numeric and actual is not in same case",function(){
    let kvParser=new StrictParser(["NAME123"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("name123=jayanth");
    })
  })
});
