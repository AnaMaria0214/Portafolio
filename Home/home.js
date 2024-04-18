const navbar = document.querySelector(".nav");

document.addEventListener("DOMContentLoaded", () => {
  navbar.innerHTML = `
    <a href="#" class="nav_Logo">
        <img src="media/Logo.jpeg" alt="logo" class="LogoImage" />
      </a>

      <ul class="nav__menu">
        <li class="nav_section">
          <a href="">Inicio</a>
        </li>
        <li class="nav_section">
          <a href="">Sobre mi</a>
        </li>
        <li class="nav_section">
          <a href="">Contactactame</a>
        </li>
      </ul>`;
});
