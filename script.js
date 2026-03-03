    function switchTab(name, btn) {
    document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.svc-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    btn.classList.add('active');
  }

  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const page = document.getElementById('page-' + name);
    const nav = document.getElementById('nav-' + name);
    if (page) page.classList.add('active');
    if (nav) nav.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleFAQ(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  function submitForm() {
    const inputs = document.querySelectorAll('#page-contact input, #page-contact select, #page-contact textarea');
    let valid = true;
    inputs.forEach(i => { if (!i.value) valid = false; });
    if (!valid) { alert('Please fill in all fields before submitting.'); return; }
    document.getElementById('success-msg').style.display = 'block';
    inputs.forEach(i => i.value = '');
    setTimeout(() => { document.getElementById('success-msg').style.display = 'none'; }, 6000);
  }


