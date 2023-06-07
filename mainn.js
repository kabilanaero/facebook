let forml = document.querySelector("#forml");
forml.addEventListener('submit',resdata);

function resdata(e){
	e.preventDefault();
	let emaill = document.getElementById("emaill").value;
	let passwordl = document.getElementById("passwordl").value;
	
	let email = localStorage.getItem('Mob');
    console.log(email);
	let password = localStorage.getItem('psw');
	
	if(+emaill == +email && passwordl == password){
		alert("success");
        location.href='file:///E:/js/fb/tindex.html'
     
	}
	else{
		alert("incorrect");
	}
}
