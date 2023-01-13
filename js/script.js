function validateUsername(){
    if(document.myForm.username.value==""){
        document.getElementById("usernameError").innerHTML = "Please enter a username";
    }

    if(document.myForm.username.value!=""){
        document.getElementById("usernameError").innerHTML = "";
        if(document.myForm.username.value.length < 8){
            document.getElementById("usernameError").innerHTML = "Please use atleast 8 characters";
        }
        else{
            document.getElementById("usernameError").innerHTML = "";
        }
    }
}

function validateFirstName(){
    if(document.myForm.firstname.value==""){
        document.getElementById("firstnameError").innerHTML = "Please enter your first name";
    }

    if(document.myForm.firstname.value!=""){
        document.getElementById("firstnameError").innerHTML = "";
    }
}

function validateEmail(){
    if(document.myForm.email.value==""){
        document.getElementById("emailError").innerHTML = "Please enter an email address";
    }

    if(document.myForm.email.value!=""){
        document.getElementById("emailError").innerHTML = "";
    }
}

function validatePassword(){
    if(document.myForm.pass.value==""){
        document.getElementById("passError").innerHTML = "Please enter a password";
    }

    if(document.myForm.pass.value!=""){
        document.getElementById("passError").innerHTML = "";
        if(document.myForm.pass.value!=""){
            document.getElementById("passError").innerHTML = "";
            if(document.myForm.pass.value.length < 8){
                document.getElementById("passError").innerHTML = "Please use atleast 8 characters";
            }
            else{
                document.getElementById("passError").innerHTML = "";
            }
        }
    }
}

function validateRepass(){
    if(document.myForm.re_pass.value==""){
        document.getElementById("re_passError").innerHTML = "Please repeat your password";
    }
    if(document.myForm.re_pass.value!=""){
        document.getElementById("re_passError").innerHTML = "Please repeat your password";
        if(document.myForm.re_pass.value!=document.myForm.pass.value){
            document.getElementById("re_passError").innerHTML = "Repeat password doesn't match";
        }
        else{
            document.getElementById("re_passError").innerHTML = "";
        }
    }
}

function validateAll(){
    let username = document.myForm.username.value;
    let firstname = document.myForm.firstname.value;
    let email = document.myForm.email.value;
    let pass = document.myForm.pass.value;
    let re_pass = document.myForm.re_pass.value;
    if(username!="" && firstname!="" && email!="" && pass!="" && re_pass!="" && username.length > 7 && pass.length > 7 && (pass == re_pass)){
        document.getElementById("signup").disabled = false;
        document.getElementById("registerSuccess").innerHTML = "You already have an existing account";
    }
    else{
        document.getElementById("signup").disabled = true;
        document.getElementById("registerSuccess").innerHTML = "";
    }
    //alert("Successfully registered! Login your account now")
}

function validateLoginUsername(){
    if(document.myLoginForm.l_username.value==""){
        document.getElementById("l_usernameError").innerHTML = "Please enter your username";
    }

    if(document.myLoginForm.l_username.value!=""){
        document.getElementById("l_usernameError").innerHTML = "";
    }
}

function validateLoginPassword(){
    if(document.myLoginForm.l_pass.value==""){
        document.getElementById("l_passError").innerHTML = "Please enter your password";
    }

    if(document.myLoginForm.l_pass.value!=""){
        document.getElementById("l_passError").innerHTML = "";
    }
}

function validateLogin(){
    let username = document.myForm.username.value;
    let pass = document.myForm.pass.value;
    let l_username = document.myLoginForm.l_username.value;
    let l_pass = document.myLoginForm.l_pass.value;
    if(username==l_username && pass==l_pass){
        window.location.href = "dashboard.html";
    }
    else{
        alert("Invalid username or password!");
    }
}

