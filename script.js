document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('notify-form');
  const emailInput = document.getElementById('email-input');
  const messageEl = document.getElementById('form-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email || !email.includes('@')) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.className = 'message error';
      return;
    }

    messageEl.textContent = "Thank you! We'll notify you when we launch.";
    messageEl.className = 'message success';
    emailInput.value = '';
  });
});
