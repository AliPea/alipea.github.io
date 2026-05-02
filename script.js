document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          document.querySelector('.form-row').style.display = 'none';
          document.getElementById('confirm').style.display = 'block';
          form.reset();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});