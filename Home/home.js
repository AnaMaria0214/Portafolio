const navbar = document.querySelector(".nav");
const footer = document.querySelector(".footer");

document.addEventListener("DOMContentLoaded", () => {
  navbar.innerHTML = `
    <a href="../About/aboutMe" class="nav_Avatar">
        <img src="media/avatarAna.svg" alt="avatar" class="avatar" />
      </a>

      <ul class="nav_Menu">
      <div class="box">
      <li class="nav_section">
      <a href="">Home</a>
    </li>
    </div>
        
        <div class="box">
        <li class="nav_section">
          <a href="">About me</a>
        </li>
        </div>
        
        <div class="box">
        <li class="nav_section">
        <a href="">Contact me</a>
      </li>
      </div>
        
      </ul>
      
    `;
  footer.innerHTML = `
  <footer>
  <div class="footer-content">
<p class="unlimited-text">WE ARE UNLIMITED ✨</p>
<p>© 2024 Anresq. All rights reserved.</p>
</div>
</footer>`;
});
