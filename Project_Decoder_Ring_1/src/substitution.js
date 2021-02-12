// Please refrain from tampering with the setup code provided here,
// as the inde:"s.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //make an array of objects keyed to alphabet
   
    let alphabetKey = {a:"sub",b:"sub",c:"sub",d:"sub",e:"sub",
    f:"sub",g:"sub",h:"sub",i:"sub",j:"sub",k:"sub",l:"sub",
    m:"sub",n:"sub",o:"sub",p:"sub",q:"sub",r:"sub",s:"sub",
    t:"sub",u:"sub",v:"sub",w:"sub",x:"sub",y:"sub",z:"sub"
    }
    let alphaNumKey = {//make an object with an array index value for each alpha char
      a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,
      n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,
      y:24,z:25
    }
let alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//console.log("given alpha",reverseKey)
    if (!alphabet||alphabet.length != 26||typeof(alphabet)!= "string") {
      return false}//check that the substitution alphabet is a 26 character string
    else{
      let reverseKey = alphabet.split("") //build alphabet reversal
      let thisCharNum = 0 //start a loopable counter
      let redunString = "" //start a blank string to track what symbols have been addded
      for(character in alphabetKey){ //step through the decoder object
          if (redunString.includes(alphabet[thisCharNum])){ //check if the character has yet been added
            return false}
            else{
          alphabetKey[character]=alphabet[thisCharNum]//add substitution to the alpha key
          redunString +=alphabet[thisCharNum] //add the symbol to the checker string
          thisCharNum++ //move to next index to check/add
        }
      }
    console.log("alphabetkey",alphabetKey)
    console.log("reverseKey",reverseKey)
    //end key builds
    
    let translatedArray = [] //make a blank array to queue encoded or decoded words
    console.log("input",input.split(" "))
    
    if (!encode){//check if not encode then DECODE
      console.log("Decode")
      let toTranslate = input.toLowerCase().split(" "); //take the input and split it into words by space
      for(words of toTranslate){ //step through each word
        let tempWord = "" //create a blank translation string
        for(i=0; i<words.length; i++){ //step through each character of the coded word
          for(j=0; j<reverseKey.length; j++){ //step through the key
            if(reverseKey[j]===words[i]){ //check each key of the keyobject for a matching character
              tempWord += alphabetArray[j] //add the character value to the temp word string
            }
          }
          
        }
        translatedArray.push(tempWord) // add each translated word to the returnable array
      }
      
    }else{//if not decoding, ENCODE
      console.log("encode") 
      let toEncode = input.toLowerCase().split(" ");//split the input into an array by word and lower the case of capitals
      for(words of toEncode){ //step through each word
        let tempWord = "" //create a blank string to encode to
        for(i=0; i<words.length; i++){ // step through each letter of the current word
          tempWord += alphabetKey[words[i]] //add the matching code word to the temporary string
        }
        translatedArray.push(tempWord) //add the complete word to the return array
      }
    }
    console.log("finalresult",translatedArray.join(" "))
    return translatedArray.join(" ") //return the return array as a sentence with spaces between each word
  }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
