const signinBtn = document.getElementById('signinBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

signinBtn.addEventListener('click', handleSignIn);

function handleSignIn() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    shake(signinBtn);
    return;
  }

  signinBtn.textContent = 'Signing in…';
  signinBtn.style.pointerEvents = 'none';

  setTimeout(() => {
    signinBtn.textContent = '✓ Welcome back!';
    signinBtn.style.background = '#22a86e';
    signinBtn.style.boxShadow = '0 4px 18px rgba(34,168,110,.4)';
  }, 1200);
}

function shake(el) {
  el.classList.remove('shake');
  // Force reflow so the animation restarts if triggered multiple times
  void el.offsetWidth;
  el.classList.add('shake');
  el.addEventListener('animationend', () => el.classList.remove('shake'), { once: true });
}
