////// Palindrome 1 of 3   -   OK, all steps in single Function

function palindrome_1(str) {
  // remove all non-alphanumeric characters
  let forwardStr = str.replace(/[\W_]/g, "");
  console.log(forwardStr);

  // set alphanumeric string toUpperCase
  let forwardUpper = forwardStr.toUpperCase();

  // reverse UpperCase string
  let reverseUpper = "";
  for (let i = forwardUpper.length - 1; i >= 0; i--) {
    reverseUpper += forwardUpper[i];
  }
  // check for Palindrome
  if (forwardUpper === reverseUpper) {
    return true;
  }
  // return false if not a Palindrome
  return false;
} ////// end of Palindrome_1
palindrome_1("A man, a plan, a canal. Panama");

////// Palindrome_2 of 3   -   better, Functions for each step

function make_AlphaNumeric(str) {
  return str.replace(/[\W_]/g, "");
}
function make_StringUpper(str) {
  return str.toUpperCase();
}
function make_ReverseString(str) {
  return str.split("").reverse().join("");
}

// Function Palindrome return true for string Palindrome
function palindrome_2(str) {
  const alphaNumStr = make_AlphaNumeric(str);

  const up_AlphaNumStr = make_StringUpper(alphaNumStr);

  const rev_UpAlphaNumStr = make_ReverseString(up_AlphaNumStr);

  if (rev_UpAlphaNumStr === up_AlphaNumStr) {
    return true;
  }
  return false;
} ////// end Palindrome_2
palindrome_2("A man, a plan, a canal. Panama");

////// Palindrome 3 of 3   -   best, uses native, built-in Functions

function native_ReverseString(str) {
  return str.split("").reverse().join("");
}

function palindrome(str) {
  const alphaNumStr = make_AlphaNumeric(str);

  const up_AlphaNumStr = make_StringUpper(alphaNumStr);

  const rev_UpAlphaNumStr = native_ReverseString(up_AlphaNumStr);

  if (rev_UpAlphaNumStr === up_AlphaNumStr) {
    console.log(`${up_AlphaNumStr}   ...this is upper alpha
${rev_UpAlphaNumStr}   ...this is string reversed
${str}   ...this is string checked`);
    console.log(rev_UpAlphaNumStr === up_AlphaNumStr);
    return true;
  }
  return false;
} ////// end Palindrome 3
palindrome("A man, a plan, a canal. Panama");
