var objPeople = [
	{ // Object @ Admin index Start...
		username: "amlan127612@gmail.com",
		password: "*smadmin#"
	},
	  //Object @ Admin index End...
	  
	  
	{ // Object Member @ 1 index
		username: "sciencemind2020@gmail.com",
		password: "*smwebsite#"
	},
	{ // Object Member @ 2 index
		username: "sciencemind02@gmail.com",
		password: "*smwebsite#"
	},
	{ // Object Member @ 3 index
		  username: "joydeb2002cox@gmail.com",
		  password: "1234"
		},
	
		{ // Object Member @ 4 index
		username: "bishalcox@gmail.com",
		password: "01301689970"
	}
	

]
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
		  
		
	    
	    document.querySelector(".wrapper_body").style.display = "none"; 

      document.getElementById("myDiv").style.display = "block";




		  
		  
		 /* window.location.href="https://amlan-paul.github.io/Science-Mind/science%20blog.html"*/
			/*console.log(username + " is logged in!!!")*/
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect email or password")
	
	
}






//Login Preloader Start...
/*var myVar;

function myFunction() {
  myVar = setTimeout(showPage, none);
}

function showPage() {

document.querySelector(".wrapper_body").style.display = "none"; 

  document.getElementById("myDiv").style.display = "block";

}*/

/*function showpage(){
  document.querySelector(".wrapper_body").style.display = "none";
  window.location.href="science blog.html"
}*/

//Login Preloader End...
