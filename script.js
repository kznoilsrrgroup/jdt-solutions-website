document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMessage').textContent =
      'Thank you. Your enquiry has been captured on this demo form. Connect the form to your preferred email/form service before publishing.';
    this.reset();
  });
