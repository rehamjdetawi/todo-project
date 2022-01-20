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
