function cong(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML= Number(a) + Number(b);
}
function tru(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML= Number(a) - Number(b);
}
function nhan(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML= Number(a) * Number(b);
}
function chia(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML= Number(a) / Number(b);
}
function up(){
    let a = document.getElementById('number3').value;
    let b=parseInt(a)
    document.getElementById('number3').value= b+2;
}
function down(){
    let a =document.getElementById('number3').value;
    let b=parseInt(a)
    document.getElementById('number3').value= b-2;
}
// function jsjs(){
//     document.getElementById('APjFqb').value;
//     document.querySelector('[name="btnK"]').click();
// }