function validar() { 
   var nombre = document.getElementById('nombre').value;
   var apellidos = document.getElementById('apellidos').value;
   var email = document.getElementById('email').value;
   var fecha = document.getElementById('DPC_edit1_DD/MM/YYYY').value;
   var provincia = document.getElementById('provincia').value;
   var valido = true;
   
   if (nombre.length == 0 || parseInt(nombre)) {
      valido = false;
      document.getElementById('nombreHelp').style.visibility = "visible";
   }
   
   if (apellidos.length == 0 || parseInt(apellidos)) {
      valido = false;
      document.getElementById('apellidosHelp').style.visibility = "visible";
   }
   
   if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))) {
      valido = false;
      document.getElementById('emailHelp').style.visibility = "visible";
   }
   
   if (fecha == "") {
      valido = false;
      document.getElementById('fechaNacHelp').style.visibility = "visible";
   }
   
    if (provincia == 0) {
       valido = false;
       document.getElementById('provinciaHelp').style.visibility = "visible";
    }
   
   if (!aceptar.checked) {
      valido = false;
      document.getElementById('aceptarHelp').style.visibility = "visible";
   }

   return valido;
}

function quitarError(campo) {
    document.getElementById(campo).style.visibility = "hidden";
}

function limpiarResultado() {
   document.getElementById('resultado').innerHTML = "";
}