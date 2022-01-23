var Name = prompt("Enter you name");
console.log(Name);
var gender = prompt("Enter your gender").toLocaleLowerCase();
switch (gender) {
    case "male": console.log("male");
    var title="Mr"
        break;
    case "female": console.log("female");
    var title="Ms"
        break;
    default: console.log("inavalid input");
    title="";
        break;
}
var age=prompt("Enter your age");
if(age<=0){
    alert("invalid age");
}else{
    console.log(age);
}
var text = "Welcoming massege\n Press OK or Cancel to confirm Welcoming massege";
if (confirm(text) == true) {
  text = "You pressed OK!";
  alert("Hello " +title+" "+ Name);
} else {
  text = "You canceled!";
 

}


// var arr1=[prompt("Are you at university?"),
// prompt("do you have a task?")
// ,prompt("do you complete the task?")];
// var arr1=[];
var q1=prompt("Are you at university?");
if(q1==="")
{
    alert("invalid")
}
var q2=prompt("do you have a task?");
if(q2==="")
{alert("invalid");}
q3=prompt("do you complete the task?");
if(q3==="")
{alert("invalid");}
var arr1=[q1,q2,q3];
arrTraverse(arr1);
function arrTraverse(arr){
for( var x=arr.length;x>=0;x--)
{
    console.log(arr[x]);
}
}

