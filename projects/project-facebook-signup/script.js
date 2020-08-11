const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');

login.addEventListener('click', function () {
  alert(name.value);
});

// submit form
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
const rightContent = document.getElementsByClassName('right-content');
let invalid = false;

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const mailOrTel = document.getElementById('phone_email').value;
  const date = document.getElementById('birthdate').value;
  let count = 0;
  let checkedRadioValue;

  for (let i = 2; i < (inputArray.length - 3); i += 1) {
    const resultCheck = inputArray[i].checkValidity();
    if (resultCheck === false) {
      count += 1;
    }
  }

  if (count !== 0 && !invalid) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Campos inválidos';
    registerForm.appendChild(paragraph);
    invalid = true;
  } else {
    const radioArray = document.getElementsByName('gender');
    for (let i = 0; i < radioArray.length; i += 1) {
      if (radioArray[i].checked) {
        checkedRadioValue = radioArray[i].value;
      }
    }
    const pGender = document.createElement('p');
    pGender.innerHTML = checkedRadioValue;
    rightContent[0].insertBefore(pGender, rightContent[0].firstChild);
    const pDate = document.createElement('p');
    pDate.innerHTML = date;
    rightContent[0].insertBefore(pDate, rightContent[0].firstChild);
    const pMailOrTel = document.createElement('p');
    pMailOrTel.innerHTML = mailOrTel;
    rightContent[0].insertBefore(pMailOrTel, rightContent[0].firstChild);
    const pName = document.createElement('p');
    const ola = 'Olá, ';
    const space = ' ';
    pName.innerHTML = (ola + firstName + space + lastName);
    rightContent[0].insertBefore(pName, rightContent[0].firstChild);
  }
});


// radios
let personalizedGender = false;
const personalizedInput = document.createElement('input');
const personalizedRadio = document.getElementById('personalizado');
const maleRadio = document.getElementById('masculino');
const femaleRadio = document.getElementById('feminino');
const personalizedGenderContainer = document.getElementById('personalized-gender-flex');

personalizedRadio.addEventListener('click', function () {
  if (!personalizedGender) {
    personalizedInput.style.display = 'flex';
    personalizedInput.name = 'gender-custom';
    personalizedInput.placeholder = 'Gênero (opcional)';
    personalizedInput.className = 'gender-input';
    personalizedGenderContainer.appendChild(personalizedInput);
    personalizedGender = true;
  }
});

maleRadio.addEventListener('click', function () {
  if (personalizedGender) {
    personalizedInput.style.display = 'none';
    personalizedGender = false;
  }
});

femaleRadio.addEventListener('click', function () {
  if (personalizedGender) {
    personalizedInput.style.display = 'none';
    personalizedGender = false;
  }
});
