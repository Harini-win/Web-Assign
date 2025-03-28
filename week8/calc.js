function performCalculation() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    const operation = prompt("Choose operation");

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero.");
                return;
            }
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            alert("Invalid operation selected.");
            return;
    }

    alert(`The result of is: ${result}`);
}
function agechk(){
    const age = parseFloat(prompt("Enter the age:"));
    if (isNaN(age) || age<0) {
        alert("Please enter valid age.");
        return;
    }
    if(age>=18){
        alert("Can drive");
        return;
    }
    else{
        alert("Cannot drive");
        return;
    }
}
function chkStudent() {
    let isStudent = confirm("Are you a student?");
    if (isStudent) {
        let regNumber = prompt("Enter your registration number:");   
        if (regNumber) {
            alert("Registration number has been recorded.");
        } else {
            alert("Enter a  valid registration number.");
        }
    } else {
        alert("You are not a student.");
    }
}







function calculateTotal() {
    let adults = document.getElementById("adultTickets").value;
    let children = document.getElementById("childTickets").value;
    adults = parseInt(adults) || 0;
    children = parseInt(children) || 0;
    let total = (adults * 10) + (children * 5);
    document.getElementById("totalAmount").value = "₹" + total;
}
