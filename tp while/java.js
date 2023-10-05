
/*function calcular(){
    
    let n1 = parseFloat(document.getElementById("numero1").value)
    let n2 = parseFloat(document.getElementById("numero2").value)
    let suma = n1+n2
    
    i=0
    while (i <= suma){  
        document.write(suma + "<br>");
        i++;    
    }
    
}

*/

var repetir = "si";

while(repetir == "si"){
    n1=parseInt(prompt("ingrese un numero"))
    n2=parseInt(prompt("ingrese otro numero"))
    operacion =prompt("ingrese la operacion")
    suma = n1+n2;
    alert("la suma es:" + suma);
    repetir =prompt("desea repetir");
}

