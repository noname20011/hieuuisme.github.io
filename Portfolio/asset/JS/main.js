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
// End Header

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