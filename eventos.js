document.addEventListener("DOMContentLoaded", function(e){

    const div_boton = document.getElementById("btn_div");

    const btn_saludar = document.getElementById("btn_saludar");

    div_boton.addEventListener("click", () =>{

        alert("Hola! Soy el div");
    } )

    btn_saludar.addEventListener("click", function(e) {

        alert("Hola");
        e.stopPropagation()
    })
} )
