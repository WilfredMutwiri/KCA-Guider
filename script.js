// // password reset
// let passRest = document.querySelector('#passReset')
// passRest.addEventListener('click', resetPop)
//  function resetPop(){
//   let email = prompt(`Enter the email address used to register your account.`)
//   if (email.endsWith('@gmail.com') === false) {
//     alert('Enter correct email address')
//   } else {
//     alert(
//       `An email has been sent to ${email} successfully, Kindly log into the email address for more instructions.`
//     )
//   }
// }

// reveal navbar
let navReveal = document.querySelector('#menu svg')
let navLinks = document.querySelector('#navHolder ul')
navReveal.addEventListener('click',(e)=> {
  navLinks.classList.toggle('active')
});
// faqs reveal
// let quiz=document.getElementById("faqs");
// let answer=document.getElementById("ans")
// quiz.addEventListener("click",(e)=>{
//   answer.style.left="auto";
// })

