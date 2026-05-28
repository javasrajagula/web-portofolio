document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
   * 0. RETRO SOUND EFFECTS (WEB AUDIO API)
   * ========================================== */
  const soundToggleBtn = document.getElementById('sound-toggle');
  const soundOnIcon = document.querySelector('.sound-on-icon');
  const soundOffIcon = document.querySelector('.sound-off-icon');

  let soundEnabled = localStorage.getItem('portfolio-sound') !== 'disabled';

  const setSoundState = (enabled) => {
    soundEnabled = enabled;
    localStorage.setItem('portfolio-sound', enabled ? 'enabled' : 'disabled');
    if (enabled) {
      soundOnIcon.style.display = 'block';
      soundOffIcon.style.display = 'none';
    } else {
      soundOnIcon.style.display = 'none';
      soundOffIcon.style.display = 'block';
    }
  };

  // Initialize sound state
  setSoundState(soundEnabled);

  // Synth a quick retro click (8-bit chip blip)
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'triangle'; // triangle waves sound retro/chiptune
      osc.frequency.setValueAtTime(550, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  };

  // Synth ascending/descending notes for dark/light transitions
  const playToggleSound = (isDark) => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'triangle';
      const now = ctx.currentTime;
      
      if (isDark) {
        // Ascending chord
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.setValueAtTime(375, now + 0.06);
        osc.frequency.setValueAtTime(500, now + 0.12);
      } else {
        // Descending chord
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.setValueAtTime(375, now + 0.06);
        osc.frequency.setValueAtTime(250, now + 0.12);
      }
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      
      osc.start();
      osc.stop(now + 0.2);
    } catch (e) {}
  };

  // Click handler for Sound Toggle
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      setSoundState(!soundEnabled);
      if (soundEnabled) {
        playClickSound();
      }
    });
  }

  // Bind click sounds to all interactive elements except toggle buttons
  const setupClickSounds = () => {
    const clickables = document.querySelectorAll('a, button:not(#theme-toggle):not(#sound-toggle):not(#palette-shuffle), input[type="submit"], input[type="button"], select');
    clickables.forEach(elem => {
      elem.removeEventListener('click', playClickSound);
      elem.addEventListener('click', playClickSound);
    });
  };
  
  setupClickSounds();
  
  // Re-observe dynamic nodes to hook sound click listeners
  const soundObserver = new MutationObserver(() => {
    setupClickSounds();
  });
  soundObserver.observe(document.body, { childList: true, subtree: true });

  /* ==========================================
   * 0.6. RANDOM COLOR PALETTE GENERATOR
   * ========================================== */
  const paletteShuffleBtn = document.getElementById('palette-shuffle');

  const palettes = [
    {
      name: 'Retro Default',
      colors: {
        '--color-yellow': '#FFD93D',
        '--color-green': '#6BCB77',
        '--color-blue': '#4D96FF',
        '--color-pink': '#FF6B6B',
        '--color-purple': '#B1AFFF',
        '--color-orange': '#FF9F29'
      }
    },
    {
      name: 'Cyberpunk Neon',
      colors: {
        '--color-yellow': '#FFE600',
        '--color-green': '#00FF66',
        '--color-blue': '#00E8FF',
        '--color-pink': '#FF007F',
        '--color-purple': '#9900FF',
        '--color-orange': '#FF5F00'
      }
    },
    {
      name: '80s Vaporwave',
      colors: {
        '--color-yellow': '#FFF47D',
        '--color-green': '#3BE8B0',
        '--color-blue': '#1AA2C4',
        '--color-pink': '#FF6B6B',
        '--color-purple': '#A179F2',
        '--color-orange': '#FFA45C'
      }
    },
    {
      name: 'Acid Rave',
      colors: {
        '--color-yellow': '#E1FA3C',
        '--color-green': '#1DF072',
        '--color-blue': '#1C85E8',
        '--color-pink': '#FA3C7B',
        '--color-purple': '#A33CFA',
        '--color-orange': '#FA9E3C'
      }
    },
    {
      name: 'Citrus Punch',
      colors: {
        '--color-yellow': '#F4D03F',
        '--color-green': '#27AE60',
        '--color-blue': '#2980B9',
        '--color-pink': '#E74C3C',
        '--color-purple': '#8E44AD',
        '--color-orange': '#E67E22'
      }
    }
  ];

  let currentPaletteIndex = parseInt(localStorage.getItem('portfolio-palette-index') || '0', 10);

  const applyPalette = (index) => {
    currentPaletteIndex = index;
    localStorage.setItem('portfolio-palette-index', index);
    const activePalette = palettes[index];
    
    Object.entries(activePalette.colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  // Initialize saved palette
  if (currentPaletteIndex !== 0) {
    applyPalette(currentPaletteIndex);
  }

  // Palette Shuffle click listener
  if (paletteShuffleBtn) {
    paletteShuffleBtn.addEventListener('click', () => {
      const nextIndex = (currentPaletteIndex + 1) % palettes.length;
      applyPalette(nextIndex);
      playClickSound();
      showToast(`Skema Warna: ${palettes[nextIndex].name}`);
    });
  }

  /* ==========================================
   * 0.7. THEME TOGGLE (LIGHT/DARK NEOBRUTALISM)
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
      playToggleSound(newTheme === 'dark');
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
          triggerConfetti();
          playSuccessMelody();
          contactForm.reset();
        } else {
          showToast(result.message || 'Gagal mengirim pesan, coba lagi nanti.', 'error');
          playErrorSound();
        }
      } catch (error) {
        showToast('Terjadi kesalahan koneksi internet.', 'error');
        playErrorSound();
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

  /* ==========================================
   * 7. PROJECT FILTER LOGIC
   * ========================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.classList.remove('fade-out');
          }, 20);
        } else {
          card.classList.add('fade-out');
          setTimeout(() => {
            if (card.classList.contains('fade-out')) {
              card.style.display = 'none';
            }
          }, 350);
        }
      });
    });
  });

  /* ==========================================
   * 8. RETRO TERMINAL INTERACTIVE CLI
   * ========================================== */
  const termInput = document.getElementById('terminal-input');
  const termOutput = document.getElementById('terminal-output');
  const termBody = document.getElementById('terminal-body');

  function playKeySound() {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800 + Math.random() * 200, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch (e) {}
  }

  function playErrorSound() {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  }

  function playSecretSound() {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const now = ctx.currentTime;
      const freqs = [300, 450, 600, 900, 1200];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.03, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch (e) {}
  }

  function playSuccessMelody() {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const now = ctx.currentTime;
      
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        
        gain.gain.setValueAtTime(0.04, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.15);
        
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.15);
      });
    } catch (e) {}
  }

  function triggerConfetti() {
    const btn = document.getElementById('contact-submit');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 + window.scrollX;
    const startY = rect.top + rect.height / 2 + window.scrollY;

    const colors = ['#FFD93D', '#6BCB77', '#4D96FF', '#FF6B6B', '#B1AFFF', '#FF9F29'];

    for (let i = 0; i < 60; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;

      const angle = Math.random() * Math.PI * 2;
      const velocity = 150 + Math.random() * 250;
      const destX = Math.cos(angle) * velocity;
      const destY = -Math.abs(Math.sin(angle)) * velocity - (50 + Math.random() * 100);
      const rotation = Math.random() * 720;

      particle.style.setProperty('--x-fallback', `${destX}px`);
      particle.style.setProperty('--y-fallback', `${destY}px`);
      particle.style.setProperty('--r-fallback', `${rotation}deg`);

      const size = 6 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      document.body.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    }
  }

  function handleCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    let output = '';
    let isError = false;
    let isSecret = false;
    
    // Print prompt and command first
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt">javas@dev-machine:~$</span> ${escapeHTML(cmd)}`;
    termOutput.appendChild(userLine);

    switch (cleanCmd) {
      case 'help':
        output = `Perintah yang tersedia:<br>
- <span class="terminal-highlight">help</span>     : Menampilkan daftar perintah ini.<br>
- <span class="terminal-highlight">about</span>    : Menampilkan info profil singkat Narendra Javas Reswara.<br>
- <span class="terminal-highlight">skills</span>   : Menampilkan keahlian utama dan persentase penguasaan.<br>
- <span class="terminal-highlight">projects</span> : Menampilkan proyek-proyek utama yang pernah dibuat.<br>
- <span class="terminal-highlight">wa</span>       : Menampilkan kontak WhatsApp Javas.<br>
- <span class="terminal-highlight">secret</span>   : Perintah rahasia luar angkasa.<br>
- <span class="terminal-highlight">clear</span>    : Membersihkan layar terminal.`;
        break;
      case 'about':
        output = `<span class="terminal-info">=== PROFIL ===</span><br>
Nama: Narendra Javas Reswara<br>
Peran: Frontend Developer & UI/UX Enthusiast<br>
Pendidikan: SMKN 2 Purworejo (Manajemen Perkantoran & Layanan Bisnis)<br>
Fokus: Membangun aplikasi web modern dengan antarmuka premium, clean code, dan fungsionalitas tinggi.`;
        break;
      case 'skills':
        output = `<span class="terminal-info">=== KEAHLIAN ===</span><br>
HTML/CSS   : [■■■■■■■■■■■■■■■□] 95%<br>
JavaScript : [■■■■■■■■■■■■■■□□] 90%<br>
React/Next : [■■■■■■■■■■■■■□□□] 85%<br>
Laravel    : [■■■■■■■■■■■□□□□□] 80%<br>
MySQL/APIs : [■■■■■■■■■■■■■□□□] 85%`;
        break;
      case 'projects':
        output = `<span class="terminal-info">=== PROYEK UTAMA ===</span><br>
1. <span class="terminal-highlight">Javas Bio Link</span> - Bio Link interaktif glassmorphism + partikel canvas.<br>
2. <span class="terminal-highlight">Javas Space Theme</span> - Halaman bertema galaksi dengan animasi bintang.<br>
3. <span class="terminal-highlight">Academy OS Ω</span> - Next.js 15 Learning OS terintegrasi dengan tutor AI & React Flow.`;
        break;
      case 'wa':
        output = `<span class="terminal-info">=== HUBUNGI SAYA ===</span><br>
WhatsApp: +62 853 3812 3425<br>
Atau kunjungi: <a href="https://wa.me/6285338123425" target="_blank" style="color: var(--color-yellow); text-decoration: underline;">https://wa.me/6285338123425</a>`;
        break;
      case 'secret':
        isSecret = true;
        output = `<pre style="color: var(--color-pink); font-family: inherit; margin: 10px 0;">
     .     *     .     .
        .   / \\   .
           |   |
          /|   |\\
         /_|___|_\\
           / | \\
          /  |  \\
         </pre>
<span class="terminal-highlight">Selamat! Anda menemukan Easter Egg luar angkasa! 🚀🌌</span><br>
"Jelajahi terus kosmos pemrograman tanpa batas!"`;
        break;
      case 'clear':
        termOutput.innerHTML = '';
        return;
      default:
        isError = true;
        output = `<span class="terminal-error">Perintah tidak dikenal: "${escapeHTML(cmd)}". Ketik <span class="terminal-highlight">help</span> untuk daftar perintah.</span>`;
        break;
    }

    const outLine = document.createElement('div');
    outLine.className = 'terminal-line';
    outLine.innerHTML = output;
    termOutput.appendChild(outLine);

    if (isError) {
      playErrorSound();
    } else if (isSecret) {
      playSecretSound();
    } else {
      playClickSound();
    }

    termBody.scrollTop = termBody.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const inputVal = termInput.value;
        termInput.value = '';
        handleCommand(inputVal);
      } else if (e.key.length === 1 || e.key === 'Backspace') {
        playKeySound();
      }
    });

    if (termBody) {
      termBody.addEventListener('click', () => {
        termInput.focus();
      });
    }
  }
});
