var objPeople = [
	{ // Object @ Admin index Start...
		username: "amlan127612@gmail.com",
		password: "12345"
	},
	  //Object @ Admin index End...
	  
	  
	{ // Object Member @ 1 index
		username: "none",
		password: "none"
	},
	{ // Object Member @ 2 index
		username: "none",
		password: "none"
	}

]
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
		  
		  window.location.href="science blog.html"
			/*console.log(username + " is logged in!!!")*/
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect email or password")
	
	
}






//Login Preloader Start...
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, none);
}

function showPage() {

document.querySelector(".wrapper_body").style.display = "none"; 

  document.getElementById("myDiv").style.display = "block";

}

//Login Preloader End...
