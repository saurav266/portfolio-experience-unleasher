
// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const mobileThemeIcon = mobileThemeToggle.querySelector('i');
const certificateModal = document.getElementById('certificate-modal');
const modalCertificateImg = document.getElementById('modal-certificate-img');
const closeModal = document.querySelector('.close-modal');
const viewCertificateBtns = document.querySelectorAll('.view-certificate-btn');
const viewLinks = document.querySelectorAll('.view-link');
const navItems = document.querySelectorAll('.nav-item');

// Set initial theme based on user preference or localStorage
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
  }
}

// Update theme icons based on current theme
function updateThemeIcons(isDark) {
  if (isDark) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    mobileThemeIcon.classList.remove('fa-moon');
    mobileThemeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    mobileThemeIcon.classList.remove('fa-sun');
    mobileThemeIcon.classList.add('fa-moon');
  }
}

// Toggle theme
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
  const isOpen = !mobileMenu.classList.contains('hidden');
  
  if (isOpen) {
    mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}

// Handle scroll events
function handleScroll() {
  // Add/remove scrolled class to navbar
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Update active nav item based on scroll position
  const sections = Array.from(document.querySelectorAll('section')).reverse();
  const scrollPosition = window.scrollY + 100;
  
  // Find the current section
  let currentSection = '';
  for (const section of sections) {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.id || '';
      break;
    }
  }
  
  // Special case for top of page
  if (scrollPosition < document.getElementById('about').offsetTop) {
    currentSection = '';
  }
  
  // Update active class on nav items
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    const sectionId = href === '#' ? '' : href.substring(1);
    
    if (sectionId === currentSection) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Open certificate modal
function openCertificateModal(certSrc) {
  modalCertificateImg.src = certSrc;
  certificateModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Close certificate modal
function closeCertificateModal() {
  certificateModal.style.display = 'none';
  document.body.style.overflow = '';
}

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
closeModal.addEventListener('click', closeCertificateModal);

// Close modal when clicking outside of it
certificateModal.addEventListener('click', function(event) {
  if (event.target === certificateModal) {
    closeCertificateModal();
  }
});

// Close mobile menu when a nav item is clicked
navItems.forEach(item => {
  item.addEventListener('click', function() {
    if (!mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu();
    }
  });
});

// Add event listeners to certificate buttons
viewCertificateBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const certSrc = this.getAttribute('data-cert');
    openCertificateModal(certSrc);
  });
});

viewLinks.forEach(link => {
  link.addEventListener('click', function() {
    const certSrc = this.getAttribute('data-cert');
    openCertificateModal(certSrc);
  });
});

// Set up scroll event listener
window.addEventListener('scroll', handleScroll);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  handleScroll(); // Initial call to set active nav item
});
