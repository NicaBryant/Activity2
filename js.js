

  
function getInputValue(){

        var lastName = document.getElementById("last_name").value;
        var extName = document.getElementById("ext_name").value;
        var firstName = document.getElementById("first_name").value;
        var middleName = document.getElementById("middle_name").value;
        var numberStreet = document.getElementById("number_street").value;
        var brgy = document.getElementById("barangay").value;
        var distr = document.getElementById("district").value;
        var cityMun = document.getElementById("city").value;
        var provnc = document.getElementById("province").value;
        var rgn = document.getElementById("region").value;
        var social = document.getElementById("email").value;
        var contNum = document.getElementById("contact").value;
        var nation = document.getElementById("nationality").value;
        
        
        
        // checkbox dislplay //
	
        document.write("Last Name: " + lastName + "<br>"); 
	   
        document.write("Extension Name: " + extName + "<br>");
        document.write("First Name: "  + firstName + "<br>");
        document.write("Middle Name: " + middleName + "<br>")
        document.write("Number/Street: " + numberStreet + "<br>")
        document.write("Barangay:" + brgy + "<br>");
        document.write("District:" + distr  + "<br>");
        document.write("City/Municipality " + cityMun + "<br>");
        document.write("Province: " + provnc + "<br>");
        document.write("Region: "  + distr + "<br>");
        document.write("Email: "  + social + "<br>") ;
        document.write("Contact NO. : " + conNum +"<br>");
        document.write("Nationality "  + nation + "<br>");
        
        
        

}
    
