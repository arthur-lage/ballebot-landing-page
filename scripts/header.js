const mobileMenu = document.querySelector(".mobile-menu")

mobileMenu.addEventListener("click", () => {
    document.body.classList.toggle("menu-is-open")
    mobileMenu.classList.contains("open") ? mobileMenu.classList.remove("open") : mobileMenu.classList.add("open")
})