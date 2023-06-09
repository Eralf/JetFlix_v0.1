function val_username(x) {
	if(x.length < 4)
		return false;
	
	for(let i = 0; i < x.length; i++)
		if(x.charAt(i) >= 'a' && x.charAt(i) <= 'z' || x.charAt(i) >= 'A' && x.charAt(i) <= 'Z')
			return true;
	
	return false;
}
function val_password(x) {
	if(x.length < 8)
		return false;
	
	let alphabet = 0, number = 0;
	for(let i = 0; i < x.length; i++)
		if(x.charAt(i) >= 'a' && x.charAt(i) <= 'z' || x.charAt(i) >= 'A' && x.charAt(i) <= 'Z')
			alphabet++;
		else if(x.charAt(i) >= '0' && x.charAt(i) <= '9')
			number++;

	return (alphabet > 0 && number > 0 && alphabet + number == x.length);
}
function month_to_number(mm) {
	switch(mm) {
		case "Jan": return 1;
		case "Feb": return 2;
		case "Mar": return 3;
		case "Apr": return 4;
		case "May": return 5;
		case "Jun": return 6;
		case "Jul": return 7;
		case "Aug": return 8;
		case "Sep": return 9;
		case "Oct": return 10;
		case "Nov": return 11;
		case "Dec": return 12;
	}
}
var daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function val_date(dd, mm, yyyy) {
	let month = month_to_number(mm);
	if(month != 2)
		return (dd <= daysInAMonth[month-1]);
	
	// leap year
	if(yyyy % 4 == 0 && (yyyy % 100 != 0 || yyyy % 400 == 0))
		return (dd <= 29);
	else
		return (dd <= 28);
}




var form = document.getElementById("form");


function validate() {
	event.preventDefault();
	
	var err_msg = document.getElementById("err_msg");

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var password_confirm = document.getElementById("password_confirm").value;
	var dd = document.getElementById("dd").value;
	var mm = document.getElementById("mm").value;
	var yyyy = document.getElementById("yyyy").value;
	var gender = document.getElementById("male").checked ? "male" : (document.getElementById("female").checked ? "female" : "none");
	var tnc = document.getElementById("tnc").checked;

	if(username.length == 0) {
		err_msg.innerHTML = "Please enter a username";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(!val_username(username)) {
		err_msg.innerHTML = "Username should contain an<br>alphabet and be >= 4 characters";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(password.length == 0) {
		err_msg.innerHTML = "Please enter a password";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(!val_password(password)) {
		err_msg.innerHTML = "Password should contain letters and numbers,<br>no symbols, and be >= 8 characters";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(password_confirm.length == 0) {
		err_msg.innerHTML = "Please confirm your password";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(password_confirm != password) {
		err_msg.innerHTML = "\"Confirm Password\"<br>has to be the same as password";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(dd == "DD" || mm == "MM" || yyyy == "YYYY") {
		err_msg.innerHTML = "Please fill in your birthday";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(!val_date(dd, mm, yyyy)) {
		err_msg.innerHTML = "" + mm + " " + yyyy + " doesn't have " + dd + " days";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(gender == "none") {
		err_msg.innerHTML = "Please choose a gender";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else if(!tnc) {
		err_msg.innerHTML = "Please agree to the<br>Terms & Conditions";
		err_msg.style.fontSize = "16px";
		err_msg.style.color = "red";
	}
	else {
		// console.log("Username: " + username);
		// console.log("Password: " + password);
		// console.log("Confirm Password: " + password_confirm);
		// console.log("Date of birth: " + dd + " " + mm + " " + yyyy);
		// console.log("Gender: " + gender);
		// console.log("Terms & Conditions: " + tnc);
		
		// form.submit();
		window.location.href = form.action;
	}
}



