// login page
// forgot password
let passRest=document.querySelector("#passReset");
passRest.addEventListener("click",resetPop);
function resetPop(){
    let email=prompt(`Enter the email address used to register your account.`);
    if(email.endsWith("@gmail.com")===false){
        alert("Enter correct email address")
    }
    else{
        alert(`An email has been sent to ${email} successfully, Kindly log into the email address for more instructions.`);
    }
}