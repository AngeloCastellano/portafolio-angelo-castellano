let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let direccion = document.getElementById("direccion").value
    let fecha = document.getElementById("fecha").value
    if(nombre != "" && apellido != "" && edad != "" && direccion != "" && fecha != ""){
        alert(nombre + ", " + apellido + ", " + edad + ", " + direccion + ", " + fecha)
    }else{
        alert("rellene todos los datos")
    }
})
