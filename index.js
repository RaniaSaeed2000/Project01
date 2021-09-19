function plusOne(){
    var count =document.getElementById('count');
    count.value++;
}
function minOne(){
    var count =document.getElementById('count');
    count.value--;
}
function plusOne1(){
    var count =document.getElementById('topi');
    count.value++;
}
function minOne1(){
    var count =document.getElementById('topi');
    count.value--;
}
/* Open Nav Function  */
function open_Nav() {
    document.getElementById("side").style.height = "235px";
    // document.getElementById("move_open").style.marginTop="235px";
    // document.getElementById("move_open").style.marginTop="0px";
    //document.getElementById("move_open").style.marginBottom="50px";
    document.getElementById("m-top1").style.marginTop = "235px";
    document.getElementById("m-top2").style.marginTop = "50px";
    document.getElementById("m-top3").style.marginTop = "50px";
    document.getElementById("m-top4").style.marginTop = "50px";
    document.getElementById("m-top5").style.marginTop = "50px";
    document.getElementById("m-top6").style.marginTop = "50px";
    document.getElementById("m-top7").style.marginTop = "50px";
    document.getElementById("m-top8").style.marginTop = "50px";
    document.getElementById("m-top9").style.marginTop = "50px";



}
/* Close Nav Function  */

function colse_Nav() {

    document.getElementById("side").style.height = "0px";
    document.getElementById("m-top1").style.marginTop = "10px";
    document.getElementById("m-top1").style.marginBottom = "10px";

    document.getElementById("m-top1").style.marginTop = "0px";
    document.getElementById("m-top2").style.marginTop = "0px";
    document.getElementById("m-top3").style.marginTop = "0px";
    document.getElementById("m-top4").style.marginTop = "0px";
    document.getElementById("m-top5").style.marginTop = "0px";
    document.getElementById("m-top6").style.marginTop = "0px";
    document.getElementById("m-top7").style.marginTop = "0px";
    document.getElementById("m-top8").style.marginTop = "0px";
    document.getElementById("m-top9").style.marginTop = "0px";

}
/* Login Validation */
function loginValidate() {

    var email = document.getElementById("your_email").value;
    var Password = document.getElementById("your_password").value;
    var error = document.getElementById("error");
    var text = "";

    if (email.length < 6 || email.indexOf('@') == -1 ) {


        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;

    }
    else if (Password != "rania" || Password == "") {

        if (Password != "rania" && Password != "") {
            text = "Wrong Password";
            error.innerHTML = text;
            return false;
        }
        if (Password == "") {
            text = "Enter your Password";
            error.innerHTML = text;
            return false;
        }

    }
    else {
        alert("Done");
       go();
        return true;
    }
}

function go()
{
    window.location.assign("cart.html");
}


function call(){


    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("inlineFormInputGroup").value; 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("isvalid");
    var PhoneNumber = document.getElementById("PhoneNumber").value;
    
    if(firstName.length < 5){
        error.innerHTML = "Please use a valid first name"
        return false
    } 
     if(lastName.length < 5){
        error.innerHTML = "Please use a valid last name"
        return false
    } 
     else if(username.length < 5){
        error.innerHTML = "Please use a valid username"
        return false
    } else if(email.length < 5 || email.indexOf("@") == -1){
        error.innerHTML = "Please use a valid E-mail"
        return false
    } else if(password.length < 5){
        error.innerHTML = "Please use a valid password"
        return false
    } else if(isNaN(PhoneNumber) || PhoneNumber.length != 10 ){
        error.innerHTML = "Please use a valid PhoneNumber"
        return false
    } else {
        error.innerHTML = "IT IS OK NOW !!!"
        return true;
    }
    
    
    }
    
/* Register Validation */

/*

function RegVal() {
    alert("nameeee");
    
    var fname = document.getElementById("fname").value;
    var lname  = document.getElementById("lname").value;
    var username  = document.getElementById("username").value;
    var email = document.getElementById("myemail").value;
    var phone  = document.getElementById("phone").value;
    var Password=document.getElementById("mypassword").value;
  


    var isvalid = document.getElementById("not_valid");
    var text="";
    if(fname =="" || fname.length <5 )
    {

        isvalid.style.display="block";
        text="Please Enter your first name";
        isvalid.innerHTML =text;
                return false;
       
    }
    else if(lname=="" || lname.length <5)
    {  text="Please Enter your last name";
    isvalid.innerHTML =text;
    return false;
   
    }
    else if(username=="" || username.length<5)
    {  text="Please Enter valid username";
    isvalid.innerHTML =text;
    return false;
   


   
    
    

    else {
        alert("Done");
        return true;
    }
} 
 */

    /*Dark Mode*/
var content=document.getElementsByTagName('body')[0];
var darkMode= document.getElementById('dark-change');
document.body.style.transition="all 1.5s";
var line=document.getElementById("grey_l");

darkMode.addEventListener('click' , function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    //document.body.classList.toggle('toggle_col');
    line.style.backgroundColor ="rgb(233, 236, 239)";
})


/*
    var icon = document.getElementById("icon");
    icon.onclick = function () {
        document.body.classList.toggle("dark");

        document.body.style.transition = "all ease 1s";
        if (document.body.classList.contains("dark")) {
            icon.src = "Images/sun.jpg";
        }
        else {
            icon.src = "Images/moon.jpg";
        }
    }*/

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
