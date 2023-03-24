const input = document.querySelector(".palindrome-text-input");
const submit = document.querySelector(".submit-button");
const textWrapper = document.querySelector(".text-wrapper");

function palindrome(myString) {
  /* remove special characters, spaces and make lowercase*/
  var removeChar = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split("").reverse().join("");

  /* Check to see if myString is a Palindrome*/
  if (removeChar === checkPalindrome) {
    // create p element
    const textOutput = document.createElement("p");
    // add classlist to p element
    textOutput.classList.add("text-output");
    // create div
    const textMain = document.createElement("div");
    // add classlist to div
    textMain.classList.add("text-main");
    // add textContent to the p element
    textOutput.textContent = myString + " is a Palindrome";
    // add background color to p element
    textOutput.style.backgroundColor = "#008000";
    // append elements together to div
    textMain.appendChild(textOutput);
    textWrapper.appendChild(textMain);
  } else {
    const textOutput = document.createElement("p");
    textOutput.classList.add("text-output");
    const textMain = document.createElement("div");
    textMain.classList.add("text-main");
    textOutput.textContent = myString + " is not a Palindrome";
    textOutput.style.backgroundColor = "#FF0000";
    textMain.appendChild(textOutput);
    textWrapper.appendChild(textMain);
  }
  //   check whats the middle char of the string
  const input = myString;
  //   calculate the middle index by dividing the length of the input
  const middleIndex = Math.floor(input.length / 2);
  //   get the middle character from the input
  const middleChar = input.charAt(middleIndex);
  //   create div
  const middleCharDiv = document.createElement("div");
  //   add class name
  middleCharDiv.classList.add("middle-char-div");
  //   add text content
  middleCharDiv.textContent = middleChar;
  //   check the result and add background acordingly
  if (removeChar === checkPalindrome) {
    middleCharDiv.style.backgroundColor = "#008000";
  } else {
    middleCharDiv.style.backgroundColor = "#FF0000";
  }
  textWrapper.appendChild(middleCharDiv);
}
submit.addEventListener("click", function () {
  palindrome(input.value);
  //   clear input
  input.value = "";
});
