// Header
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
let navMenu = $('.nav__menu')
let navBtnClose = $('#nav-closed')
let navBtnShowMenu = $('#nav-toggle')
let navListItems = $$('.nav__item')
    // Begin Header
if (navBtnShowMenu) {
    navBtnShowMenu.onclick = function() {
        navMenu.classList.add('active-menu')
    }
}


if (navBtnClose) {
    navBtnClose.onclick = function() {
        navMenu.classList.remove('active-menu')
    }
}

for (let item of navListItems) {
    if (item) {
        item.onclick = function() {
            navMenu.classList.remove('active-menu')
        }
    }
}
//  End header



// SCROLL TOP

const scrollTop = $('.scroll-top')

function scrollBackTop() {
    const scrollY = window.pageYOffset
    if (scrollY > 500) {
        scrollTop.classList.add('scroll-active')
    } else {
        scrollTop.classList.remove('scroll-active')
    }
}
// Scroll Active link
const sections = $$('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}

// SCROLL Change background header
const header = $('#header')

function activeBgHeader() {
    const scrollY = window.pageYOffset
    if (scrollY > 50) {
        header.classList.add('active-bg')
    } else {
        header.classList.remove('active-bg')
    }
}

//  SCROLL ACTION
window.onscroll = function() {
    activeBgHeader()
    scrollActive()
    scrollBackTop()
}


// Skill
let skillHeader = $('.skill__header')
let skillList = $('.skill__list')

skillHeader.onclick = function() {
    let arrowOpen = $('.skill__icon-arrow')
    arrowOpen.classList.toggle('arrow--open')
    skillList.classList.toggle('skill__list--display')
}



// Qualification

let qualifyTabs = $$('[data-target]')
let qualifyContents = $$('[data-content]')
    //tab__active

qualifyTabs.forEach(tab => {
    let tabClass = $(tab.dataset.target)
    tab.onclick = function() {
        qualifyContents.forEach(content => {
            content.classList.remove('qualify__content--display')
        })
        tabClass.classList.add('qualify__content--display')
        qualifyTabs.forEach(tab => {
            tab.classList.remove('qualify__tabs--active')
        })
        tab.classList.add('qualify__tabs--active')
    }
});

// Services
let modalViews = $$('.service__modal')
let modalOpen = $$('.service__button')
let modalCloses = $$('.service__modal-close')

let showModal = function(modalClick) {
    modalViews[modalClick].classList.add('modal--active')
}

let closeModal = function(modalClose) {
    modalViews[modalClose].classList.remove('modal--active')
}

modalOpen.forEach((btnView, i) => {
    btnView.onclick = function() {
        showModal(i)
    }
})

modalCloses.forEach((btnClose, i) => {
    btnClose.onclick = function() {
        closeModal(i)
    }
})


// =========== DARK LIGHT THEME ==================

const themeBtn = $('#theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'uli-moon' ? 'add' : 'remove'](iconTheme)
}
themeBtn.onclick = function() {
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}