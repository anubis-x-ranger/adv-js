function showData(choice) {
  document.getElementById("info").innerHTML = "";
  //objects
  if (choice == "object") {
    let li = document.createElement("li");
    li.textContent = "Object is a Non-primitive datatype";
    var info = document.querySelector("#info");
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Objects are variables too. But objects can contain many values.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "The values are written as name:value pairs (name and value separated by a colon).";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "You define (and create) a JavaScript object with an object literal but can also do using constructor fumnctions.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Objects can also have methods. Methods are actions that can be performed on objects.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Methods are stored in properties as function definitions.";
    info.appendChild(li);
  }
  //arrays
  else if (choice == "arrays") {
    let li = document.createElement("li");
    li.textContent =
      "An array is a special variable, which can hold more than one value.";
    var info = document.querySelector("#info");
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "It is a common practice to declare arrays with the const keyword.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "For simplicity, readability and execution speed, use the array literal method.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Array indexes start with 0.[0] is the first element. [1] is the second element.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      'Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.';
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array.";
    info.appendChild(li);
  }
  //functions
  else if (choice == "functions") {
    let li = document.createElement("li");
    li.textContent =
      "A Function is much the same as a Procedure or a Subroutine, in other programming languages.";
    var info = document.querySelector("#info");
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "A JavaScript function is a block of code designed to perform a particular task.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "A JavaScript function is executed when 'something' invokes it (calls it).";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "A JavaScript function is defined with the 'function' keyword, followed by a name, followed by parentheses ().";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Function parameters are listed inside the parentheses () in the function definition.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Inside the function, the arguments (the parameters) behave as local variables.";
    info.appendChild(li);
  }
  //Strings
  else if (choice == "strings") {
    let li = document.createElement("li");
    li.textContent =
      "A string (or a text string) is a series of characters like 'John Doe'.";
    var info = document.querySelector("#info");
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "A JavaScript string is zero or more characters written inside quotes.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "You can use single or double quotes.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "You can use quotes inside a string, as long as they don't match the quotes surrounding the string.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "The solution to avoid this problem, is to use the backslash escape character.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "For best readability, programmers often like to avoid code lines longer than 80 characters.";
    info.appendChild(li);
  }
  //Numbers
  else if (choice == "numbers") {
    let li = document.createElement("li");
    li.textContent =
      "JavaScript has only one type of number. Numbers can be written with or without decimals.";
    var info = document.querySelector("#info");
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Integers (numbers without a period or exponent notation) are accurate up to 15 digits.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "The maximum number of decimals is 17.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "JavaScript uses the + operator for both addition and concatenation. Numbers are added.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "JavaScript strings can have numeric content.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "NaN is a JavaScript reserved word indicating that a number is not a legal number.";
    info.appendChild(li);
  }
  //null
  else if (choice == "null") {
    let li = document.createElement("li");
    li.textContent =
      'In JavaScript null is "nothing". It is supposed to be something that doesn\'t exist.';
    var info = document.querySelector("#info");
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "In JavaScript, the data type of null is an object.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "You can consider it a bug in JavaScript that typeof null is an object.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "It should be null. ";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "You can empty an object by setting it to null.";
    info.appendChild(li);
  }
  //Undefined
  else if (choice == "undefined") {
    let li = document.createElement("li");
    li.textContent =
      "In JavaScript, a variable without a value, has the value undefined.";
    var info = document.querySelector("#info");
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "The type is also undefined.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent =
      "Any variable can be emptied, by setting the value to undefined.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "The type will also be undefined.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "An empty value has nothing to do with undefined.";
    info.appendChild(li);

    li = document.createElement("li");
    li.textContent = "An empty string has both a legal value and a type.";
    info.appendChild(li);
  }
}
