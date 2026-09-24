// Create a function passwordStrength(password) that returns "Weak", "Medium" , or "Strong" based on length, uppercase letters, numbers, and special characters.
function passwordStrength(password) {
    let uppercase = false;
    let number = false;
    let special = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];
        if (ch >= "A" && ch <= "Z") {
            uppercase = true;
        } else if (ch >= "0" && ch <= "9") {
            number = true;
        } else if (!(ch >= "a" && ch <= "z")) {
            special = true;
        }
    }
    if (password.length >= 8 && uppercase && number && special) {
        return "Strong";
    } else if (password.length >= 6 && (uppercase || number)) {
        return "Medium";
    } else {
        return "Weak";
    }
}
console.log(passwordStrength("Hello@123"));