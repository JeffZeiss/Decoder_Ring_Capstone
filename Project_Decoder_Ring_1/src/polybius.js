// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
const decodePolybiusChart = //create a decoder key object with polybius keys with alphabet for matching value
{
  11: 'a',
  21: 'b',
  31: 'c',
  41: 'd',
  51: 'e',
  12: 'f',
  22: 'g',
  32: 'h',
  42: '(i/j)', //42 covers i and j
  52: 'k',
  13: 'l',
  23: 'm',
  33: 'n',
  43: 'o',
  53: 'p',
  14: 'q',
  24: 'r',
  34: 's',
  44: 't',
  54: 'u',
  15: 'v',
  25: 'w',
  35: 'x',
  45: 'y',
  55: 'z',

};
// reverse the decoder key/value pairs for encoding key
const encodePolybiusChart = {
  a: 11,
  b: 21,
  c: 31,
  d: 41,
  e: 51,
  f: 12,
  g: 22,
  h: 32,
  i: 42,//i is 42
  j: 42,//j is also 42
  k: 52,
  l: 13,
  m: 23,
  n: 33,
  o: 43,
  p: 53,
  q: 14,
  r: 24,
  s: 34,
  t: 44,
  u: 54,
  v: 15,
  w: 25,
  x: 35,
  y: 45,
  z: 55
}



  function polybius(input, encode = true) {
    // your solution code here
    if(!encode) {//decode if not encoding
      let filteredInput = input.split(" ");//create an array of words from input
      let sentence = [];//make a resultant array to decode into
      for (word of filteredInput) {//step through each word to decode
        if (word.length % 2 !=0) {//check that the input is correctly formed of pairs
          return false;//if not return false
        } else {//if correct proceed to decode
          let words = '';//make a blank word to build decoding
          for (let i = 0; i < word.length; i+=2) {//step through each first letter of each code pair in each word
            let letter = decodePolybiusChart[parseInt([`${word[i]}${word[i+1]}`])];//find each letter with the first and second number from each pair to reference the polybius chart
            words += letter; //add the found letter to the blank word
          }
          sentence.push(words);//when each word finishes, add it to the sentence array
        }
      }
      return sentence.join(' ');//return the sentence array joined into a string with a space between each word indexed
    }
    else{ //encode if not decoding
      console.log(input,"encoding",encode)
      let wordsToEncode = input.toLowerCase().split(' ');//split each word of the input into an array slot in a lowercase form
      let arrayOfCode = [];//create a blank array to translate into
      for (word of wordsToEncode){//step through each word to translate from the translating array
        let wordEncoded = "";//create a blank string to construct each encoded word
        console.log("word",word)
        for (i=0; i<word.length; i++){//step through each letter of each word you're encoding
          wordEncoded += encodePolybiusChart[word[i]];//use the polybius chart with the matching value to add the appropriate code pair to the encoded word
        }console.log("wordEncoded",wordEncoded)
        arrayOfCode.push(wordEncoded);//add the completed encoded word to the returnable encoded array
        //return arrayOfCode
      }
      console.log ("arrayOfCode",arrayOfCode)
      console.log ("arrayOfCodeStrung",arrayOfCode.join(" "))
      return arrayOfCode.join(" ");//return the array joined into a string and separated by spaces between each word
    }

  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;