document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
   * 0. THEME TOGGLE (LIGHT/DARK NEOBRUTALISM)
   * ========================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  };

  // Initialize Theme
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }

  /* ==========================================
   * 1. MOBILE NAVBAR TOGGLE
   * ========================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  navToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });


  /* ==========================================
   * 2. STICKY NAVBAR & BACK-TO-TOP BUTTON
   * ========================================== */
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('btn-scroll-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky Navbar
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll to Top Button
    if (scrollPos > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  /* ==========================================
   * 3. TYPEWRITER EFFECT
   * ========================================== */
  const typewriterElement = document.getElementById('typewriter');
  const roles = [
    'Frontend Developer', 
    'UI/UX Enthusiast', 
    'Software Engineer', 
    'Problem Solver'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  const type = () => {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Deleting characters
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // faster deleting
    } else {
      // Adding characters
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120; // normal typing speed
    }

    // Checking word completion states
    if (!isDeleting && charIndex === currentRole.length) {
      // Word completed, pause before starting deletion
      isDeleting = true;
      typingSpeed = 2000; // pause at full word
    } else if (isDeleting && charIndex === 0) {
      // Word completely deleted, cycle to next word
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // brief pause before next word
    }

    setTimeout(type, typingSpeed);
  };

  // Start typewriter if element exists
  if (typewriterElement) {
    type();
  }


  /* ==========================================
   * 4. SCROLLSPY (ACTIVE LINK HIGHLIGHTING)
   * ========================================== */
  const sections = document.querySelectorAll('section[id]');
  
  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    // Detect when section occupies 60% of viewport height
    rootMargin: '-30% 0px -40% 0px'
  });

  sections.forEach(section => {
    scrollSpyObserver.observe(section);
  });


  /* ==========================================
   * 5. CONTACT FORM & CUSTOM TOAST NOTIFICATION
   * ========================================== */
  // Dapatkan kunci akses gratis di https://web3forms.com/
  const WEB3FORMS_ACCESS_KEY = "c0f0777c-3160-495f-949c-b284299184e6"; 

  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');
  const submitButton = document.getElementById('contact-submit');

  // Custom Toast Creator Function
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Add appropriate icon based on toast type
    const checkIcon = `
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
    const errorIcon = `
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    `;

    toast.innerHTML = `
      ${type === 'success' ? checkIcon : errorIcon}
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.style.animation = 'fade-out 0.4s ease forwards';
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, 4000);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameField = document.getElementById('contact-name');
      const emailField = document.getElementById('contact-email');
      const messageField = document.getElementById('contact-message');

      // Basic validation
      if (!nameField.value.trim() || !emailField.value.trim() || !messageField.value.trim()) {
        showToast('Mohon isi semua kolom formulir!', 'error');
        return;
      }

      // Check if API key is not configured yet
      if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" || !WEB3FORMS_ACCESS_KEY) {
        showToast('Form gagal dikirim! Silakan atur Access Key Web3Forms Anda di script.js.', 'error');
        return;
      }

      // Modify Button state to Loading
      const originalBtnHTML = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = `
        Mengirim...
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="spinner" style="animation: spin 1s linear infinite;">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
      `;

      // CSS keyframe injection for loading spinner
      if (!document.getElementById('spinner-keyframes')) {
        const style = document.createElement('style');
        style.id = 'spinner-keyframes';
        style.textContent = '@keyframes spin { 100% { transform: rotate(360deg); } }';
        document.head.appendChild(style);
      }

      // Send form data to Web3Forms API
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            message: messageField.value.trim()
          })
        });

        const result = await response.json();

        if (response.status === 200 || result.success) {
          showToast(`Halo ${nameField.value.trim()}, pesan Anda telah berhasil dikirim!`);
          contactForm.reset();
        } else {
          showToast(result.message || 'Gagal mengirim pesan, coba lagi nanti.', 'error');
        }
      } catch (error) {
        showToast('Terjadi kesalahan koneksi internet.', 'error');
      } finally {
        // Restore Button state
        submitButton.disabled = false;
        submitButton.innerHTML = originalBtnHTML;
      }
    });
  }

  /* ==========================================
   * 6. CUSTOM CURSOR (NEOBRUTALISM STYLE)
   * ========================================== */
  const customCursor = document.querySelector('.custom-cursor');

  if (customCursor) {
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (hasHover) {
      document.addEventListener('mousemove', (e) => {
        if (!customCursor.classList.contains('visible')) {
          customCursor.classList.add('visible');
        }
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
      });

      document.addEventListener('mouseleave', () => {
        customCursor.classList.remove('visible');
      });

      const interactiveSelector = 'a, button, input, textarea, select, .social-link, .project-card, .timeline-item, .info-card';
      
      const addHover = () => customCursor.classList.add('hover');
      const removeHover = () => customCursor.classList.remove('hover');

      const updateHoverState = () => {
        const hoverables = document.querySelectorAll(interactiveSelector);
        hoverables.forEach(item => {
          item.removeEventListener('mouseenter', addHover);
          item.removeEventListener('mouseleave', removeHover);
          item.addEventListener('mouseenter', addHover);
          item.addEventListener('mouseleave', removeHover);
        });
      };

      // Run initially
      updateHoverState();

      // Re-observe DOM changes to hook up to new elements (like Toast notifications)
      const observer = new MutationObserver(() => {
        updateHoverState();
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
});
