import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const KEY_FORM = 'feedback-form-state';
let dataForm = {};

refs.form.addEventListener('submit', submitForm);
refs.form.addEventListener('input', throttle(inputForm, 100));
populateMessageOutput();

function submitForm(evt) {
  evt.preventDefault();

  if (dataForm.email || dataForm.message) {
    console.log(dataForm);
  }
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_FORM);
}

function inputForm(evt) {
  dataForm = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };

  const dataJSON = JSON.stringify(dataForm);
  localStorage.setItem(KEY_FORM, dataJSON);
}

function populateMessageOutput() {
  dataForm = JSON.parse(localStorage.getItem(KEY_FORM));

  if (dataForm) {
    refs.form.email.value = dataForm.email;
    refs.form.message.value = dataForm.message;
  }
}
