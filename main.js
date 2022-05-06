window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
showNavOnScroll()
showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('expanded-menu')
}

function closeMenu() {
  document.body.classList.remove('expanded-menu')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 300
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
