function convertir() {
    var numero = parseInt(document.getElementById('nDecimal').value);
    document.getElementById('nBinario').value=(numero.toString(2));
    document.getElementById('nOctal').value=(numero.toString(8));
    document.getElementById('nHexa').value=(numero.toString(16));
}