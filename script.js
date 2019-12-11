const msg = document.querySelector('.msg');

function animateForm(){
//arrows down
const arrows = document.querySelectorAll('.fa-arrow-down');
arrows.forEach(arrow =>{
arrow.addEventListener('click',() =>{

//get the input of the current box
const input = arrow.previousElementSibling;
//get the parent
const parent = arrow.parentElement;
//get the next form that will come up - the parent of the next Sibling
const nextInput = parent.nextElementSibling;



//check for validation
if(input.type === "text" && validateUser(input)){  //if username is valid
  nextForm(parent,nextInput);  //bring in the next input
  msg.innerHTML = '';
}
else if (input.type === "email" && validateEmail(input)){
  nextForm(parent,nextInput);
  msg.innerHTML = '';
}
else if(input.type === "password" && validatePassword(input)){
  nextForm(parent,nextInput);
  msg.innerHTML = '';
}
else{
  parent.style.animation = "shake 0.5s ease" ; //if it doesn't validate, apply the shake animation
}


})

})

}
 //User validation
 function validateUser(user){
   if(user.value.length < 5){
     msg.innerHTML = 'Username should have at least 5 characters';
   message('#c71010');

   }
   else{
     message('#0aa150');
     return true;
   }
 }

 function validateEmail(email){
   const valid =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if(valid.test(email.value)){
   message('#0aa150');
  return true;
 }
 else{
   msg.innerHTML='The email address is incorrect'
message('#c71010');
 }
 }

 //User validation
 function validatePassword(password){
   if(password.value.length < 5){
     msg.innerHTML='Password should have at least 5 characters';
   message('#c71010');


   }
   else{
     message('#0aa150');
     return true;
   }
 }

 //get the next input -animation

 function nextForm(parent,nextInput){
   parent.classList.add ('inactive'); //the actual div will fade out
   parent.classList.remove('active');//remove the active div from it
   nextInput.classList.add('active'); //bring in the next form to animate

 }
  function message(color){
    document.body.style.background = color;

  }

animateForm();
