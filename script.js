function submit() {
  var input = document.getElementById('emailInput');
  var confirm = document.getElementById('confirm');
  var formRow = document.querySelector('.form-row');

  if (!input.value || !input.value.includes('@')) return;

  formRow.style.display = 'none';
  confirm.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submitBtn').addEventListener('click', submit);
  document.getElementById('emailInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') submit();
  });
});
