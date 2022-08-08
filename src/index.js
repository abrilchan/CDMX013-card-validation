import validator from './validator.js';

// console.log(validator);


let submitButton = document.querySelector(".submit-button");

let cardNumb = document.querySelector("#cardNumb");


cardNumb.addEventListener('input', function(){
  cardNumb.value=cardNumb.value.replace(/[a-zA-Z]/g,'').replace(' ','');
})


submitButton.addEventListener('click', function(){
    let creditCardNumber = cardNumb.value;

   validator.isValid(creditCardNumber) ;

    

    validator.maskify(creditCardNumber);
    


  if (creditCardNumber=="")
  { {document.querySelector(".message").textContent = "Por favor, ingresa un número de tarjeta"}}
  else if (validator.isValid(creditCardNumber))
  {document.querySelector(".message").textContent = "¡Tarjeta validada exitosamente!"}
  else
  {document.querySelector(".message").textContent = "¡Lo sentimos, tu tarjeta no ha sido validada!"}
   

  cardNumb.value=validator.maskify(creditCardNumber);

} );



