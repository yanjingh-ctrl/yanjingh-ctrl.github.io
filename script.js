const toggle = document.querySelector('#languageToggle');
let language = localStorage.getItem('portfolio-language') || 'en';

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach((node) => {
    node.textContent = node.dataset[next];
  });
  toggle.textContent = next === 'en' ? '中文' : 'EN';
  localStorage.setItem('portfolio-language', next);
}

toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
document.querySelector('#year').textContent = new Date().getFullYear();
setLanguage(language);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
