// -----------------------------
// Part 1: Variables & Conditionals
// -----------------------------
function greetUser() {
  let name = document.getElementById("userName").value; // get user input
  if (name) {
    document.getElementById("greeting").innerText = `Hello, ${name}! Welcome 😊`;
  } else {
    document.getElementById("greeting").innerText = "Please enter your name!";
  }
}

// -----------------------------
// Part 2: Functions
// -----------------------------
function calculateTotal(a, b) {
  return a + b; // reusable logic
}

function showTotal() {
  let n1 = parseInt(document.getElementById("num1").value) || 0;
  let n2 = parseInt(document.getElementById("num2").value) || 0;
  let result = calculateTotal(n1, n2);
  document.getElementById("totalResult").innerText = `Total = ${result}`;
}

// -----------------------------
// Part 3: Loops
// -----------------------------
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old results

  for (let i = 5; i >= 1; i--) { // for loop example
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }

  let li = document.createElement("li");
  li.innerText = "Blast off! 🚀";
  list.appendChild(li);
}

// Another loop example (while loop)
let numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
  console.log("Number:", numbers[index]); // prints in console
  index++;
}

// -----------------------------
// Part 4: DOM Manipulation
// -----------------------------
let toggleBtn = document.getElementById("toggleBtn");
let domText = document.getElementById("domText");

toggleBtn.addEventListener("click", function () {
  domText.classList.toggle("highlight"); // toggles CSS highlight
  domText.innerText = domText.classList.contains("highlight")
    ? "Text is highlighted!"
    : "Highlight removed!";
});

// Extra DOM Example: dynamically adding element
let extraMsg = document.createElement("p");
extraMsg.innerText = "JavaScript just added me dynamically!";
document.body.appendChild(extraMsg);
