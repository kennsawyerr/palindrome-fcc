/*
Build a Palindrome Checker
A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

Objective: Build an app that is functionally similar to https://palindrome-checker.freecodecamp.rocks

User Stories:

When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text A is a palindrome
When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text eye is a palindrome
When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text _eye is a palindrome
When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text race car is a palindrome
When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text not a palindrome is not a palindrome
When the #test-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text A man, a plan, a canal. Panama is a palindrome
When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text never odd or even is a palindrome
When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text nope is not a palindrome
When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text almostomla is not a palindrome
When the #text-input eleme.nt contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text My age is 0, 0 si ega ym. is a palindrome
When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text 1 eye for of 1 eye. is not a palindrome
When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text 0_0 (: /-\ :) 0-0 is a palindrome
When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text five|\_/|four is not a palindrome
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

 */

const checkerBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const displayEl = document.getElementById("display-el")

checkerBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    checker();
  }
});
const checker = () => {
  const word = document.getElementById("text-input").value;
  const letters = word.split("").reverse().join("");
  console.log(letters); // Output: ["g", "o", "a", "t"]
  console.log("word", word);
  if (letters === word) {
    displayPositive(word);
  } else {
    displayNegative(word);
  }
};

const displayPositive = (sentence) => {
    displayEl.innerHTML =`<b>${sentence}</b> is a palindrome`
}

const displayNegative = (statement) => {
    displayEl.innerHTML =`<b>${statement}</b> is not a palindrome`
}

// checkerBtn.addEventListener("click", checker);
