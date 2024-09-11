let calcView = document.getElementById("calc-view");

function addNumber(numberButton){
    /*
    PROPOSITO:
        Agrega un numero a 'calcView' segun el numero *numberButton*
        del boton precionado.
    PRECONDICIONES:
        Ninguna.
    PARAMETROS:
        - numberButton: Int. Numero del boton precionado
    */
    calcView.innerHTML += numberButton
}

function addSimbol(simbolButton){
    /*
    PROPOSITO:
        Agrega un simbolo a 'calcView' segun el simbolo *simbolButton*
        del boton precionado
    PRECONDICIONES:
        - Los caracteres lindantes a *simbolButton* deben ser espacios
    PARAMETROS:
        - simbolButton: Str. SImbolo del boton precionado.
    */
    calcView.innerHTML += simbolButton
}

function cleanView(){
    /*
    PROPOSITO:
        Limpia lo que todo lo que hay en 'calcView'.
    PRECONDICION:
        Ninguna.
    */
   calcView.innerHTML = ""
}

function calcExpresion(){
    /*
    PROPOSITO:
        Resuelve la expresion declarada en 'calcView'.
    PRECONDICION:
        Ninguna.
    */
        calcView.innerHTML = calcView.innerHTML.replaceAll("×","*")
        calcView.innerHTML = calcView.innerHTML.replaceAll("÷","/")
        
        calcView.innerHTML = eval(calcView.innerHTML)
}