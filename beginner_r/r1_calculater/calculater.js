const calculate = () => {
  let number1 = parseFloat(prompt("Enter a number1:"));
  let number2 = parseFloat(prompt("Enter a number2:"));
  let result;

  let operations = prompt("Enter a operation +-/* :");

  switch (operations) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      result = "Invalid operation";
      console.error("Invalid operation");
  }
  alert(result);
  console.log(result);
};
calculate();
