function reg()
	{

		var name= document.getElementById("LName, FName, Extension, NumStreet, Barangay, District, Contact, Email, Nationality,Region").value;
		var email= document.getElementById("t2").value;
		
		
        //info box expression code	
		var letters = /^[A-Za-z]+$/;
	

		if(name=='')
		{
			alert('Please Fill up the Form!');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else
		{				                            
               alert('Register Success');
			   // Redirecting to other page or webste code. 
			   
		}
	}
	//Clear
	function clearFunc()
	{
		document.getElementById("LName").value="";
		document.getElementById("FName").value="";
		document.getElementById("Extension").value="";
		document.getElementById("Barangay").value="";
		document.getElementById("NumStreet").value="";
		document.getElementById("District").value="";
		document.getElementById("Nationality").value="";
		document.getElementById("Email").value="";
		document.getElementById("Contact").value="";
		document.getElementById("Region").value="";
	
	}
