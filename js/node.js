let input = prompt("Type a number", "0");

if (input == null) {
  alert("You cancelled the prompt");
} else if (isNaN(input)) {
  alert("Not a number please refresh and try again");
} else if (input > 0) {
  alert("Greater than zero: a positive number");
} else if (input < 0) {
  alert("Less than zero: a negative number");
} else if (input == 0) {
  alert("Hello Zero!!!");
} else {
  alert("I don't recognize your input");
}
