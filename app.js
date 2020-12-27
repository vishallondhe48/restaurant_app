const btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    let toggler = document.querySelector('#toggler')
    console.log(toggler.classList)
    toggler.classList.toggle('active')
    console.log('clicked')
    let navLinks = document.querySelector('#nav-links')
    navLinks.classList.toggle('nav-mobile')
})

