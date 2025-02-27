
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

// Add animation classes to elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.skill-card, .skill-category, .experience-card, .education-card, .certificate-card, .project-card, .contact-link');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

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

// Toggle theme with animation
function toggleTheme() {
  const body = document.body;
  
  // Add transition class
  body.classList.add('theme-transition');
  
  // Toggle dark class
  const isDark = document.documentElement.classList.toggle('dark');
  
  // Store preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update icons
  updateThemeIcons(isDark);
  
  // Remove transition class after animation completes
  setTimeout(() => {
    body.classList.remove('theme-transition');
  }, 500);
}

// Toggle mobile menu with animation
function toggleMobileMenu() {
  if (mobileMenu.classList.contains('hidden')) {
    // Show menu
    mobileMenu.classList.remove('hidden');
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-20px)';
    
    // Animate in
    setTimeout(() => {
      mobileMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      mobileMenu.style.opacity = '1';
      mobileMenu.style.transform = 'translateY(0)';
      mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }, 10);
  } else {
    // Animate out
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-20px)';
    
    // Hide after animation
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }, 300);
  }
}

// Handle scroll events with smooth animations
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
  
  // Update active class on nav items with subtle animations
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    const sectionId = href === '#' ? '' : href.substring(1);
    
    if (sectionId === currentSection) {
      if (!item.classList.contains('active')) {
        item.classList.add('active');
        // Add a subtle pulse animation
        item.style.animation = 'pulse 0.5s';
        setTimeout(() => {
          item.style.animation = '';
        }, 500);
      }
    } else {
      item.classList.remove('active');
    }
  });
}

// Open certificate modal with animation
function openCertificateModal(certSrc) {
  modalCertificateImg.src = certSrc;
  certificateModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Add entrance animation
  setTimeout(() => {
    certificateModal.style.opacity = '1';
  }, 10);
}

// Close certificate modal with animation
function closeCertificateModal() {
  certificateModal.style.opacity = '0';
  
  setTimeout(() => {
    certificateModal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// Smooth scroll to section
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (!element) return;
  
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
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

// Smooth scroll and close mobile menu when a nav item is clicked
navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    if (href !== '#') {
      e.preventDefault();
      smoothScrollTo(href);
      
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
      }
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
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const certSrc = this.getAttribute('data-cert');
    openCertificateModal(certSrc);
  });
});

// Set up scroll event listener with throttling for performance
let isScrolling = false;
window.addEventListener('scroll', function() {
  if (!isScrolling) {
    window.requestAnimationFrame(function() {
      handleScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

// Add CSS for theme transition
const style = document.createElement('style');
style.textContent = `
  .theme-transition {
    transition: background-color 0.5s, color 0.5s;
  }
  
  .theme-transition * {
    transition: background-color 0.5s, color 0.5s, border-color 0.5s, box-shadow 0.5s;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  handleScroll(); // Initial call to set active nav item
  animateOnScroll(); // Setup animations
  
  // Add staggered animation to hero content
  const heroElements = document.querySelectorAll('.hero-content > *');
  heroElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add('fade-in');
  });
});
