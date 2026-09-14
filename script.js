function getFormvalue(event) {
    //Write your code here

	event.preventDefault();
	const form = document.getElementById("form1");
	const firstName = form.elements["fname"].values.trim();
	const lastName = form.elements["lname"].value.trim();
	alert(firstName + " " + lastName);
}
