window.onload = (function () {
    LinkHandlers();
});

function LinkHandlers() {
    document.getElementById("button_calculate").onclick = Calculate;
}

function GetMF() {
    return InputAsNumber("input_mf");
}

function GetPF() {
    return InputAsNumber("input_pf");
}

function GetNF() {
    return InputAsNumber("input_nf");
}


function Calculate() {
    let mf = GetMF();
    let pf = GetPF();
    let nf = GetNF();

    let divisor = 2;

    if (ValidNumbers(mf, pf)) {
        let rpn = (mf + pf) / divisor;
        SetInput("input_nf", rpn);
        return true;
    }

    if (ValidNumbers(mf, nf)) {
        let rpf = (divisor * nf) - mf;
        SetInput("input_pf", rpf);
        return true;
    }

    if (ValidNumbers(pf, nf)) {
        let rmf = (divisor * nf) - pf;
        SetInput("input_mf", rmf);
        return true;
    }

    alert("Informações insuficientes ou inválidas");

    return false;
}
