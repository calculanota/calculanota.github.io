function InputAsNumber(id) {
    var text = document.getElementById(id).value.trim();
    text.replace(",", ".");
    var as_number = parseFloat(text);
    return ValidNumbers(as_number) ? as_number : NaN;
}

function SetInput(id, v) {
    let elem = document.getElementById(id);
    elem.value = v.toFixed(2);

    elem.style.backgroundColor = "#7FFF00";
    setTimeout(
        function() {
            elem.style.backgroundColor = "white";
        },
        400
    );
}

function GetPesos(id) {
    var text = document.getElementById(id).value.trim();
    var pesos = text.split(" ").map(Number);
    return pesos;
}

function ValidNumbers() {
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return false;
        }
    }
    return true;
}
