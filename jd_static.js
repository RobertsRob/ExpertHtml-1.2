setInterval (function (){
    evs();
}, 100);
function evs(){
    var ud_1 = JSON.parse(localStorage.getItem("uzd_1"));
    var ud_2 = JSON.parse(localStorage.getItem("uzd_2"));
    var ud_3 = JSON.parse(localStorage.getItem("uzd_3"));
    var ud_4 = JSON.parse(localStorage.getItem("uzd_4"));
    var ud_5 = JSON.parse(localStorage.getItem("uzd_5"));
    var ud_6 = JSON.parse(localStorage.getItem("uzd_6"));
    var ud_7 = JSON.parse(localStorage.getItem("uzd_7"));
    var ud_8 = JSON.parse(localStorage.getItem("uzd_8"));
    var ud_9 = JSON.parse(localStorage.getItem("uzd_9"));
    var ud_10 = JSON.parse(localStorage.getItem("uzd_10"));
    var cikPavIzr = ud_1 + ud_2 + ud_3 + ud_4 + ud_5 + ud_6 + ud_7 + ud_8 + ud_9 + ud_10
    document.getElementById("ck").innerHTML = cikPavIzr;
    porcent = (cikPavIzr / 10) * 100
    document.getElementById("prc").innerHTML = porcent + "%";
    // alert(cikPavIzr)
    // tb
    if (ud_1 == 1){
        document.getElementById("a_1").innerHTML = "Izdarits";
        document.getElementById("a_1").style.color = "green";
    }else{
        document.getElementById("a_1").innerHTML = "Neizdaríts";
        document.getElementById("a_1").style.color = "red";
    }
    if (ud_2 == 1){
        document.getElementById("a_2").innerHTML = "Izdarits";
        document.getElementById("a_2").style.color = "green";
    }else{
        document.getElementById("a_2").innerHTML = "Neizdaríts";
        document.getElementById("a_2").style.color = "red";
    }
    if (ud_3 == 1){
        document.getElementById("a_3").innerHTML = "Izdarits";
        document.getElementById("a_3").style.color = "green";
    }else{
        document.getElementById("a_3").innerHTML = "Neizdaríts";
        document.getElementById("a_3").style.color = "red";
    }
    if (ud_4 == 1){
        document.getElementById("a_4").innerHTML = "Izdarits";
        document.getElementById("a_4").style.color = "green";
    }else{
        document.getElementById("a_4").innerHTML = "Neizdaríts";
        document.getElementById("a_4").style.color = "red";
    }
    if (ud_5 == 1){
        document.getElementById("a_5").innerHTML = "Izdarits";
        document.getElementById("a_5").style.color = "green";
    }else{
        document.getElementById("a_5").innerHTML = "Neizdaríts";
        document.getElementById("a_5").style.color = "red";
    }
    if (ud_6 == 1){
        document.getElementById("a_6").innerHTML = "Izdarits";
        document.getElementById("a_6").style.color = "green";
    }else{
        document.getElementById("a_6").innerHTML = "Neizdaríts";
        document.getElementById("a_6").style.color = "red";
    }
    if (ud_7 == 1){
        document.getElementById("a_7").innerHTML = "Izdarits";
        document.getElementById("a_7").style.color = "green";
    }else{
        document.getElementById("a_7").innerHTML = "Neizdaríts";
        document.getElementById("a_7").style.color = "red";
    }
    if (ud_8 == 1){
        document.getElementById("a_8").innerHTML = "Izdarits";
        document.getElementById("a_8").style.color = "green";
    }else{
        document.getElementById("a_8").innerHTML = "Neizdaríts";
        document.getElementById("a_8").style.color = "red";
    }
    if (ud_9 == 1){
        document.getElementById("a_9").innerHTML = "Izdarits";
        document.getElementById("a_9").style.color = "green";
    }else{
        document.getElementById("a_9").innerHTML = "Neizdaríts";
        document.getElementById("a_9").style.color = "red";
    }
    if (ud_10 == 1){
        document.getElementById("a_10").innerHTML = "Izdarits";
        document.getElementById("a_10").style.color = "green";
    }else{
        document.getElementById("a_10").innerHTML = "Neizdaríts";
        document.getElementById("a_10").style.color = "red";
    }
    if (cikPavIzr > 0 && cikPavIzr < 2.5){
        document.getElementById("diagr_pr").style.borderTop = "30px solid yellow";
    }else{
    if (cikPavIzr > 2.5 && cikPavIzr < 4.9){
        document.getElementById("diagr_pr").style.borderTop = "60px solid yellowgreen";
    }else{
    if (cikPavIzr > 4.9 && cikPavIzr < 7.5){
        document.getElementById("diagr_pr").style.borderTop = "90px solid lightgreen";
    }else{
    if (cikPavIzr > 7,5 && cikPavIzr < 10){
        document.getElementById("diagr_pr").style.borderTop = "120px solid green";
    }}}}
}
