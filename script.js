const hamburger = document.getElementById("humburger");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle navbar on hamburger click
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close navbar when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideNav = navbar.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    navbar.classList.remove("active");
  }
});

// Handle nav link clicks
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // 1. Remove 'active-link' from all
    navLinks.forEach((l) => l.classList.remove("active-link"));

    // 2. Add 'active-link' to clicked one
    this.classList.add("active-link");

    // 3. Close navbar (mobile view)
    navbar.classList.remove("active");
  });
});

const sections = document.querySelectorAll("section");
  const navLinks1 = document.querySelectorAll(".nav-link");

  const observern = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove active class from all
          navLinks1.forEach(link => link.classList.remove("active-link"));

          // Add to the one in view
          const id = entry.target.id;
          const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active-link");
          }
        }
      });
    },
    {
      threshold: 0.5 // Trigger when 50% of section is in view
    }
  );

  // Observe each section
  sections.forEach(section => observern.observe(section));

const containers = document.querySelectorAll('#about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove to allow retrigger
        }
      });
    }, { threshold: 0.1 });

    containers.forEach(container => {
      observer.observe(about);
    });
const containers1 = document.querySelectorAll('#Skills');

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove to allow retrigger
        }
      });
    }, { threshold: 0.1 });

    containers1.forEach(container => {
      observer1.observe(Skills);
    });
const containers2 = document.querySelectorAll('#projects');

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove to allow retrigger
        }
      });
    }, { threshold: 0.1 });

    containers2.forEach(container => {
      observer2.observe(projects);
    });
const containers3 = document.querySelectorAll('#education');

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove to allow retrigger
        }
      });
    }, { threshold: 0.1 });

    containers3.forEach(container => {
      observer3.observe(education);
    });
const containers4 = document.querySelectorAll('#contact');

    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove to allow retrigger
        }
      });
    }, { threshold: 0.1 });

    containers1.forEach(container => {
      observer1.observe(contact);
    });

const textarea = document.getElementById("autoTextarea");

textarea.addEventListener("input", function () {
    this.style.height = "auto"; // Reset height
    this.style.height = this.scrollHeight + "px"; // Set to scroll height
});


const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const lightMode = document.body.classList.contains("light-mode");

  if (lightMode) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  } else {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  }
});


  function HireMe(event) {
  event.preventDefault(); // prevent default anchor behavior

  const email = "pmeet9174@email.com";
  const subject = "Hiring Conversation";
  const body = "Hi, I want to hire you...";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    window.location.href = mailtoLink;
  } else {
    const win = window.open(gmailWebLink, '_blank');

    // If popup blocked, fallback to mailto
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = mailtoLink;
    }
  }
}

function startSending() {
  const btn = document.getElementById("sendBtn");
  btn.classList.add("sending");
  btn.textContent = "Sending...";

  // Simulate sending complete
  setTimeout(() => {
    btn.classList.remove("sending");
    btn.textContent = "Send";
  }, 6000);
}

