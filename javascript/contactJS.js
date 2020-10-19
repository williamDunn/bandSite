 function validate(){
	var name = document.getElementById("name").value;
		if(name == null){
			alert("Please enter your name");
			return false;
			
	var regEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;
			
	var email = document.getElementById("email").value;
		if(email == null || email != regEmail){
			alert("Please enter a valid email");
			return false;
			
	var comments = document.getElementById("comments").value;
		if(comments == null){
			alert("Please enter comments");
			return false;
		}
