// function valid() {
//     //inputs


let username;
let password;
let conf_password;
let uname;
let email;
let gender;
let hobbie_a;
let hobbie_b;
let dateValue;
let selectedValue;


//valid username


function isusername() {
   username = document.getElementById('username').value;
   let u_pattern = /^[A-Za-z][A-Za-z0-9_]{3,15}$/;


   if (username == "") {
       document.getElementById('uname-error').innerHTML = "Please fill Username"
       document.getElementById('username').style.border = "1px solid red"
   }
   else if (!u_pattern.test(username)) {
       document.getElementById('uname-error').innerHTML = "invalid"
       document.getElementById('username').style.border = "1px solid red"
   }
   else {
       document.getElementById('uname-error').innerHTML = ""
       document.getElementById('username').style.border = "1px solid green"
      
   }
 
}


//valid password


function ispassword() {
   password = document.getElementById('password').value;
   let pass_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{4,12}$/;
   if (password == "") {
       document.getElementById('pwd-error').innerHTML = "Please fill Password"
       document.getElementById('password').style.border = "1px solid red"
   }
   else if (!pass_pattern.test(password)) {
       document.getElementById('pwd-error').innerHTML = "invalid"
       document.getElementById('password').style.border = "1px solid red"
   }
   else {
       document.getElementById('pwd-error').innerHTML = ""
       document.getElementById('password').style.border = "1px solid green"
   }


}
//conf-password
function confpassword() {
   password = document.getElementById('password').value;
   conf_password = document.getElementById('confirmpassword').value;


   if (conf_password == "") {
       document.getElementById('con-pwd-error').innerHTML = "Please fill Confirm Password"
       document.getElementById('confirmpassword').style.border = "1px solid red"
   }


   else if (!(password == conf_password)) {
       document.getElementById('con-pwd-error').innerHTML = "password and confirm password not same"
       document.getElementById('confirmpassword').style.border = "1px solid red"
   }


   else {
       document.getElementById('con-pwd-error').innerHTML = ""
       document.getElementById('confirmpassword').style.border = "1px solid green"


   }
}


// valid name
function isname() {
   uname = document.getElementById('name').value;
   name_pattern = /^[a-zA-z]{4,15}/




   if (uname == "") {
       document.getElementById('name-error').innerHTML = "Fill Name"
       document.getElementById('name').style.border = "1px solid red"
   }


   else if (!name_pattern.test(uname)) {
       document.getElementById('name-error').innerHTML = "invalid name"
       document.getElementById('name').style.border = "1px solid red"
   }


   else {
       document.getElementById('name-error').innerHTML = ""
       document.getElementById('name').style.border = "1px solid green"
   }
}


//valid mail


function isemail()
{
   email = document.getElementById('email').value;
   let mail_pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;






   if (email == "") {
       document.getElementById('email-error').innerHTML = " Please Fill email"
       document.getElementById('email').style.border = "1px solid red"
   }


   else if (!mail_pattern.test(email)) {
       document.getElementById('email-error').innerHTML = "invalid email"
       document.getElementById('email').style.border = "1px solid red"
   }


   else {
       document.getElementById('email-error').innerHTML = ""
       document.getElementById('email').style.border = "1px solid green"
   }


}


   //valid radio
   function isradio()
{
   let checked_gender = document.querySelector('input[name = "gender"]:checked');
   gender;


   if (checked_gender === null)  //checks the any one radio is selected
   {
       document.getElementById('gen-error').innerHTML = "Choose Gender"
   }
   else {
       document.getElementById('gen-error').innerHTML = ""
       gender = (checked_gender.value);
   }


}


   // valid checkbox
   function ishobbie()
   {
   let checkbox1 = document.getElementById('biking');
   let checkbox2 = document.getElementById('painting');
   hobbie_a;
   hobbie_b;


   if (!checkbox1.checked && !checkbox2.checked) {
       document.getElementById('chkbox-error').innerHTML = "Choose a Hobbie";
   }


   else {
       document.getElementById('chkbox-error').innerHTML = "";


       if (checkbox1.checked) {
           hobbie_a = checkbox1.value;
       }
       if (checkbox2.checked) {
           hobbie_b = checkbox2.value;
       }

     console.log(hobbie_a);
     console.log(hobbie_b);
   }
   }
  
   //valid date
   function isdate()
   {
   let dateInput = document.getElementById("date");
   dateValue = dateInput.value;


   if (dateValue == "") {
       document.getElementById('date-error').innerHTML = "Select date"
       document.getElementById('date').style.border = "1px solid red"
   }
   else {
       document.getElementById('date-error').innerHTML = ""
       document.getElementById('date').style.border = "1px solid green"


   }
 }




   //valid select


   function isselect()
   {
   let selectElement = document.getElementById("country");
   selectedValue = selectElement.value;
   if (selectedValue == "") {
       document.getElementById('select-error').innerHTML = "Select a country"
       document.getElementById('country').style.border = "1px solid red"
   }
   else {
       document.getElementById('select-error').innerHTML = ""
       document.getElementById('country').style.border = "1px solid green"
   }
}


function valid()
{
   isusername();
   ispassword();
   confpassword();
   isname();
   isemail();
   isradio();
   isdate();
   ishobbie();
   isselect();


   console.log(username);
   console.log(password);
   console.log(conf_password);
   console.log(uname);
   console.log(email);
   console.log(gender);
   console.log(hobbie_a);
   console.log(hobbie_b);
   console.log(dateValue);
   console.log(selectedValue);


 
}


















// let data = [];
   // data.push(username, password, conf_password, name, email, gender, hobbie_a, hobbie_b, dateValue, selectedValue);
   // console.log(data);



























