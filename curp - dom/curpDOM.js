function consultaCurp(){
    var ap = document.getElementById('ap').value.toLowerCase();
    var am = document.getElementById('am').value.toLowerCase();
    var nom = document.getElementById('nom').value.toLowerCase();
    var sexo = document.getElementById('sexo').value.toLowerCase();
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var año = document.getElementById('año').value;
    var estado = document.getElementById('estado').value.toLowerCase();
    var min=4, minl=2;
    var nF = /^\d{4}$/;
    var est=0;
    /*console.log(ap);
    console.log(am);
    console.log(nom);
    console.log(sexo);
    console.log(dia);
    console.log(mes);
    console.log(año);
    console.log(estado);*/
    if(ap!=""&&am!=""&&nom!=""&&año!=""){
        if(ap.length>=minl&&am.length>=minl&&nom.length>=minl&&año.length>=min){
            if(nF.test(año)){
                est=1;
            }
            else{
                alert("LLenado incorrecto en el apartado de año");
            }
        }
        else{
            alert("Apellidos o nombre invalidos");
        }
    }
    else{
        alert("Faltan campos por llenar");
    }

    switch (est) {
        case 1:
            var l1=ap.charAt(0);
            var l2="";
            for(i=0; i<=ap.length; i++){
                if(ap.charAt(i)=="a"||ap.charAt(i)=="e"||ap.charAt(i)=="i"||ap.charAt(i)=="o"||ap.charAt(i)=="u"){
                    l2=ap.charAt(i);
                    i=ap.length;
                }
            }
            var l3=am.charAt(0);
            
            array = nom.split(" "),
            resultado = "";
            for (var i = 0; i < array.length; resultado = array[i][0], i++);
            var l5= año.charAt(2);
            var l6= año.charAt(3);
            var l7="";
            for(var i=1; i<=ap.length; i++){
                if(ap.charAt(i)!="a"&&ap.charAt(i)!="e"&&ap.charAt(i)!="i"&&ap.charAt(i)!="o"&&ap.charAt(i)!="u"){
                    l7=ap.charAt(i);
                    i=ap.length;
                }
            }
            var l8="";
            for(var i=1; i<=am.length; i++){
                if(am.charAt(i)!="a"&&am.charAt(i)!="e"&&am.charAt(i)!="i"&&am.charAt(i)!="o"&&am.charAt(i)!="u"){
                    l8=am.charAt(i);
                    i=am.length;
                }
            }
            aux=array.length;
            aux=aux-1;
            nom=array[aux];
            var l9="";
            for (var i = 1; i <= nom.length; i++){
                if(nom.charAt(i)!="a"&&nom.charAt(i)!="e"&&nom.charAt(i)!="i"&&nom.charAt(i)!="o"&&nom.charAt(i)!="u"){
                    l9=nom.charAt(i);
                    i=nom.length;
                }
            }
            var curp=l1+l2+l3+resultado+l5+l6+mes+dia+sexo+estado+l7+l8+l9;
            document.forms[0].elements[8].value=curp.toUpperCase();
            //console.log(curp.toUpperCase());
            break;
    
        default:
            break;
    }
}