const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const message1 = document.getElementsByClassName('index-messages')[0]
const message2 = document.getElementsByClassName('index-messages')[1]
const message3 = document.getElementsByClassName('index-messages')[2]
const btn = document.getElementById('portfolio-btn')


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    message1.classList.toggle('active')
    message2.classList.toggle('active')
    message3.classList.toggle('active')
    btn.classList.toggle('active')
})