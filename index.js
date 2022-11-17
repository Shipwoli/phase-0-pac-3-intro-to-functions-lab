function shout (aWord) {
  return aWord.toUpperCase( );
}

function whisper (aWord) {
  return aWord.toLowerCase( );
}

function logShout (aWord) {
  console.log(aWord.toUpperCase( ));
}

function logWhisper (aWord) {
  console.log(aWord.toLowerCase( ));
}


// describe('sayHiToGrandma(string)', function() {
//   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//     expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
//   })

//   it('returns "YES INDEED!" if `string` is uppercase', function() {
//     expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
//   })

//   it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
//     expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
//   })
// })
function sayHiToGrandma (aWord) {
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I love you, too.";
  if (aWord.toLowerCase(aWord) === aWord) {
    return cantUnswer;
  }
  else if (aWord.toUpperCase(aWord) === aWord) {
    return yesUnswer;
  }
  else if ("I love you, Grandma." === aWord) {
    return lovUnswer
  }
}