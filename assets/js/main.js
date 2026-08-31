/* TDAH en Femenino — interacciones de la página */
(function () {
  "use strict";

  // Marca que JS está activo (habilita el colapso "Leer más")
  document.documentElement.classList.add("js");

  // Menú móvil
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    // Cerrar el menú al pulsar un enlace (en móvil)
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  // "Leer más" / "Leer menos" en las tarjetas de recursos
  var readMoreButtons = document.querySelectorAll(".read-more");
  Array.prototype.forEach.call(readMoreButtons, function (btn) {
    btn.addEventListener("click", function () {
      var desc = document.getElementById(btn.getAttribute("aria-controls"));
      if (!desc) return;
      var expanded = desc.classList.toggle("expanded");
      btn.setAttribute("aria-expanded", String(expanded));
      btn.textContent = expanded ? "Leer menos" : "Leer más";
    });
  });

  // Año dinámico en el footer
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
