
 function encrip()
 {
    var text= document.getElementById("input1").value.toLowerCase();
    //i para mayúsuculas y minúsculas
    //g para toda la oración
    //m es para múlitples líneas
    var txtencr=text.replace(/e/igm,"enter");
    var txtencr=txtencr.replace(/o/igm,"ober");
    var txtencr=txtencr.replace(/i/igm,"imes");
    var txtencr=txtencr.replace(/a/igm,"ai");
    var txtencr=txtencr.replace(/ei/igm,"ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML=txtencr;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    
    
 }

 function desencrip()
 {
    var text= document.getElementById("input1").value.toLowerCase();
    //i para mayúsuculas y minúsculas
    //g para toda la oración
    //m es para múlitples líneas
    var txtencr=text.replace(/enter/igm,"e");
    var txtencr=txtencr.replace(/ober/igm,"o");
    var txtencr=txtencr.replace(/imes/igm,"i");
    var txtencr=txtencr.replace(/ai/igm,"a");
    var txtencr=txtencr.replace(/ufat/igm,"u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML=txtencr;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    
    
 }
 function copy()
 {
    var cont = document.querySelector("#text2");
    cont.select();
    document.execCommand("cut");
    alert("¡se ha copiado en el portapapeles!");
    
    
 }
