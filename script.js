let display = document.querySelector("#operazione")
function aggiorna_operazione(numero) {
    display.value += numero.innerText;
}
function risultato() {
    display.value = eval(display.value)
}
function aggiorna_display() {
    display.value = ""
}
function tastiera(tasto) {
    console.log(tasto.key)
    switch (tasto.key) {
        case '1':
            display.value += tasto.key
            break;
        case '2':
            display.value += tasto.key
            break;
        case '3':
            display.value += tasto.key
            break;
        case '4':
            display.value += tasto.key
            break;
        case '5':
            display.value += tasto.key
            break;
        case '6':
            display.value += tasto.key
            break;
        case '7':
            display.value += tasto.key
            break;
        case '8':
            display.value += tasto.key
            break;
        case '9':
            display.value += tasto.key
            break;
        case '0':
            display.value += tasto.key
            break;
        case 'Enter':
            risultato()
            break;
        case '+':
            display.value += tasto.key
            break;
        case '-':
            display.value += tasto.key
            break;
        case '/':
            display.value += tasto.key
            break;
        case '*':
            display.value += tasto.key
            break
        case 'Backspace':
            aggiorna_display()
            break;
    }

}