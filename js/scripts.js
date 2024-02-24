// Declare variables
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
let passwordErrorMsg = document.getElementById("password-error-msg");
let passwordValue = "";
let confirmPasswordValue = "";

// Get value on input password change
// Call comparePassword function to
// verify values match
passwordInput.onchange = function () {
	passwordValue = passwordInput.value;
	comparePassword();
};

// Get value on input confirm password change
// Call comparePassword function to
// verify values match
confirmPasswordInput.onchange = function () {
	confirmPasswordValue = confirmPasswordInput.value;
	comparePassword();
};

// Compare password function
// Verifies values are equal
// If values are not equal, add error class and
// change visibility to visible for error message.
// If value are equal, remove error class from input
// elements and change error message visibiliy to hidden
function comparePassword() {
	if (
		passwordValue != "" &&
		confirmPasswordValue != "" &&
		passwordValue !== confirmPasswordValue
	) {
		passwordInput.classList.add("error");
		confirmPasswordInput.classList.add("error");
		passwordErrorMsg.style.visibility = "visible";
	} else {
		passwordInput.classList.remove("error");
		confirmPasswordInput.classList.remove("error");
		passwordErrorMsg.style.visibility = "hidden";
	}
}
