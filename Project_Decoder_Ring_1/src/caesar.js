// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const ALPHABET_LENGTH = 26;
  const LOWERCASE_A = 97;
  const LOWERCASE_Z = 122;
  function caesar(input, shift, encode = true) {
    // check if shift is proper value
    if (!shift || shift === 0 || shift > 25 || shift < -25){ 
      return false;
    };
    // convert to lower case
    const newMsg = input.toLowerCase();//shift all letters of message to lower case 
    // check for encode or decode
    if(!encode){ //decode if it's not encoding
      shift *= -1; //reverse the shift to decode
    }
    let decoded = "" //set a blank result string
    for(let i = 0; i < newMsg.length; i++){ //step through each character in the message
    // check if letter shifts off the alphabet
    if (newMsg.charCodeAt(i) > LOWERCASE_Z || newMsg.charCodeAt(i) < LOWERCASE_A){//check if character is a non letter symbol
      console.log(String.fromCharCode(newMsg.charCodeAt(i)))
      decoded += String.fromCharCode(newMsg.charCodeAt(i));//if so add it directly to the decoding
    }else if(newMsg.charCodeAt(i) + shift > LOWERCASE_Z) {//check if shift pushes result past end of alphabet
      decoded += (String.fromCharCode((newMsg.charCodeAt(i) + shift) - (LOWERCASE_Z) + (LOWERCASE_A - 1)))//if so subtract z max and add a min -1
    }else if((newMsg.charCodeAt(i) + shift < LOWERCASE_A)) {//check if shift drops below a in the alphabet
      decoded += (String.fromCharCode((newMsg.charCodeAt(i) + shift) - (LOWERCASE_A) + (LOWERCASE_Z + 1)))//if so loop back to z by removing base a, plus base z +1
    }else {//otherwise transfer the shift affected letter directly
      decoded += String.fromCharCode(newMsg.charCodeAt(i) + shift)
    }
  }
    return decoded;//return the decoded message
  }
  return {
    caesar
  };
})();

module.exports = caesarModule.caesar;
