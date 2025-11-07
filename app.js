// Language dictionaries (EN default, AR alternative)
const i18n = {
  en: {
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_clients: 'Clients',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_title: 'Your one‑stop shop for air conditioning needs',
    hero_sub: 'Fast · Reliable · Affordable',
    cta_call: 'Call Us',
    cta_whatsapp: 'WhatsApp',
    services_title: 'Our Services',
    svc_design: 'Central HVAC Designing',
    svc_design_desc: 'Custom HVAC solutions designed to international standards.',
    svc_energy: 'Energy Efficiency Services',
    svc_energy_desc: 'Audits, smart upgrades, and heat recovery integration.',
    svc_pm: 'Projects Management',
    svc_pm_desc: 'Execution management, supervision, and risk control.',
    svc_comm: 'System Commissioning',
    svc_comm_desc: 'Pre‑startup inspection, performance tuning, documentation.',
    svc_maint: 'Integrated Maintenance',
    svc_maint_desc: 'Operation and maintenance for major projects.',
    projects_title: 'Our Projects',
    clients_title: 'Our Customers',
    about_title: 'About the Company',
    about_body: 'Premier Aerocool Service is a leading provider of air conditioning and central cooling systems in the Kingdom, serving airports, commercial complexes, hospitals, hotels, and factories with a skilled engineering team.',
    vision_title: 'Our Vision',
    vision_body: 'To be a trusted provider of integrated cooling solutions, delivering superior performance, sustainability, and reliability.',
    message_title: 'Our Message',
    message_body: 'We adopt innovative systems aligned with global technologies to support the Kingdom’s sustainable development.',
    contact_title: 'Contact Us',
    contact_phone: 'Phone:',
    rotate_phrases: [
      'Supply & installation of all A/C units',
      'Annual maintenance contracts',
      'Energy efficiency & smart upgrades',
      'Professional duct cleaning'
    ]
  },
  ar: {
    nav_services: 'الخدمات',
    nav_projects: 'المشاريع',
    nav_clients: 'عملاؤنا',
    nav_about: 'من نحن',
    nav_contact: 'تواصل',
    hero_title: 'وجهتك الواحدة لاحتياجات التكييف والتبريد',
    hero_sub: 'سريع · موثوق · بأسعار مناسبة',
    cta_call: 'اتصل بنا',
    cta_whatsapp: 'واتساب',
    services_title: 'خدماتنا',
    svc_design: 'تصميم أنظمة التكييف المركزي',
    svc_design_desc: 'حلول تكييف مخصصة وفق المعايير الدولية.',
    svc_energy: 'خدمات كفاءة الطاقة',
    svc_energy_desc: 'تدقيقات الطاقة والترقيات الذكية واستعادة الحرارة.',
    svc_pm: 'إدارة المشاريع',
    svc_pm_desc: 'إدارة التنفيذ والإشراف والتحكم بالمخاطر.',
    svc_comm: 'اختبار وتشغيل الأنظمة',
    svc_comm_desc: 'فحص ما قبل التشغيل وضبط الأداء والتوثيق.',
    svc_maint: 'الصيانة التشغيلية المتكاملة',
    svc_maint_desc: 'تشغيل وصيانة أنظمة المشاريع الكبرى.',
    projects_title: 'مشاريعنا',
    clients_title: 'عملاؤنا',
    about_title: 'عن الشركة',
    about_body: 'تعد بريميير إير كول مزودًا رائدًا لأنظمة التكييف والتبريد المركزي في المملكة، لخدمة المطارات والمجمعات التجارية والمستشفيات والفنادق والمصانع بفريق هندسي متخصص.',
    vision_title: 'رؤيتنا',
    vision_body: 'أن نكون مزوداً موثوقاً للحلول المتكاملة بكفاءة واستدامة عالية.',
    message_title: 'رسالتنا',
    message_body: 'نعتمد أنظمة مبتكرة مواكبة لأحدث التقنيات لدعم التنمية المستدامة.',
    contact_title: 'تواصل معنا',
    contact_phone: 'الهاتف:',
    rotate_phrases: [
      'توريد وتركيب جميع وحدات التكييف',
      'عقود صيانة سنوية',
      'تحسين كفاءة الطاقة والترقيات الذكية',
      'تنظيف مجاري الهواء باحترافية'
    ]
  }
};

let currentLang = 'en';
let currentTheme = (localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

function applyI18n(lang){
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  // Toggle button labels
  const toggles = [document.getElementById('langToggle'), document.getElementById('langToggleMobile')].filter(Boolean);
  toggles.forEach(btn => btn.textContent = lang === 'ar' ? 'EN' : 'العربية');
}

function toggleMenu(){
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('hidden');
}

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (header) {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

document.getElementById('menuBtn')?.addEventListener('click', toggleMenu);
document.getElementById('langToggle')?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyI18n(currentLang);
});
document.getElementById('langToggleMobile')?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyI18n(currentLang);
});

// Service Filter
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => 
      btn.classList.remove('active')
    );
    // Add active class to clicked button
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    const services = document.querySelectorAll('.card.card-accent');
    
    services.forEach(service => {
      if (filter === 'all' || service.classList.contains(filter)) {
        service.style.display = '';
        service.style.opacity = '1';
      } else {
        service.style.opacity = '0';
        setTimeout(() => {
          service.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Initialize
applyI18n(currentLang);
applyTheme(currentTheme);

// FAQ Interactions
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isOpen = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isOpen) {
      faqItem.classList.add('active');
    }
  });
});

// IntersectionObserver for reveal animations with enhanced thresholds and timing
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      // Add staggered animation delays based on data attribute
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.animationDelay = `${delay * 150}ms`;
      observer.unobserve(entry.target);
    }
  });
}, { 
  threshold: [0.15, 0.5, 0.75],
  rootMargin: '0px 0px -10% 0px'
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Stagger reveal delays
document.querySelectorAll('[data-reveal]').forEach(el => {
  const d = Number(el.getAttribute('data-reveal')) || 0;
  el.style.animationDelay = `${d * 100}ms`;
});

// THEME
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const label = theme === 'dark' ? '☀️' : '🌙';
  const toggleEls = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')].filter(Boolean);
  toggleEls.forEach(b => b.textContent = label);
}

function toggleTheme(){
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
}

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile')?.addEventListener('click', toggleTheme);

// Hero Rotator Typewriter
const rotatorEl = document.getElementById('heroRotator');
let rotateIndex = 0; let typing = true; let char = 0; let phrase = '';
function stepRotate(){
  const list = i18n[currentLang].rotate_phrases;
  if (!list || !rotatorEl) return;
  if (typing){
    phrase = list[rotateIndex % list.length];
    char++;
    rotatorEl.textContent = phrase.slice(0, char);
    if (char === phrase.length){ typing = false; setTimeout(stepRotate, 1200); return; }
    setTimeout(stepRotate, 40);
  } else {
    char--;
    rotatorEl.textContent = phrase.slice(0, char);
    if (char === 0){ typing = true; rotateIndex++; }
    setTimeout(stepRotate, 28);
  }
}
stepRotate();

// Re-apply rotator language on toggle
[document.getElementById('langToggle'), document.getElementById('langToggleMobile')].forEach(btn => btn?.addEventListener('click', ()=>{
  rotateIndex = 0; typing = true; char = 0; phrase = ''; setTimeout(stepRotate, 300);
}));

// Header scroll behavior and shape animations
function initHeaderAndShapes() {
  const header = document.querySelector('.site-header');
  const shapes = document.querySelectorAll('.shape');
  const heroContent = document.querySelector('.hero-content');
  
  // Initial animations
  shapes.forEach((shape, i) => {
    shape.style.opacity = '0';
    shape.style.transform = 'scale(0.8)';
    setTimeout(() => {
      shape.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
      shape.style.opacity = '0.1';
      shape.style.transform = 'scale(1)';
    }, i * 200);
  });

  // Scroll behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    
    // Parallax effect on shapes
    const scrolled = window.scrollY;
    shapes.forEach((shape, i) => {
      const speed = i % 2 ? 0.1 : -0.1;
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Initialize animations
initHeaderAndShapes();

// Particles (snowflakes)
function initFlakes(){
  const host = document.getElementById('particles');
  if (!host) return;
  const count = Math.min(18, Math.floor(window.innerWidth / 80));
  for (let i=0;i<count;i++) spawnFlake(host);
}
function spawnFlake(host){
  const f = document.createElement('div');
  f.className = 'flake';
  const size = 10 + Math.random()*10; f.style.width = `${size}px`; f.style.height = `${size}px`;
  f.style.left = Math.random()*100 + 'vw';
  f.style.top = (-10 - Math.random()*30) + 'vh';
  const fall = 12 + Math.random()*22; // seconds
  const sway = 4 + Math.random()*6; // seconds
  f.style.animationDuration = `${fall}s, ${sway}s`;
  f.addEventListener('animationend', () => { f.remove(); spawnFlake(host); });
  host.appendChild(f);
}
initFlakes();

// Testimonials carousel
(function(){
  const items = Array.from(document.querySelectorAll('.testi-item'));
  const prevBtn = document.querySelector('.testi-nav.prev');
  const nextBtn = document.querySelector('.testi-nav.next');
  if (!items.length) return;

  let active = 0;
  let auto = null;

  function setActive(i){
    items.forEach(it => it.classList.remove('active'));
    active = (i + items.length) % items.length;
    items[active].classList.add('active');
  }

  function next(){ setActive(active + 1); }
  function prev(){ setActive(active - 1); }

  prevBtn?.addEventListener('click', () => { prev(); resetAuto(); });
  nextBtn?.addEventListener('click', () => { next(); resetAuto(); });

  // keyboard accessibility
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  function resetAuto(){
    clearInterval(auto);
    auto = setInterval(next, 6000);
  }

  setActive(0);
  resetAuto();
})();

// Scroll-to-top behavior
(function(){
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  function check(){
    if (window.scrollY > 300) btn.classList.add('show'); else btn.classList.remove('show');
  }
  window.addEventListener('scroll', check);
  btn.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  // initial
  check();
})();

// Header scroll color change and hero blob entrance
(function(){
  const header = document.querySelector('.site-header');
  const blob = document.querySelector('.hero-blob');
  if (!header) return;
  function onScroll(){
    if (window.scrollY > 80) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
  // subtle blob entrance
  if (blob){
    blob.style.transform += ' translateY(-6px)';
    blob.style.transition = 'transform 1.2s ease-out, opacity 1.2s ease-out';
    setTimeout(()=>{ blob.style.transform = 'rotate(-6deg) translateY(0)'; blob.style.opacity = '1'; }, 200);
  }
})();


