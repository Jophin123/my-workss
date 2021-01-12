multiplication = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let result = document.querySelector("#result")
    let res = num1 * num2;
    //result.textContent = "result is" + res;
    // alert("result is" + res);
    result.textContent = "result is " + res;
}
division = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let result = document.querySelector("#result")
    let res = num1 / num2;
    result.textContent = "result is " + res;
}