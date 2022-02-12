const btnMobile = document.getElementById("btn-mobile")

function toggleMenu(event){
  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active) {event.currentTarget.setAttribute('aria-label', 'Fechar menu')
} else {
  event.currentTarget.setAttribute('aria-label', 'Abrir menu')
};
}

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)

const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',

  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
