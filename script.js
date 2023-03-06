function jogar(elemento){
    var resp=document.getElementById("resp");
    resp.innerHTML=`D${elemento}-${Math.floor(1 + elemento*Math.random())}`
}

