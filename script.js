

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
