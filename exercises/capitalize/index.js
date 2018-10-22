// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str){
 let cap = []
  for(word of str.split(' ')){
    cap.push(word.slice(0,1).toUpperCase() + word.slice(1, word.length))
  }
  return cap.join(' ')
}
module.exports = capitalize;
