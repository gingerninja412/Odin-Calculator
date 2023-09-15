//screen resources
const numbers = $(".number");
const operations = $(".operation");
const clear = $("#clear");
const equals = $("#equals");
const sumDisplay = $("#sumDisplay");
const numberDisplay = $("#numberDisplay");
const backspace = $("#backspace");
const point = $("#point");

//control variables
const letters = /[A-Za-z]/;
const symbols = /[+\-/*]/;
const numbersCheck = /[0-9]/;

//processing function
function evaluate() {
  let tokenArray = sumDisplay.text().split(" ");
  if (tokenArray[0] == "") {
    tokenArray.shift();
  }
  let number = numberDisplay.text();
  console.log(number);
  if (number.length != 0 && letters.test(number) == false) {
    tokenArray.push(number);
  }
  let currentOperation = "none";
  let accumulation = 0;
  tokenArray.forEach((element) => {
    if (numbersCheck.test(element) == true) {
      if (currentOperation == "none") {
        accumulation = parseFloat(element, 10);
      }
      if (currentOperation == "add") {
        accumulation = accumulation + parseFloat(element, 10);
      }
      if (currentOperation == "subtract") {
        accumulation = accumulation - parseFloat(element, 10);
      }
      if (currentOperation == "multiply") {
        accumulation = accumulation * parseFloat(element, 10);
      }
      if (currentOperation == "divide") {
        accumulation = accumulation / parseFloat(element, 10);
      }
    } else if (symbols.test(element) == true) {
      if (element == "+") {
        currentOperation = "add";
      }
      if (element == "-") {
        currentOperation = "subtract";
      }
      if (element == "*") {
        currentOperation = "multiply";
      }
      if (element == "/") {
        currentOperation = "divide";
      }
    }
  });
  accumulation = Math.round((accumulation + Number.EPSILON) * 100) / 100;
  return accumulation;
}

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
  } else if (string[string.length - 1] == "=") {
    string = number;
    console.log("this works");
    if ($(this).attr("id") == "multiply") {
      string = string + ` *`;
      sumDisplay.text(string);
      numberDisplay.empty();
    } else if ($(this).attr("id") == "divide") {
      string = string + ` /`;
      sumDisplay.text(string);
      numberDisplay.empty();
    } else {
      string = string + ` ${operation}`;
      sumDisplay.text(string);
      numberDisplay.empty();
    }
  } else if (string.length != 0) {
    let result = evaluate();
    if ($(this).attr("id") == "multiply") {
      string = "";
      string = string + ` ${result} *`;
      sumDisplay.text(string);
      numberDisplay.empty();
    } else if ($(this).attr("id") == "divide") {
      string = "";
      string = string + ` ${result} /`;
      sumDisplay.text(string);
      numberDisplay.empty();
    } else {
      string = "";
      string = string + ` ${result} ${operation}`;
      sumDisplay.text(string);
      numberDisplay.empty();
    }
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

equals.click(function () {
  let text = numberDisplay.text();
  let sumString = sumDisplay.text();
  let result = evaluate();
  sumString = sumString + ` ${text} =`;
  sumDisplay.text(sumString);
  numberDisplay.text(result);
});

backspace.click(function () {
  let text = numberDisplay.text().split("");
  text.pop();
  numberDisplay.text(text.join(""));
});

point.click(function () {
  let text = numberDisplay.text();
  if (text[text.length - 1] == "." || text.length == 0) {
    numberDisplay.text("Please enter a number");
    return;
  }
  if (letters.test(text) == true) {
    numberDisplay.empty();
    text = "";
  }
  text = text + $(this).text();
  numberDisplay.text(text);
});
