// ===== Theme Toggle =====
;(() => {
  const themeToggle = document.getElementById("themeToggle")
  const themeToggleMobile = document.getElementById("themeToggleMobile")
  const html = document.documentElement

  // Get saved theme from localStorage or default to system preference
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  // Apply theme
  function applyTheme(theme) {
    if (theme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = html.classList.contains("dark") ? "dark" : "light"
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    applyTheme(newTheme)
  }

  // Initialize theme
  applyTheme(getPreferredTheme())

  // Event listeners
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme)
  }
})()

// ===== Mobile Menu Toggle =====
;(() => {
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      mobileMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
      })
    })
  }
})()

// ===== Footer Year =====
;(() => {
  const yearElements = document.querySelectorAll("#currentYear")
  const currentYear = new Date().getFullYear()
  yearElements.forEach((el) => {
    el.textContent = currentYear
  })
})()

// ===== Contact Form Validation =====
;(() => {
  const contactForm = document.getElementById("contactForm")
  const successMessage = document.getElementById("successMessage")
  const sendAnother = document.getElementById("sendAnother")

  if (!contactForm) return

  // Form fields
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const subjectInput = document.getElementById("subject")
  const messageInput = document.getElementById("message")

  // Error messages
  const nameError = document.getElementById("nameError")
  const emailError = document.getElementById("emailError")
  const subjectError = document.getElementById("subjectError")
  const messageError = document.getElementById("messageError")

  // Validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Show error
  function showError(input, errorElement, message) {
    input.classList.add("error")
    errorElement.textContent = message
    errorElement.classList.add("active")
  }

  // Clear error
  function clearError(input, errorElement) {
    input.classList.remove("error")
    errorElement.textContent = ""
    errorElement.classList.remove("active")
  }

  // Clear error on input
  function setupClearOnInput(input, errorElement) {
    input.addEventListener("input", () => {
      clearError(input, errorElement)
    })
  }

  setupClearOnInput(nameInput, nameError)
  setupClearOnInput(emailInput, emailError)
  setupClearOnInput(subjectInput, subjectError)
  setupClearOnInput(messageInput, messageError)

  // Validate form
  function validateForm() {
    let isValid = true

    // Name validation
    if (!nameInput.value.trim()) {
      showError(nameInput, nameError, "Name is required")
      isValid = false
    } else {
      clearError(nameInput, nameError)
    }

    // Email validation
    if (!emailInput.value.trim()) {
      showError(emailInput, emailError, "Email is required")
      isValid = false
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, emailError, "Please enter a valid email address")
      isValid = false
    } else {
      clearError(emailInput, emailError)
    }

    // Subject validation
    if (!subjectInput.value.trim()) {
      showError(subjectInput, subjectError, "Subject is required")
      isValid = false
    } else {
      clearError(subjectInput, subjectError)
    }

    // Message validation
    if (!messageInput.value.trim()) {
      showError(messageInput, messageError, "Message is required")
      isValid = false
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, messageError, "Message must be at least 10 characters")
      isValid = false
    } else {
      clearError(messageInput, messageError)
    }

    return isValid
  }

  // Form submit
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Show success message
      contactForm.classList.add("hidden")
      successMessage.classList.add("active")

      // Reset form
      contactForm.reset()
    }
  })

  // Send another message
  if (sendAnother) {
    sendAnother.addEventListener("click", () => {
      successMessage.classList.remove("active")
      contactForm.classList.remove("hidden")
    })
  }
})()

// ===== Smooth scroll for anchor links =====
;(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})()



// ===== Stats Count Up Animation (Slow & Smooth) =====
;(() => {
  const counters = document.querySelectorAll(".stat-value")
  let animated = false

  function startCount() {
    if (animated) return

    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target, 10)
      const suffix = counter.dataset.suffix || ""
      const duration = 2000 // ⏱️ ល្បឿន (ms) — អាចកែ 2500 ឲ្យយឺតជាង
      let startTime = null

      function animate(timestamp) {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percent = Math.min(progress / duration, 1)

        const value = Math.floor(percent * target)
        counter.textContent = value + suffix

        if (percent < 1) {
          requestAnimationFrame(animate)
        } else {
          counter.textContent = target + suffix
        }
      }

      requestAnimationFrame(animate)
    })

    animated = true
  }

  const statsSection = document.querySelector(".stats-grid")

  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCount()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(statsSection)
  }
})()

