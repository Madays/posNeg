function posNeg(){
    var a= parseInt(document.getElementById("a").value);
    var b= parseInt(document.getElementById("b").value);
    var estado= parseInt(document.getElementById("estado").value);
    
    if (estado==2){
        if ((a>0 && b<0)||(a<0 && b>0)){
        console.log("fb");
        document.getElementById("resultado").innerHTML="1"   ;
        }else{
            document.getElementById("resultado").innerHTML="0"   ;
        }
    }else if (estado==1){
        if (a<0 && b<0){
            console.log("fb");
            document.getElementById("resultado").innerHTML="1"   ;
        }else{
            document.getElementById("resultado").innerHTML="0"   ;
        }
    }
}
