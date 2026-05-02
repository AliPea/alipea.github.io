function submit() {
  var input = document.getElementById('emailInput');
  var confirm = document.getElementById('confirm');
  var formRow = document.querySelector('.form-row');

  if (!input.value || !input.value.includes('@')) return;

  formRow.style.display = 'none';
  confirm.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('submitBtn');
  var input = document.getElementById('emailInput');

  btn.addEventListener('click', submit);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') submit();
  });
});
