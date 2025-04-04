const result = document.getElementById("result");

function append(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}

function square() {
    try {
        result.value = Math.pow(eval(result.value), 2);
    } catch {
        result.value = "Error";
    }
}
