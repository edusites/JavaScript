var yourString = "The quick brown fox jumps over the lazy dog"; //replace with your string.
var maxLength = 22; // maximum number of characters to extract

//trim the string to the maximum length
var trimmedString = yourString.substr(0, maxLength);
console.log(`A primeiro momento: \n ${trimmedString}`);
//re-trim if we are in the middle of a word
trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))