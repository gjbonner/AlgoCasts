// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  let maxChar = ''
  let max = 0
  for(c of str.split('')){
    if(!chars[c]){
      chars[c] = 1
    } else {
      chars[c]++
      maxChar = chars[c]
    }
  }
  for(char in chars){
    if(chars[char] > max){
      max = chars[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = maxChar;
