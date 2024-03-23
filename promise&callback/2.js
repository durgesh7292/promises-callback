function manipulateString(inputstring, callback) {
  const manipulatedstring = inputstring.toUpperCase();
  callback(manipulatedstring);
}
function logString(manipulateString) {
  console.log("the manipulated string is:${manipulatedstring}");
}
manipulateString("hello,world", logString);
