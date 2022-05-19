// var a = JSON.parse(localStorage.getItem("myKey"));
// alert(a)
// // var a = confirm("Press a button!");
// alert(a)
// localStorage.setItem("myKey",JSON.stringify(a));
// var nc = JSON.parse(localStorage.getItem("username"));
// alert(nc)
function about_ac_1(){
    document.getElementById("ab_ac_fix_1").style.visibility = "visible";
}
function fix_close_1(){
    document.getElementById("ab_ac_fix_1").style.visibility = "hidden";
}
function about_ac_2(){
    document.getElementById("ab_ac_fix_2").style.visibility = "visible";
}
function fix_close_2(){
    document.getElementById("ab_ac_fix_2").style.visibility = "hidden";
}
function about_ac_3(){
    document.getElementById("ab_ac_fix_3").style.visibility = "visible";
}
function fix_close_3(){
    document.getElementById("ab_ac_fix_3").style.visibility = "hidden";
}

// uzdevumi 
// piemērs
// function parbaude_p(){
//     alerts("lol")
    // var atbilde = document.getElementById("atbilde").value;
    // alert(atbilde)
    // alert("lol")
// }
// var uzd_one = 0
// var uzd_two = 0
// var uz_3 = 2
// var uz_4 = 2
// var uz_5 = 2
// var uz_6 = 2
// var uz_7 = 2
// var uz_8 = 2
// var uz_9 = 2
// var uz_10 = 2
// localStorage.setItem("uzd__1",JSON.stringify(uzd_one));
// localStorage.setItem("uzd__2",JSON.stringify(uzd_two));
// localStorage.setItem("uzd__3",JSON.stringify(uzd_tht));
// localStorage.setItem("uzd__4",JSON.stringify(uzd_fou));
// localStorage.setItem("uzd__5",JSON.stringify(uzd_fiv));
// localStorage.setItem("uzd__6",JSON.stringify(uzd_six));
// localStorage.setItem("uzd__7",JSON.stringify(uzd_sev));
// localStorage.setItem("uzd__8",JSON.stringify(uzd_eig));
// localStorage.setItem("uzd__9",JSON.stringify(uzd_nin));
// localStorage.setItem("uzd__10",JSON.stringify(uzd_ten));
function k_uz(){
    document.getElementById("uz_ta").style.visibility = "visible";
}
function close_ta_ka(){
    document.getElementById("uz_ta").style.visibility = "hidden";
}
function myFunction() {
    let atb = document.getElementById("atbilde").value;
    if (atb == "body") {
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else {
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }
}
function uzd_1() {
    let atb = document.getElementById("atbilde").value;
    if (atb == "/html") {
        var uzd_one = 1
        localStorage.setItem("uzd_1",JSON.stringify(uzd_one));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else {
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }
}
function uzd_2() {
    let atb = document.getElementById("atbilde").value;
    if (atb == "/head") {
        var uzd_two = 1
        localStorage.setItem("uzd_2",JSON.stringify(uzd_two));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else {
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }
}
function uzd_3() {
    let atb = document.getElementById("atbilde").value;
    if (atb == "/body") {
        uzd_thr = 1
        localStorage.setItem("uzd_3",JSON.stringify(uzd_thr));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else {
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }
}
function close_brid(){
    document.getElementById("bridinajums").style.visibility = "hidden";
}
function uzd_4() {
    let atb = document.getElementById("atbilde").value;
    if (atb == "<title>suns</title>") {
        uzd_fou = 1
        localStorage.setItem("uzd_4",JSON.stringify(uzd_fou));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else if(atb == '<title>"suns"</title>'){
        document.getElementById("bridinajums").style.visibility = "visible";
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }else{
            document.getElementById("brd_uzd_p").style.borderColor = "red";
            document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
        }
}
function uzd_5() {
    let atb_1 = document.getElementById("atbilde_1").value;
    let atb_2 = document.getElementById("atbilde_2").value;
    if (atb_1 == "<i>cukurs</i>" && atb_2 == "<b>sals</b>") {
        uzd_fiv = 1
        localStorage.setItem("uzd_5",JSON.stringify(uzd_fiv));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else if(atb_1 == "<b>sals</b>" && atb_2 == "<i>cukurs</i>"){
        document.getElementById("bridinajums").style.visibility = "visible";
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }else{
            document.getElementById("brd_uzd_p").style.borderColor = "red";
            document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
        }
}
function uzd_6() {
    let atb_1 = document.getElementById("atbilde_1").value;
    let atb_2 = document.getElementById("atbilde_2").value;
    if (atb_1 == "<hr>" && atb_2 == "<br>") {
        uzd_six = 1
        localStorage.setItem("uzd_6",JSON.stringify(uzd_six));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else if(atb_1 == "<hr></hr>" && atb_2 == "<br></br>"){
        document.getElementById("bridinajums").style.visibility = "visible";
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }else{
            document.getElementById("brd_uzd_p").style.borderColor = "red";
            document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
        }
}
function uzd_7() {
    let atb = document.getElementById("atbilde").value;
    if (atb == '<img src="gaiss.png" alt="gaiss">') {
        uzd_sev = 1
        localStorage.setItem("uzd_7",JSON.stringify(uzd_sev));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else if(atb == '<img src="gaiss.png" alt="gaiss"></img>'){
        document.getElementById("bridinajums").style.visibility = "visible";
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }else{
            document.getElementById("brd_uzd_p").style.borderColor = "red";
            document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
        }
}
function uzd_8() {
    let atb_1 = document.getElementById("atbilde_1").value;
    let atb_2 = document.getElementById("atbilde_2").value;
    let atb_3 = document.getElementById("atbilde_3").value;
    let atb_4 = document.getElementById("atbilde_4").value;
    let atb_5 = document.getElementById("atbilde_5").value;
    let atb_6 = document.getElementById("atbilde_6").value;
    let atb_7 = document.getElementById("atbilde_7").value;
    let atb_8 = document.getElementById("atbilde_8").value;
    let atb_9 = document.getElementById("atbilde_9").value;
    let atb_10 = document.getElementById("atbilde_10").value;
    console.log(atb_1)
    console.log(atb_1 + atb_2 + atb_3 + atb_4, atb_5, atb_6, atb_7, atb_8, atb_9, atb_10)
    if (atb_1 == "<table>" && atb_2 == "<tr>" && atb_3 == "<td></td>" && atb_4 == "<td></td>" && atb_5 == "</tr>" && atb_6 == "<tr>" && atb_7 == "<td></td>" && atb_8 == "<td></td>" && atb_9 == "</tr>" && atb_10 == "</table>") {
        uzd_eig = 1
        localStorage.setItem("uzd_8",JSON.stringify(uzd_eig));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else if(atb_1 == "<table>" && atb_10 == "</table>"){
        document.getElementById("bridinajums").style.visibility = "visible";
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }else{
            document.getElementById("brd_uzd_p").style.borderColor = "red";
            document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
        }
}
function uzd_9() {
    let atb = document.getElementById("atbilde").value;
    if (atb == '<a href="suns.html">suns</a>') {
        uzd_nin = 1
        localStorage.setItem("uzd_9",JSON.stringify(uzd_nin));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else if(atb == '<a href="suns.html"></a>'){
        document.getElementById("bridinajums").style.visibility = "visible";
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }else{
            document.getElementById("brd_uzd_p").style.borderColor = "red";
            document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
        }
}
function uzd_10() {
    let atb_1 = document.getElementById("atbilde_1").value;
    let atb_2 = document.getElementById("atbilde_2").value;
    if (atb_1 == "<h1>putns</h1>" && atb_2 == "<p>telefons</p>") {
        uzd_ten = 1
        localStorage.setItem("uzd_10",JSON.stringify(uzd_ten));
        document.getElementById("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else if(atb_1 == "<h1></h1>" && atb_2 == "<p></p>"){
        document.getElementById("bridinajums").style.visibility = "visible";
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }else{
            document.getElementById("brd_uzd_p").style.borderColor = "red";
            document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
        }
}
function radio_beta() {
    let atb = document.getElementById("atbilde").value;
    if (atb == "/head") {
        document.getElementsByClassName("brd_uzd_p").style.borderColor = "green";
        document.getElementById("brd_uzd_p").style.backgroundColor = "greenyellow";
    } else {
        document.getElementById("brd_uzd_p").style.borderColor = "red";
        document.getElementById("brd_uzd_p").style.backgroundColor = "pink";
    }
}
function f(){
    // alert("lol1")
    // var h_j = 20
    // var ho = 30
    // localStorage.setItem( 'memoriesdata', JSON.stringify( ho ) );
    // var arr = JSON.parse( localStorage.getItem('memoriesdata') );
    // localStorage.setItem( 'uzd_1', JSON.stringify( h_j ) );
    // var ha = JSON.parse( localStorage.getItem('uzd_1') );
    // alert(ha)
    // alert(arr)

    // var haw = JSON.parse( localStorage.getItem('uzd__1') );
    // alert(haw)
    // // arr = prompt("jes or no")
    // var ud_1 = JSON.parse(localStorage.getItem("uzd__1"));
    // var ud_2 = JSON.parse(localStorage.getItem("uzd__2"));
    // var ud_3 = JSON.parse(localStorage.getItem("uzd_3"));
    // var ud_4 = JSON.parse(localStorage.getItem("uzd_4"));
    // var ud_5 = JSON.parse(localStorage.getItem("uzd_5"));
    // var ud_6 = JSON.parse(localStorage.getItem("uzd_6"));
    // var ud_7 = JSON.parse(localStorage.getItem("uzd_7"));
    // var ud_8 = JSON.parse(localStorage.getItem("uzd_8"));
    // var ud_9 = JSON.parse(localStorage.getItem("uzd_9"));
    // var ud_10 = JSON.parse(localStorage.getItem("uzd_10"));


    // alert(ud_1)
    // alert(ud_2)
    // alert(ud_3)
    // alert(ud_4)
    // alert(ud_5)
    // alert(ud_6)
    // alert(ud_7)
    // alert(ud_8)
    // alert(ud_9)
    // alert(ud_10)
    // alert(uzd_1)
    // localStorage.setItem( 'memoriesdata', JSON.stringify( arr ) );
    // document.getElementById("text").innerHTML = "Hello JavaScript";
    // alert("lol")
}
var a = 0
// setInterval (function (){
//     evs();
// }, 100);
// function evs(){
//     var ud_1 = JSON.parse(localStorage.getItem("uzd_1"));
//     var ud_2 = JSON.parse(localStorage.getItem("uzd_2"));
//     var ud_3 = JSON.parse(localStorage.getItem("uzd_3"));
//     var ud_4 = JSON.parse(localStorage.getItem("uzd_4"));
//     var ud_5 = JSON.parse(localStorage.getItem("uzd_5"));
//     var ud_6 = JSON.parse(localStorage.getItem("uzd_6"));
//     var ud_7 = JSON.parse(localStorage.getItem("uzd_7"));
//     var ud_8 = JSON.parse(localStorage.getItem("uzd_8"));
//     var ud_9 = JSON.parse(localStorage.getItem("uzd_9"));
//     var ud_10 = JSON.parse(localStorage.getItem("uzd_10"));
//     var cikPavIzr = ud_1 + ud_2 + ud_3 + ud_4 + ud_5 + ud_6 + ud_7 + ud_8 + ud_9 + ud_10
//     document.getElementById("ck").innerHTML = cikPavIzr;
//     porcent = (cikPavIzr / 10) * 100
//     document.getElementById("prc").innerHTML = porcent + "%";
//     // alert(cikPavIzr)
//     // tb
//     if (ud_1 == 1){
//         document.getElementById("a_1").innerHTML = "Izdarits";
//         document.getElementById("a_1").style.color = "green";
//     }else{
//         document.getElementById("a_1").innerHTML = "Neizdaríts";
//         document.getElementById("a_1").style.color = "red";
//     }
//     if (ud_2 == 1){
//         document.getElementById("a_2").innerHTML = "Izdarits";
//         document.getElementById("a_2").style.color = "green";
//     }else{
//         document.getElementById("a_2").innerHTML = "Neizdaríts";
//         document.getElementById("a_2").style.color = "red";
//     }
//     if (ud_3 == 1){
//         document.getElementById("a_3").innerHTML = "Izdarits";
//         document.getElementById("a_3").style.color = "green";
//     }else{
//         document.getElementById("a_3").innerHTML = "Neizdaríts";
//         document.getElementById("a_3").style.color = "red";
//     }
//     if (ud_4 == 1){
//         document.getElementById("a_4").innerHTML = "Izdarits";
//         document.getElementById("a_4").style.color = "green";
//     }else{
//         document.getElementById("a_4").innerHTML = "Neizdaríts";
//         document.getElementById("a_4").style.color = "red";
//     }
//     if (ud_5 == 1){
//         document.getElementById("a_5").innerHTML = "Izdarits";
//         document.getElementById("a_5").style.color = "green";
//     }else{
//         document.getElementById("a_5").innerHTML = "Neizdaríts";
//         document.getElementById("a_5").style.color = "red";
//     }
//     if (ud_6 == 1){
//         document.getElementById("a_6").innerHTML = "Izdarits";
//         document.getElementById("a_6").style.color = "green";
//     }else{
//         document.getElementById("a_6").innerHTML = "Neizdaríts";
//         document.getElementById("a_6").style.color = "red";
//     }
//     if (ud_7 == 1){
//         document.getElementById("a_7").innerHTML = "Izdarits";
//         document.getElementById("a_7").style.color = "green";
//     }else{
//         document.getElementById("a_7").innerHTML = "Neizdaríts";
//         document.getElementById("a_7").style.color = "red";
//     }
//     if (ud_8 == 1){
//         document.getElementById("a_8").innerHTML = "Izdarits";
//         document.getElementById("a_8").style.color = "green";
//     }else{
//         document.getElementById("a_8").innerHTML = "Neizdaríts";
//         document.getElementById("a_8").style.color = "red";
//     }
//     if (ud_9 == 1){
//         document.getElementById("a_9").innerHTML = "Izdarits";
//         document.getElementById("a_9").style.color = "green";
//     }else{
//         document.getElementById("a_9").innerHTML = "Neizdaríts";
//         document.getElementById("a_9").style.color = "red";
//     }
//     if (ud_10 == 1){
//         document.getElementById("a_10").innerHTML = "Izdarits";
//         document.getElementById("a_10").style.color = "green";
//     }else{
//         document.getElementById("a_10").innerHTML = "Neizdaríts";
//         document.getElementById("a_10").style.color = "red";
//     }
//     if (cikPavIzr > 0 && cikPavIzr < 2.5){
//         document.getElementById("diagr_pr").style.borderTop = "30px solid yellow";
//     }else{
//     if (cikPavIzr > 2.5 && cikPavIzr < 4.9){
//         document.getElementById("diagr_pr").style.borderTop = "60px solid yellowgreen";
//     }else{
//     if (cikPavIzr > 4.9 && cikPavIzr < 7.5){
//         document.getElementById("diagr_pr").style.borderTop = "90px solid lightgreen";
//     }else{
//     if (cikPavIzr > 7,5 && cikPavIzr < 10){
//         document.getElementById("diagr_pr").style.borderTop = "120px solid green";
//     }}}}
// }