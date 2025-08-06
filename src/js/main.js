// 🌗 Alternar Tema
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

// Seleciona o elemento do ícone dentro do botão
const themeIcon = toggleTheme.querySelector('i');

toggleTheme?.addEventListener("click", () => {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  rootHtml.setAttribute("data-theme", newTheme);

  // Altera o ícone e o aria-label para acessibilidade
  if (newTheme === "dark") {
    toggleTheme.setAttribute("aria-label", "Alternar para tema claro");
    themeIcon.classList.remove("bi-moon-stars");
    themeIcon.classList.add("bi-sun");
  } else {
    toggleTheme.setAttribute("aria-label", "Alternar para tema escuro");
    themeIcon.classList.remove("bi-sun");
    themeIcon.classList.add("bi-moon-stars");
  }
});


// 📍 Menu ativo (marca a seção atual)
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// 🍔 Menu hambúrguer (mobile)
const toggleMenu = document.getElementById("menu-toggle");
const mobileMenu = document.querySelector(".nav--mobile");

toggleMenu?.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// ⌨️ Efeito de digitação infinito
const typingElement = document.querySelector(".typing-text");
const textToType = "Desenvolvedor Front-end | Transformando ideias em experiências digitais intuitivas e responsivas.";
let isTyping = true;
let charIndex = 0;

function typeDeleteEffect() {
  if (!typingElement) return;

  if (isTyping) {
    if (charIndex < textToType.length) {
      typingElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeDeleteEffect, 120); // Velocidade de digitação
    } else {
      isTyping = false;
      setTimeout(typeDeleteEffect, 1500); // Pausa antes de apagar
    }
  } else {
    if (charIndex > 0) {
      typingElement.textContent = textToType.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeDeleteEffect, 60); // Velocidade de apagar
    } else {
      isTyping = true;
      setTimeout(typeDeleteEffect, 500); // Pausa antes de digitar novamente
    }
  }
}

typeDeleteEffect();