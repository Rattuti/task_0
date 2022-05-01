function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("Eメールが一致しません");
  const contentField = document.getElementById('content_field');
  element.appendChild(message);
  element.setAttribute('id', 'alert');
  element.classList.add("alert_color");
  emailComfirmField.addEventListener('input', e => {
    if (form.email.value !== form.email_confirm.value) {
      emailComfirmField.classList.add("alert_bg");
        if (!document.getElementById('alert')) {
          contentField.parentNode.insertBefore(element, contentField);
        }
    } else {
      document.getElementById('alert').remove()
      emailComfirmField.classList.remove("alert_bg");
    }
  });
};

window.onload = function () {
  emailValidation();
};