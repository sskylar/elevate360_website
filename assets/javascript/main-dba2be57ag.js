const DropMenu = {
  init: () => {
    DropMenu.watchMobileTrigger()
    return DropMenu.watchPrimaryLinks()
  },
  watchMobileTrigger: () => {
    const nav_node = document.getElementById('nav')
    const nav_icon = document.getElementById('nav_icon')

    nav_icon.onclick = function click() {
        nav_node.classList.toggle('open')
        nav_icon.classList.toggle('open')
    }
  },
  watchPrimaryLinks: () => {
    const openMenu = (e) => {
        if (e.target.classList.contains('top-level-link')) {
            const navListElement = e.target.closest('.nav-item')

            // always close anything open
            DropMenu.closeAllSections(primayLinks)

            // open the specific set of links, if they exist
            if (!navListElement.classList.contains('no-secondary')) {
                navElement.classList.add('expanded')
                DropMenu.openPrimarySection(navListElement)                
            }
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
