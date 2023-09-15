//screen resources
const numbers = $(".number");
const operations = $(".operation");
const clear = $("#clear");
const equals = $("#equals");
const sumDisplay = $("#sumDisplay");
const numberDisplay = $("#numberDisplay");

//control variables
const letters = /[A-Za-z]/;
const symbols = /[+\-/*]/;
const numbersCheck = /[0-9]/;
//processing functions

//button Functions
numbers.click(function () {
  let text = numberDisplay.text();
  if (letters.test(text) == true) {
    numberDisplay.empty();
    text = "";
    console.log(letters.test(text));
  }
  text = text + $(this).text();
  numberDisplay.text(text);
});

operations.click(function () {
  let string = sumDisplay.text();
  let number = numberDisplay.text();
  let operation = $(this).text();
  if (numberDisplay.text().length == 0 || letters.test(number) == true) {
    numberDisplay.text("Error no number entered");
  } else {
    if ($(this).attr("id") == "multiply") {
      string = string + ` ${number} *`;
      sumDisplay.text(string);
      numberDisplay.empty();
    } else if ($(this).attr("id") == "divide") {
      string = string + ` ${number} /`;
      sumDisplay.text(string);
      numberDisplay.empty();
    } else {
      string = string + ` ${number} ${operation}`;
      sumDisplay.text(string);
      numberDisplay.empty();
    }
  }
});

clear.click(function () {
  sumDisplay.empty();
  numberDisplay.empty();
});
