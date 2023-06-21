const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const title = document.getElementsByClassName('title')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    title.classList.toggle('active')
})