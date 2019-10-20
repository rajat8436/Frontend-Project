function as(){
	var x= document.getElementById("user")
	x.style.background="lightgreen"
	x.style.color="black"}

	function ab(){
	var x= document.getElementById("pass")
	x.style.background="lightblue";
	x.style.color="black"}

function ac(){
	var x= document.getElementById("user1")
	x.style.background="lightgreen";
	x.style.color="black"}

	function ad(){
	var x= document.getElementById("pass1")
	x.style.background="lightblue";
	x.style.color="black"}

	function ae(){
	var x= document.getElementById("pass2")
	x.style.background="lightgreen";
	x.style.color="black"}
	
	function af(){
	var x= document.getElementById("pass3")
	x.style.background="lightblue";
	x.style.color="black"}

	function ag()
	{
		alert("You have Successfully Logged In..");
	}

   function ah()
   {
   	alert("Account Creation Successfull..");
   }

   function w()
   {
		var x = document.getElementById("user").value;
  		var y = document.getElementById("pass").value;
  		if (x == "") {
    		alert("Username must be filled out");
    		return false;
  		}
 
    	if(y=="")
    	{
 			alert("Password must be filled out");
    		return false;
    	}
    	else
  		{
    		alert("You are successfully logged in!");
  		}

   }

   function c()
   {
		var x = document.getElementById("user1").value;
  		var y = document.getElementById("pass1").value;
  		var z = document.getElementById("pass2").value;
  		var a = document.getElementById("pass3").value;
  		if (x == "") {
    		alert("Username must be filled out");
    		return false;
  		}
 
    	if(y=="")
    	{
 			alert("Password must be filled out");
    		return false;
    	}
    	if(z=="")
    	{
 			alert("Repeat Password must be filled out");
    		return false;
    	}
    	if(a=="")
    	{
 			alert("Email Address must be filled out");
    		return false;
    	}
    	else
  		{
    		alert("You are successfully logged in!");
  		}

   }


   function ai()
   {
   	alert("We will help you to Create a new one..");
   }


