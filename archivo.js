var datoscorrectos = true

function imagen(resultado){
    if(resultado>=6){
        document.getElementById('image').style.display = "block"; document.getElementById('image').src="https://i.pinimg.com/originals/80/89/67/80896736380a6349a49ee228a74dc632.gif";
    }
    else{
        document.getElementById('image').style.display = "block"; document.getElementById('image').src="https://media.tenor.com/HseHXaJz2OAAAAAM/sad-cry.gif";
    }
}

function ValidarDatosCampos(){
    var m1 = parseInt(document.getElementById("matematica").value);
    var m2 = parseInt(document.getElementById("lengua").value);
    var m3 = parseInt(document.getElementById("efsi").value);

    var camposincompletos = false;

    if(isNaN(m1) || isNaN(m2) || isNaN(m3)){
        datoscorrectos = false
        alert("¡¡Debes completar todos los campos con números!!");
    }
    else{
        datoscorrectos = true
    }
}

function Validardatosnumeros(){
    var m1 = parseInt(document.getElementById("matematica").value);
    var m2 = parseInt(document.getElementById("lengua").value);
    var m3 = parseInt(document.getElementById("efsi").value);

    var primernumeroestabien = true
    if(m1 > 10 || m1 < 1){
        primernumeroestabien = false
    }
    var segundonumeroestabien = true
    if(m2 > 10 || m2 < 1){
        segundonumeroestabien = false
    }
    var tercernumeroestabien = true
    if(m3 > 10 || m3 < 1){
        tercernumeroestabien = false
    }

    if(!primernumeroestabien){
        document.getElementById("matematica").style.backgroundColor = "red"
    }
    else{
        document.getElementById("matematica").style.backgroundColor = "green"
    }
    if(!segundonumeroestabien){
        document.getElementById("lengua").style.backgroundColor = "red"
    }
    else{
        document.getElementById("lengua").style.backgroundColor = "green"
    }
    if(!tercernumeroestabien){
        document.getElementById("efsi").style.backgroundColor = "red"
    }
    else{
        document.getElementById("efsi").style.backgroundColor = "green"
    }

    return m1 > 10 || m1 < 1 || m2 > 10 || m2 < 1 || m3 > 10 || m3 < 1
}


function CalcularPromedio()
{
  
  var materia = 0;
  var m1 = parseInt(document.getElementById("matematica").value);
  var m2 = parseInt(document.getElementById("lengua").value);
  var m3 = parseInt(document.getElementById("efsi").value);
  
  ValidarDatosCampos()
  Validardatosnumeros()
  if(Validardatosnumeros()){
    imprimirResultado("Los numeros deben ser entre 1 y 10")
  }
  else{
    if(datoscorrectos){
        materia = ((m1 + m2 + m3) /3 )
    
        if(materia >= 6){
            document.getElementById("nose").style.color  = "green"
        }
        else{
            document.getElementById("nose").style.color  = "red"
        }
        imagen(materia)
        imprimirResultado("Tu promedio fue " + materia)
    }
  }

}

function Mayornota()
{
    var m1 = parseInt(document.getElementById("matematica").value);
    var m2 = parseInt(document.getElementById("lengua").value);
    var m3 = parseInt(document.getElementById("efsi").value);
    var cual =  "La/s materia/s en la que mejor te fue es ";

    ValidarDatosCampos()
    Validardatosnumeros()
    if(Validardatosnumeros()){
        imprimirResultado("Los numeros deben ser entre 1 y 10")
    }
    else{
        if(datoscorrectos)
        {
            if(m1 > m2 && m1 > m3)
            {
                cual = cual + "Matematica"
                
            }
            else if(m2 > m3 && m2 > m1)
            {
                cual = cual + "Lengua"
            }
            else if(m3 > m2 && m3 > m1){
                cual = cual + "Efsi"
            }
            else if(m1 == m2 && m1 != m3){
                cual = cual + "Matematica y Lengua"
            }
            else if(m2 == m3 && m1 != m3){
                cual = cual + "Lengua y Efsi"
            }
            else if(m3 == m1 && m2 != m3){
                cual = cual + "Efsi y Matematica"
            }
            else{
                cual = "En todas las meterias te sacaste la misma nota"
            }
            document.getElementById("nose").style.color  = "blue"
        
            imprimirResultado(cual)   
        }
    }

    
}

function imprimirResultado(resultado){
    document.getElementById("nose").innerHTML = resultado
}