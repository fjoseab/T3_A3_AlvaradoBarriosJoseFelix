function palabra(){
    var cadena = document.getElementById('cad').value;
    var letra = document.getElementById('letra').value;
    var numeroVocales = cadena.match(/[aeiou]/gi).length;
    var numeroConsonantes = cadena.match(/[qwrtypsdfghjklñzxcvbnm]/gi).length;
    var cantida=0;
    var cadenaNueva="";
    for(i=0; i<=cadena.length; i++){
        if(cadena.charAt(i)==letra){
            cantida++;
        }
    }
    for(i=0; i<=cadena.length; i++){
        if((i%2)==0){
            cadenaNueva+=cadena.charAt(i).toUpperCase();
        }
        else{
            cadenaNueva+=cadena.charAt(i).toLowerCase();
        }
        
    }
    document.getElementById('vocales').value=numeroVocales;
    document.getElementById('consonantes').value=numeroConsonantes;
    document.getElementById('nLetra').value=cantida;
    document.getElementById('cLoca').value=cadenaNueva;
}
