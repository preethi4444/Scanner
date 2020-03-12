$("#password").password('toggle');
function matchpass() {
    re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (document.f1.NewPwd.value == "") {
        document.getElementById("NewPwdSpan").innerHTML = "Enter New password ";
        return false;
    }
    else if (!re.test(document.f1.NewPwd.value)) {
        document.getElementById("NewPwdSpan").innerHTML = "password must atleast contain a uppercase,lower case,special character,digit and should have min 6 to max 16 characters";
        return false;
    }
    else {
        document.getElementById("NewPwdSpan").innerHTML = null;
    }


    if (document.f1.ConfirmPwd.value == "") {
        document.getElementById("ConfirmPwdSpan").innerHTML = "Enter confirm Password";
        return false;

    }
    else if (document.f1.NewPwd.value != document.f1.ConfirmPwd.value) {
        document.getElementById("ConfirmPwdSpan").innerHTML = "password must be same!";
        return false;
    }
    else {
        document.getElementById("ConfirmPwdSpan").innerHTML = "";
    }


    return true;

}  