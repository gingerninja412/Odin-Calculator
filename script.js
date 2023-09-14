//screen resources
const numbers = $(".number");
const operations = $(".operation");
const clear = $("#clear");
const equals = $("#equals");
const sumDisplay = $("#sumDisplay");
const numberDisplay = $("#numberDisplay");

//control variables

//processing functions

//button Functions
numbers.click(function () {
  let text = numberDisplay.text();
  text = text + $(this).text();
  numberDisplay.text(text);
});

operations.click(function () {
  let symbols = /[+\-/*]/;
  let string = sumDisplay.text();
  if (numberDisplay.text().length == 0) {
    numberDisplay.text("Error no number entered");
  }
  if (symbols.test(string[string.length - 1]) == true) {
    numberDisplay.text("input a number not operation");
  }
});
