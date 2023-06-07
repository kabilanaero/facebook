let form = document.querySelector("form");
form .addEventListener("submit", storeData);

function storeData(e){
   e.preventDefault();

   let firstName=document.getElementById("inp").value;
   let surName = document.getElementById("inp-1").value;
   let mobile = document.getElementById("inp-2").value;
   let password = document.getElementById("inp-3").value;
   let div = document.getElementById("ubdate");

   localStorage.setItem('Name',firstName);
   localStorage.setItem('Surname',surName);
   localStorage.setItem('Mob',mobile);
   localStorage.setItem('psw',password);
 
   if(firstName ===""){
    div.innerHTML = " Please Enter your name";
    div.style.color="red";
   }
   else if(surName === ""){
    div.innerHTML = "Please Enter your Surname";
    div.style.color = "red";
   }
   else if(mobile === "" || (isNaN(mobile))){
    div.innerHTML = "Please Enter your MobileNo or E-mail";
    div.style.color = "red";
   }
   else if(password === ""){
    div.innerHTML = "Please Enter your Password";
    div.style.color = "red";
   }
   else{
    div.innerHTML = "succeful your submission click to login button";
    div.style.color = "blue";
   }
}