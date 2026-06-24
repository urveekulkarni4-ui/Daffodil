// ===================== PAGE NAVIGATION =====================
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Close mobile menu if open
  document.getElementById('nav-links').classList.remove('open');
}

// ===================== HAMBURGER MENU =====================
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('open');
});

// ===================== DONATE: AMOUNT SELECTION =====================
function selectAmount(btn, amount) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('custom-amount').value = '';
}

function clearSelected() {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
}

// ===================== FORM SUBMISSIONS =====================
document.querySelectorAll('.btn-primary').forEach(btn => {
  if (btn.textContent.includes('Send message')) {
    btn.addEventListener('click', function () {
      const inputs = this.closest('.contact-form-box').querySelectorAll('input, select, textarea');
      let allFilled = true;
      inputs.forEach(input => {
        if (!input.value.trim()) allFilled = false;
      });
      if (!allFilled) {
        alert('Please fill out all fields before sending.');
        return;
      }
      this.textContent = 'Message sent! ✿';
      this.style.background = '#4A7C3F';
      setTimeout(() => {
        this.textContent = 'Send message ✿';
        this.style.background = '';
        inputs.forEach(i => i.value = '');
      }, 3000);
    });
  }

  if (btn.textContent.includes('Donate now')) {
    btn.addEventListener('click', function () {
      const customVal = document.getElementById('custom-amount')?.value;
      const activeBtn = document.querySelector('.amount-btn.active');
      const amount = customVal || (activeBtn ? activeBtn.textContent : null);
      if (!amount) {
        alert('Please select or enter a donation amount.');
        return;
      }
      this.textContent = 'Thank you! ✿';
      this.style.background = '#4A7C3F';
      setTimeout(() => {
        this.textContent = 'Donate now ✿';
        this.style.background = '';
      }, 3000);
    });
  }
});

// ===================== NAVBAR SCROLL SHADOW =====================
window.addEventListener('scroll', function () {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
