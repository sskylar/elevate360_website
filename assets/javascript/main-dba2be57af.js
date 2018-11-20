const DropMenu = {
  init: () => {
    return DropMenu.watchPrimaryLinks()
  },
  watchPrimaryLinks: () => {
    const openMenu = (e) => {
        if (e.target.classList.contains('top-level-link')) {
            const navListElement = e.target.closest('.nav-item')

            navElement.classList.add('expanded')
            DropMenu.closeAllSections(primayLinks)
            DropMenu.openPrimarySection(navListElement)
        }
    }

    const closeMenu = (e) => {
        navElement.classList.remove('expanded')
        DropMenu.closeAllSections(primayLinks)
    }

    const navElement = document.getElementById('nav')
    const primayLinks = navElement.querySelectorAll('.primary')[0]

    primayLinks.addEventListener('mouseover', openMenu, false)
    primayLinks.addEventListener('touchenter', openMenu, false)
    navElement.addEventListener('mouseleave', closeMenu, false)
    navElement.addEventListener('touchleave', closeMenu, false)
  },
  openPrimarySection: (navListElement) => {
    navListElement.classList.add('open')
  },
  closeAllSections: (primayLinks) => {
    // close link sets that might be currently open
    const navListElements = primayLinks.querySelectorAll('.nav-item')
    if (navListElements) {
        Array.prototype.forEach.call(navListElements, (el) => {
          el.classList.remove('open')
        })
    }
  }
}

ready(DropMenu.init)

// ---------------------------------------------- first-load boilerplate stuff below

// fire once DOM is loaded
function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn)
  } else {
    fn()
  }
}
