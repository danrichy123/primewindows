/* ============================================================
   Prime Window Cleaning NYC – Shared JavaScript
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  // ── Mobile Menu Toggle (hamburger ↔ X) ──
  var mobileToggle = document.getElementById("mobileToggle");
  var navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      var isOpening = !navMenu.classList.contains("active");
      navMenu.classList.toggle("active");
      mobileToggle.classList.toggle("active");

      // Reset all dropdowns when closing the menu
      if (!isOpening) {
        document.querySelectorAll(".nav-dropdown.open").forEach(function (d) {
          d.classList.remove("open");
        });
      }
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-menu a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        mobileToggle.classList.remove("active");
        document.querySelectorAll(".nav-dropdown.open").forEach(function (d) {
          d.classList.remove("open");
        });
      });
    });
  }

  // ── Dropdown Toggle on Mobile ──
  document.querySelectorAll(".nav-dropdown-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 968) {
        e.preventDefault();
        var parent = toggle.closest(".nav-dropdown");
        // Close all other open dropdowns first
        document.querySelectorAll(".nav-dropdown.open").forEach(function (d) {
          if (d !== parent) d.classList.remove("open");
        });
        parent.classList.toggle("open");
      }
    });
  });

  // ── Smooth Scrolling for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        var headerOffset = 125;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  });

  // ── Header Scroll Effect ──
  var header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // ── FAQ Accordion ──
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var wasActive = item.classList.contains("active");

      // Close all FAQ items in same section
      var section = item.closest(".faq-list");
      if (section) {
        section.querySelectorAll(".faq-item.active").forEach(function (open) {
          open.classList.remove("active");
        });
      }

      // Toggle the clicked one
      if (!wasActive) {
        item.classList.add("active");
      }
    });
  });

  // ── Service Card Click Navigation ──
  document.querySelectorAll(".service-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var link = card.querySelector(".service-link");
      if (link && link.href) {
        window.location.href = link.href;
      }
    });
  });

});
