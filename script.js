document.addEventListener('DOMContentLoaded', () => {

  let currentLang = localStorage.getItem('portfolio-lang') === 'en' ? 'en' : 'id';

  const translations = {
    id: {
      'settings-title': 'Pengaturan',
      toastPalette: "Skema Warna: ",
      contactLoading: "Mengirim pesan...",
      contactSuccess: "Pesan terkirim!",
      contactError: "Gagal mengirim pesan.",
      terminalWelcome: "Selamat datang di portofolio saya!",
      terminalHelp: "Ketik 'help' untuk perintah.",
      roleDev: "Pengembang Web",
      roleDesigner: "Desainer UI/UX",
      customAccentApplied: "Warna Aksen Kustom Diterapkan!",
      konamiActivated: "CHEAT DIAKTIFKAN: MODE ARCADE AKTIF!",
      konamiDeactivated: "CHEAT DINONAKTIFKAN: MODE STANDAR",
      'nav-home': 'Home',
      'nav-about': 'Tentang',
      'nav-skills': 'Keahlian',
      'nav-projects': 'Proyek',
      'nav-education': 'Pendidikan',
      'nav-contact': 'Kontak',
      'hero-tagline': 'Selamat Datang di Portfolio Saya',
      'hero-title-prefix': 'Hai, Saya',
      'hero-subtitle-prefix': 'Saya seorang',
      'hero-description': 'Web Developer yang berfokus membangun website modern, responsif, dan berkinerja tinggi. Saya mengombinasikan desain UI/UX yang premium dengan kode yang bersih untuk menciptakan pengalaman pengguna terbaik.',
      'btn-projects': 'Lihat Proyek',
      'btn-contact': 'Hubungi Saya',
      'about-title-span': 'Tentang',
      'about-title-rest': 'Saya',
      'about-subtitle': 'Siapa Saya?',
      'about-p1': 'Saya adalah seorang web developer yang fokus membangun website modern, responsif, dan mudah digunakan. Saya memiliki minat besar pada frontend development, UI design, dan pengembangan produk digital yang memiliki dampak nyata.',
      'about-p2': 'Dengan pengalaman selama 1 tahun terakhir di industri ini, saya telah membantu membangun presence online lewat aplikasi web yang cepat dan intuitif. Saya berkomitmen untuk menulis kode yang bersih (clean code) dan mudah dipelihara.',
      'val1-title': 'Kualitas Kode',
      'val1-desc': 'Kode yang bersih, modular, terdokumentasi, dan mudah dipelihara jangka panjang.',
      'val2-title': 'Desain Berorientasi Pengguna',
      'val2-desc': 'Memastikan navigasi intuitif, kegunaan maksimal, dan visual yang memukau.',
      'card1-label': 'Tahun Pengalaman',
      'card2-label': 'Proyek Selesai',
      'skills-title-prefix': 'Daftar',
      'skills-title-span': 'Keahlian',
      'skills-cat1': 'Frontend Development',
      'skills-cat2': 'Backend Development',
      'skills-cat3': 'Tools & Platforms',
      'skills-cat4': 'Soft Skills',
      'soft-skill-1': 'Problem Solving',
      'soft-skill-2': 'Komunikasi Efektif',
      'soft-skill-3': 'Kerja Sama Tim',
      'soft-skill-4': 'Manajemen Waktu',
      'soft-skill-5': 'Adaptabilitas',
      'projects-title-prefix': 'Karya &',
      'projects-title-span': 'Proyek',
      'projects-title-suffix': 'Terbaik',
      'filter-all': 'Semua',
      'filter-webapp': 'Aplikasi Web',
      'filter-animation': 'Animasi',
      'project1-category': 'Interactive Bio / Web App',
      'project1-desc': 'Halaman portofolio bio interaktif dengan desain glassmorphism premium, floating orbs, efek partikel canvas dinamis, dan penataan link kustom yang responsif.',
      'project2-category': 'Web Page / Animation',
      'project2-desc': 'Halaman web minimalis interaktif dengan tema luar angkasa, animasi pergerakan bintang (stardust) berulang, pencahayaan radial gradient, dan visual efek galaksi.',
      'project3-category': 'Learning OS / Web App',
      'project3-desc': 'Sistem operasi pembelajaran personal terintegrasi dengan dasbor pelacakan target belajar, modul manajemen dokumen ("Second Brain"), tutor bertenaga AI, modul RPG, visualisasi galaksi pengetahuan (React Flow), dan analitik.',
      'edu-title-prefix': 'Riwayat',
      'edu-title-span': 'Pendidikan',
      'edu1-desc': 'Menempuh pendidikan menengah kejuruan (SMK) dengan fokus pada keahlian Manajemen Perkantoran dan Layanan bisnis.',
      'edu2-desc': 'Menempuh pendidikan tingkat menengah pertama (SMP) dan aktif dalam berbagai kegiatan sekolah serta pengembangan minat awal.',
      'edu3-desc': 'Menempuh pendidikan tingkat dasar (SD), membangun fondasi akademis, logika matematika dasar, dan keterampilan bersosialisasi.',
      'terminal-title-prefix': 'Retro',
      'terminal-title-span': 'Terminal',
      'contact-title-prefix': 'Mari',
      'contact-title-span': 'Bekerja Sama',
      'contact-subtitle': 'Hubungi Saya',
      'contact-desc': 'Ada proyek menarik yang ingin dikerjakan bersama? Atau sekadar ingin menyapa? Kirim pesan Anda sekarang dan saya akan membalasnya sesegera mungkin.',
      'contact-loc-title': 'Lokasi',
      'contact-loc-val': 'Jawa Tengah, Indonesia',
      'form-name': 'Nama Lengkap',
      'form-email': 'Email',
      'form-message': 'Pesan',
      'form-submit': 'Kirim Pesan',
      'footer-copy': '&copy; 2026 Narendra Javas Reswara. Seluruh hak cipta dilindungi.'
    },
    en: {
      'settings-title': 'Settings',
      toastPalette: "Color Palette: ",
      contactLoading: "Sending message...",
      contactSuccess: "Message sent!",
      contactError: "Error sending message.",
      terminalWelcome: "Welcome to my portfolio!",
      terminalHelp: "Type 'help' for commands.",
      roleDev: "Web Developer",
      roleDesigner: "UI/UX Designer",
      customAccentApplied: "Custom Accent Color Applied!",
      konamiActivated: "CHEATS ACTIVATED: ARCADE MODE ENABLED!",
      konamiDeactivated: "CHEATS DEACTIVATED: STANDARD MODE",
      'nav-home': 'Home',
      'nav-about': 'About',
      'nav-skills': 'Skills',
      'nav-projects': 'Projects',
      'nav-education': 'Education',
      'nav-contact': 'Contact',
      'hero-tagline': 'Welcome to My Portfolio',
      'hero-title-prefix': 'Hi, I am',
      'hero-subtitle-prefix': 'I am a',
      'hero-description': 'Web Developer focused on building modern, responsive, and high-performance websites. I combine premium UI/UX design with clean code to create the best user experiences.',
      'btn-projects': 'View Projects',
      'btn-contact': 'Contact Me',
      'about-title-span': 'About',
      'about-title-rest': 'Me',
      'about-subtitle': 'Who Am I?',
      'about-p1': 'I am a web developer focused on building modern, responsive, and user-friendly websites. I have a strong interest in frontend development, UI design, and developing digital products that make a real impact.',
      'about-p2': 'With over 1 year of experience in this industry, I have helped build online presence through fast and intuitive web applications. I am committed to writing clean and maintainable code.',
      'val1-title': 'Code Quality',
      'val1-desc': 'Clean, modular, documented, and easily maintainable code for the long term.',
      'val2-title': 'User-Oriented Design',
      'val2-desc': 'Ensuring intuitive navigation, maximum usability, and stunning visuals.',
      'card1-label': 'Year of Experience',
      'card2-label': 'Projects Completed',
      'skills-title-prefix': 'My',
      'skills-title-span': 'Skills',
      'skills-cat1': 'Frontend Development',
      'skills-cat2': 'Backend Development',
      'skills-cat3': 'Tools & Platforms',
      'skills-cat4': 'Soft Skills',
      'soft-skill-1': 'Problem Solving',
      'soft-skill-2': 'Effective Communication',
      'soft-skill-3': 'Teamwork',
      'soft-skill-4': 'Time Management',
      'soft-skill-5': 'Adaptability',
      'projects-title-prefix': 'Best',
      'projects-title-span': 'Works',
      'projects-title-suffix': '& Projects',
      'filter-all': 'All',
      'filter-webapp': 'Web Apps',
      'filter-animation': 'Animations',
      'project1-category': 'Interactive Bio / Web App',
      'project1-desc': 'An interactive bio portfolio page featuring premium glassmorphism design, floating orbs, dynamic canvas particle effects, and customized responsive links.',
      'project2-category': 'Web Page / Animation',
      'project2-desc': 'An interactive minimalist web page with a space theme, repeating stardust movement animations, radial gradient lighting, and galaxy visual effects.',
      'project3-category': 'Learning OS / Web App',
      'project3-desc': 'A personal integrated learning operating system featuring a study targets tracking dashboard, a second brain document management module, AI tutors, RPG modules, knowledge galaxy visualization (React Flow), and analytics.',
      'edu-title-prefix': 'Education',
      'edu-title-span': 'History',
      'edu1-desc': 'Undergoing vocational high school (SMK) education with a focus on Office Management and Business Services.',
      'edu2-desc': 'Completed junior high school (SMP) education while actively participating in school activities and early skill development.',
      'edu3-desc': 'Completed elementary school (SD) education, building a strong academic foundation, logic, and socialization skills.',
      'terminal-title-prefix': 'Retro',
      'terminal-title-span': 'Terminal',
      'contact-title-prefix': 'Let\'s',
      'contact-title-span': 'Work Together',
      'contact-subtitle': 'Contact Me',
      'contact-desc': 'Have an exciting project you want to work on together? Or just want to say hi? Send your message now and I will get back to you as soon as possible.',
      'contact-loc-title': 'Location',
      'contact-loc-val': 'Central Java, Indonesia',
      'form-name': 'Full Name',
      'form-email': 'Email Address',
      'form-message': 'Message',
      'form-submit': 'Send Message',
      'footer-copy': '&copy; 2026 Narendra Javas Reswara. All rights reserved.'
    }
  };

  /* ==========================================
   * 0. RETRO SOUND EFFECTS (WEB AUDIO API)
   * ========================================== */
  const soundToggleBtns = document.querySelectorAll('.sound-toggle-btn');
  const soundOnIcons = document.querySelectorAll('.sound-on-icon');
  const soundOffIcons = document.querySelectorAll('.sound-off-icon');

  let soundEnabled = localStorage.getItem('portfolio-sound') !== 'disabled';

  const setSoundState = (enabled) => {
    soundEnabled = enabled;
    localStorage.setItem('portfolio-sound', enabled ? 'enabled' : 'disabled');
    soundOnIcons.forEach(icon => icon.style.display = enabled ? 'block' : 'none');
    soundOffIcons.forEach(icon => icon.style.display = enabled ? 'none' : 'block');
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
  soundToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setSoundState(!soundEnabled);
      if (soundEnabled) {
        playClickSound();
      }
    });
  });

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
  const paletteShuffleBtnMobile = document.getElementById('palette-shuffle-mobile');
  const paletteSelect = document.getElementById('palette-select');
  const paletteSelectMobile = document.getElementById('palette-select-mobile');

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

    if (paletteSelect) paletteSelect.value = index;
    if (paletteSelectMobile) paletteSelectMobile.value = index;
  };

  // Initialize saved palette
  if (currentPaletteIndex !== 0) {
    applyPalette(currentPaletteIndex);
  } else {
    if (paletteSelect) paletteSelect.value = 0;
    if (paletteSelectMobile) paletteSelectMobile.value = 0;
  }

  // Palette select change handler
  const handlePaletteChange = (e) => {
    const index = parseInt(e.target.value, 10);
    applyPalette(index);
    playClickSound();
    showToast(`${translations[currentLang].toastPalette}${palettes[index].name}`);
    
    // Reset custom accent color when selecting standard palettes
    localStorage.removeItem('portfolio-custom-accent');
    const customPicker = document.getElementById('accent-color-picker');
    const customPickerMobile = document.getElementById('accent-color-picker-mobile');
    if (customPicker) customPicker.value = palettes[index].colors['--color-yellow'];
    if (customPickerMobile) customPickerMobile.value = palettes[index].colors['--color-yellow'];
  };

  // Palette select change listener
  if (paletteSelect) paletteSelect.addEventListener('change', handlePaletteChange);
  if (paletteSelectMobile) paletteSelectMobile.addEventListener('change', handlePaletteChange);

  // Palette Shuffle click handler
  const handlePaletteShuffle = () => {
    const nextIndex = (currentPaletteIndex + 1) % palettes.length;
    applyPalette(nextIndex);
    playClickSound();
    showToast(`${translations[currentLang].toastPalette}${palettes[nextIndex].name}`);
    
    // Reset custom accent color when selecting standard palettes
    localStorage.removeItem('portfolio-custom-accent');
    const customPicker = document.getElementById('accent-color-picker');
    const customPickerMobile = document.getElementById('accent-color-picker-mobile');
    if (customPicker) customPicker.value = palettes[nextIndex].colors['--color-yellow'];
    if (customPickerMobile) customPickerMobile.value = palettes[nextIndex].colors['--color-yellow'];
  };

  // Palette Shuffle click listener
  if (paletteShuffleBtn) paletteShuffleBtn.addEventListener('click', handlePaletteShuffle);
  if (paletteShuffleBtnMobile) paletteShuffleBtnMobile.addEventListener('click', handlePaletteShuffle);

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
    } else {
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
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
  const rolesLang = {
    id: [
      'Frontend Developer', 
      'UI/UX Enthusiast', 
      'Software Engineer', 
      'Pemecah Masalah'
    ],
    en: [
      'Frontend Developer', 
      'UI/UX Enthusiast', 
      'Software Engineer', 
      'Problem Solver'
    ]
  };
  let activeRoles = rolesLang[currentLang];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  const type = () => {
    const currentRole = activeRoles[roleIndex];
    
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
      roleIndex = (roleIndex + 1) % activeRoles.length;
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
        showToast(currentLang === 'id' ? 'Mohon isi semua kolom formulir!' : 'Please fill out all form fields!', 'error');
        return;
      }

      // Check if API key is not configured yet
      if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" || !WEB3FORMS_ACCESS_KEY) {
        showToast(currentLang === 'id' ? 'Form gagal dikirim! Silakan atur Access Key Web3Forms Anda di script.js.' : 'Form submission failed! Please set your Web3Forms Access Key in script.js.', 'error');
        return;
      }

      // Modify Button state to Loading
      const originalBtnHTML = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = `
        ${currentLang === 'id' ? 'Mengirim...' : 'Sending...'}
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
          showToast(currentLang === 'id' ? `Halo ${nameField.value.trim()}, pesan Anda telah berhasil dikirim!` : `Hello ${nameField.value.trim()}, your message has been sent successfully!`);
          triggerConfetti();
          playSuccessMelody();
          contactForm.reset();
        } else {
          showToast(result.message || (currentLang === 'id' ? 'Gagal mengirim pesan, coba lagi nanti.' : 'Failed to send message, please try again later.'), 'error');
          playErrorSound();
        }
      } catch (error) {
        showToast(currentLang === 'id' ? 'Terjadi kesalahan koneksi internet.' : 'Internet connection error.', 'error');
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

    const t = terminalTranslations[currentLang];

    switch (cleanCmd) {
      case 'help':
        output = t.helpOutput;
        break;
      case 'about':
        output = t.aboutOutput;
        break;
      case 'skills':
        output = t.skillsOutput;
        break;
      case 'projects':
        output = t.projectsOutput;
        break;
      case 'wa':
        output = t.waOutput;
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
${t.secretMsg}`;
        break;
      case 'clear':
        termOutput.innerHTML = '';
        return;
      default:
        isError = true;
        output = t.unknownCmd.replace('{cmd}', escapeHTML(cmd));
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

  /* ==========================================
   * 12. LANGUAGE DICTIONARIES & DYNAMIC SWITCHER
   * ========================================== */
  // Translations dictionary is now defined at the top of the file

  const terminalTranslations = {
    id: {
      welcome: 'Selamat datang di Javas DevMachine v1.0.0!',
      helpTip: 'Ketik <span class="terminal-highlight">help</span> untuk melihat daftar perintah yang tersedia.',
      helpOutput: `Perintah yang tersedia:<br>
- <span class="terminal-highlight">help</span>     : Menampilkan daftar perintah ini.<br>
- <span class="terminal-highlight">about</span>    : Menampilkan info profil singkat Narendra Javas Reswara.<br>
- <span class="terminal-highlight">skills</span>   : Menampilkan keahlian utama dan persentase penguasaan.<br>
- <span class="terminal-highlight">projects</span> : Menampilkan proyek-proyek utama yang pernah dibuat.<br>
- <span class="terminal-highlight">wa</span>       : Menampilkan kontak WhatsApp Javas.<br>
- <span class="terminal-highlight">secret</span>   : Perintah rahasia luar angkasa.<br>
- <span class="terminal-highlight">clear</span>    : Membersihkan layar terminal.`,
      aboutOutput: `<span class="terminal-info">=== PROFIL ===</span><br>
Nama: Narendra Javas Reswara<br>
Peran: Frontend Developer & UI/UX Enthusiast<br>
Pendidikan: SMKN 2 Purworejo (Manajemen Perkantoran & Layanan Bisnis)<br>
Fokus: Membangun aplikasi web modern dengan antarmuka premium, clean code, dan fungsionalitas tinggi.`,
      skillsOutput: `<span class="terminal-info">=== KEAHLIAN ===</span><br>
HTML/CSS   : [■■■■■■■■■■■■■■■□] 95%<br>
JavaScript : [■■■■■■■■■■■■■■□□] 90%<br>
React/Next : [■■■■■■■■■■■■■□□□] 85%<br>
Laravel    : [■■■■■■■■■■■□□□□□] 80%<br>
MySQL/APIs : [■■■■■■■■■■■■■□□□] 85%`,
      projectsOutput: `<span class="terminal-info">=== PROYEK UTAMA ===</span><br>
1. <span class="terminal-highlight">Javas Bio Link</span> - Bio Link interaktif glassmorphism + partikel canvas.<br>
2. <span class="terminal-highlight">Javas Space Theme</span> - Halaman bertema galaksi dengan animasi bintang.<br>
3. <span class="terminal-highlight">Academy OS Ω</span> - Next.js 15 Learning OS terintegrasi dengan tutor AI & React Flow.`,
      waOutput: `<span class="terminal-info">=== HUBUNGI SAYA ===</span><br>
WhatsApp: +62 853 3812 3425<br>
Atau kunjungi: <a href="https://wa.me/6285338123425" target="_blank" style="color: var(--color-yellow); text-decoration: underline;">https://wa.me/6285338123425</a>`,
      secretMsg: `<span class="terminal-highlight">Selamat! Anda menemukan Easter Egg luar angkasa! 🚀🌌</span><br>
"Jelajahi terus kosmos pemrograman tanpa batas!"`,
      unknownCmd: `Perintah tidak dikenal: "{cmd}". Ketik <span class="terminal-highlight">help</span> untuk daftar perintah.`
    },
    en: {
      welcome: 'Welcome to Javas DevMachine v1.0.0!',
      helpTip: 'Type <span class="terminal-highlight">help</span> to see the list of available commands.',
      helpOutput: `Available commands:<br>
- <span class="terminal-highlight">help</span>     : Shows this help menu.<br>
- <span class="terminal-highlight">about</span>    : Shows brief profile info of Narendra Javas Reswara.<br>
- <span class="terminal-highlight">skills</span>   : Shows core technical skills and proficiency percentages.<br>
- <span class="terminal-highlight">projects</span> : Shows the primary projects built.<br>
- <span class="terminal-highlight">wa</span>       : Shows Javas' WhatsApp contact details.<br>
- <span class="terminal-highlight">secret</span>   : A secret deep space command.<br>
- <span class="terminal-highlight">clear</span>    : Clears the terminal screen.`,
      aboutOutput: `<span class="terminal-info">=== PROFILE ===</span><br>
Name: Narendra Javas Reswara<br>
Role: Frontend Developer & UI/UX Enthusiast<br>
Education: SMKN 2 Purworejo (Office Management & Business Services)<br>
Focus: Building modern web applications with premium interfaces, clean code, and high usability.`,
      skillsOutput: `<span class="terminal-info">=== TECHNICAL SKILLS ===</span><br>
HTML/CSS   : [■■■■■■■■■■■■■■■□] 95%<br>
JavaScript : [■■■■■■■■■■■■■■□□] 90%<br>
React/Next : [■■■■■■■■■■■■■□□□] 85%<br>
Laravel    : [■■■■■■■■■■■□□□□□] 80%<br>
MySQL/APIs : [■■■■■■■■■■■■■□□□] 85%`,
      projectsOutput: `<span class="terminal-info">=== FEATURED PROJECTS ===</span><br>
1. <span class="terminal-highlight">Javas Bio Link</span> - Interactive bio link with glassmorphism design + canvas particles.<br>
2. <span class="terminal-highlight">Javas Space Theme</span> - Galaxy themed web page with repeating stardust animation.<br>
3. <span class="terminal-highlight">Academy OS Ω</span> - Next.js 15 Learning OS integrated with AI tutors & React Flow.`,
      waOutput: `<span class="terminal-info">=== CONTACT ME ===</span><br>
WhatsApp: +62 853 3812 3425<br>
Or visit: <a href="https://wa.me/6285338123425" target="_blank" style="color: var(--color-yellow); text-decoration: underline;">https://wa.me/6285338123425</a>`,
      secretMsg: `<span class="terminal-highlight">Congratulations! You discovered the outer space Easter Egg! 🚀🌌</span><br>
"Keep exploring the infinite cosmos of programming!"`,
      unknownCmd: `Unknown command: "{cmd}". Type <span class="terminal-highlight">help</span> for the command list.`
    }
  };

  const updateLanguageUI = () => {
    // 1. Text elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(elem => {
      const key = elem.getAttribute('data-translate');
      if (translations[currentLang][key]) {
        elem.innerHTML = translations[currentLang][key];
      }
    });

    // 2. Form placeholders
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    
    if (nameInput) nameInput.placeholder = currentLang === 'id' ? 'Masukkan nama lengkap Anda' : 'Enter your full name';
    if (emailInput) emailInput.placeholder = currentLang === 'id' ? 'nama@email.com' : 'name@email.com';
    if (messageInput) messageInput.placeholder = currentLang === 'id' ? 'Tuliskan pesan Anda di sini...' : 'Type your message here...';

    // 3. Typewriter update
    activeRoles = rolesLang[currentLang];
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;

    // 4. Lang toggle button text
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
      langToggleBtn.textContent = currentLang === 'id' ? 'EN' : 'ID';
    }

    // 5. Terminal welcome message update
    const terminalWelcomeLines = termBody ? termBody.querySelectorAll('.terminal-line') : [];
    if (terminalWelcomeLines.length >= 2) {
      terminalWelcomeLines[0].textContent = terminalTranslations[currentLang].welcome;
      terminalWelcomeLines[1].innerHTML = terminalTranslations[currentLang].helpTip;
    }

    // 6. Color palette options update
    const pSelect = document.getElementById('palette-select');
    const pSelectMobile = document.getElementById('palette-select-mobile');
    const translateOptions = (selectElem) => {
      if (selectElem && selectElem.options.length >= 5) {
        selectElem.options[0].text = currentLang === 'id' ? 'Default Retro' : 'Default Retro';
        selectElem.options[1].text = currentLang === 'id' ? 'Cyberpunk Neon' : 'Cyberpunk Neon';
        selectElem.options[2].text = currentLang === 'id' ? 'Vaporwave 80-an' : '80s Vaporwave';
        selectElem.options[3].text = currentLang === 'id' ? 'Acid Rave' : 'Acid Rave';
        selectElem.options[4].text = currentLang === 'id' ? 'Citrus Punch' : 'Citrus Punch';
      }
    };
    translateOptions(pSelect);
    translateOptions(pSelectMobile);
  };

  // Language toggle listener
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'id' ? 'en' : 'id';
      localStorage.setItem('portfolio-lang', currentLang);
      updateLanguageUI();
      playClickSound();
      showToast(currentLang === 'id' ? 'Bahasa: Indonesia' : 'Language: English');
    });
  }

  // Initial language setup
  if (currentLang !== 'id') {
    updateLanguageUI();
  }

  /* ==========================================
   * 9. DYNAMIC CUSTOM ACCENT COLOR PICKER
   * ========================================== */
  const customColorPicker = document.getElementById('accent-color-picker');
  const customColorPickerMobile = document.getElementById('accent-color-picker-mobile');
  
  const syncCustomAccentColor = (color) => {
    document.documentElement.style.setProperty('--color-yellow', color);
    localStorage.setItem('portfolio-custom-accent', color);
    if (customColorPicker) customColorPicker.value = color;
    if (customColorPickerMobile) customColorPickerMobile.value = color;
  };

  const savedCustomAccent = localStorage.getItem('portfolio-custom-accent');
  if (savedCustomAccent) {
    syncCustomAccentColor(savedCustomAccent);
  } else {
    const activePalette = palettes[currentPaletteIndex];
    if (activePalette) {
      const color = activePalette.colors['--color-yellow'];
      if (customColorPicker) customColorPicker.value = color;
      if (customColorPickerMobile) customColorPickerMobile.value = color;
    }
  }

  const handleColorInput = (e) => {
    syncCustomAccentColor(e.target.value);
  };

  const handleColorChange = () => {
    playClickSound();
    showToast(translations[currentLang].customAccentApplied);
  };

  if (customColorPicker) {
    customColorPicker.addEventListener('input', handleColorInput);
    customColorPicker.addEventListener('change', handleColorChange);
  }
  if (customColorPickerMobile) {
    customColorPickerMobile.addEventListener('input', handleColorInput);
    customColorPickerMobile.addEventListener('change', handleColorChange);
  }

  /* ==========================================
   * 10. MOUSE COORDINATES PARALLAX (GEOMETRIC SHAPES)
   * ========================================== */
  const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (hasHover) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      const wrappers = document.querySelectorAll('.geo-shape-wrap');
      wrappers.forEach(wrap => {
        const depth = parseFloat(wrap.getAttribute('data-depth')) || 20;
        const moveX = x * depth;
        const moveY = y * depth;
        
        wrap.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });
  }

  /* ==========================================
   * 11. EASTER EGG: RETRO KONAMI CODE (ARCADE MODE)
   * ========================================== */
  let konamiIndex = 0;
  const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  document.addEventListener('keydown', (e) => {
    const key = e.key;
    const requiredKey = konamiPattern[konamiIndex];

    if (key.toLowerCase() === requiredKey.toLowerCase()) {
      konamiIndex++;
      if (konamiIndex === konamiPattern.length) {
        activateKonamiMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = (key.toLowerCase() === konamiPattern[0].toLowerCase()) ? 1 : 0;
    }
  });

  function activateKonamiMode() {
    const isAlreadyActive = document.body.classList.contains('konami-mode');
    if (isAlreadyActive) {
      document.body.classList.remove('konami-mode');
      showToast(translations[currentLang].konamiDeactivated);
      playToggleSound(false);
    } else {
      document.body.classList.add('konami-mode');
      showToast(translations[currentLang].konamiActivated);
      playKonamiVictoryTune();
    }
  }

  function playKonamiVictoryTune() {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const now = ctx.currentTime;

      // C Major retro chiptune arpeggio victory sequence
      const melody = [
        { note: 261.63, time: 0 },      // C4
        { note: 329.63, time: 0.08 },   // E4
        { note: 392.00, time: 0.16 },   // G4
        { note: 523.25, time: 0.24 },   // C5
        { note: 659.25, time: 0.32 },   // E5
        { note: 783.99, time: 0.40 },   // G5
        { note: 1046.50, time: 0.48 },  // C6
        { note: 1318.51, time: 0.60 },  // E6
        { note: 1567.98, time: 0.72 },  // G6
        { note: 2093.00, time: 0.84 }   // C7
      ];

      melody.forEach(item => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(item.note, now + item.time);
        
        gain.gain.setValueAtTime(0.04, now + item.time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + item.time + 0.25);
        
        osc.start(now + item.time);
        osc.stop(now + item.time + 0.25);
      });
    } catch (e) {}
  }
});
