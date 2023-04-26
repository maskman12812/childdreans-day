var message1="Just one small act can change your life";
var message2="stay away from people who want to ruin your dreams";
var message3="when you change your thoughts, make sure to change the world";
var message4="Success is not final, faliuse is not fatal";
var message5="never give up until you success";
var message6="trust the prosses";
var message7="Never giveup"; 
var message8="Either you run the day or the day runs you";
var message9="after 8~10 years you will meet your soulmate";
var message10="you are lucky to be here";

function message(){
randomNumber=Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
if(randomNumber==1){
    document.getElementById("luckymessage").innerHTML=message1;
}
if(randomNumber==2){
    document.getElementById("luckymessage").innerHTML=message2;
}
if(randomNumber==3){
    document.getElementById("luckymessage").innerHTML=message3;
}
if(randomNumber==4){
    document.getElementById("luckymessage").innerHTML=message4;
}
if(randomNumber==5){
    document.getElementById("luckymessage").innerHTML=message5;
}
if(randomNumber==6){
    document.getElementById("luckymessage").innerHTML=message6;
}
if(randomNumber==7){
    document.getElementById("luckymessage").innerHTML=message7;
}
if(randomNumber==8){
    document.getElementById("luckymessage").innerHTML=message8;
}
if(randomNumber==9){
    document.getElementById("luckymessage").innerHTML=message9;
}
if(randomNumber==10){
    document.getElementById("luckymessage").innerHTML=message10;
}
}