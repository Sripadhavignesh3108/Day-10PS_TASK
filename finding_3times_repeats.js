
const prompt = require("prompt-sync")();
let num=+prompt("enter a number")
let num0="";
let num1="";
let num2="";
let num3="";
let num4="";
let num5=""; 
let num6="";
let num7="";
let num8="";
let num9="";

for(i=0;i<num.length;i++)
{
    if(num[i]==="0")
    {
        num0+=num[i]
        if(num0.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="1")
    {
        num1+=num[i]
        if(num1.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="2")
    {
        num2+=num[i]
        if(num2.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="3")
    {
        num3+=num[i]
        if(num3.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="4")
    {
        num4+=num[i]
        if(num4.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="5")
    {
        num5+=num[i]
        if(num5.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="6")
    {
        num6+=num[i]
        if(num6.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="7")
    {
        num7+=num[i]
        if(num7.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="8")
    {
        num8+=num[i]
        if(num8.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }
    if(num[i]==="9")
    {
        num9+=num[i]
        if(num9.length>=3) {console.log(`${num[i]},it a lucky number`)}
    }   
}