const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);


fadeElements.forEach(el => {
  observer.observe(el);
});
