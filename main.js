let dropDownItem = document.getElementsByClassName('dropDown')
let ulDropDown = document.getElementsByClassName('drop-down__items')
let dropDownArray = [dropDownItem[0], dropDownItem[1], dropDownItem[4], dropDownItem[7], dropDownItem[10], dropDownItem[13]]
let openDropDown;
let closeButton = document.getElementById('x-button')
let modal = document.getElementById('modal')
let backdrop = document.getElementById('backdrop')
let coursess = document.getElementsByClassName('fadeInUp')
let coursessArray = []
let slideShow = document.getElementsByClassName('bounceInRight')
const parent = document.getElementsByClassName('our-process')[0]

const toggleButton = document.getElementById('toggle-button')
const firstToggle = document.getElementById('first__toggle')
const secondToggle = document.getElementById('second__toggle')
const thirdToggle = document.getElementById('third__toggle')
const mobileMenu = document.getElementById('mobile-dropdown')
const dynamicNav = document.getElementsByClassName('dynamic-nav')[0]

toggleButton.addEventListener('click', () => {
    dynamicNav.classList.remove('dynamic-nav__height')
    dynamicNav.classList.remove('closeMainHeader')
    dynamicNav.classList.add('openedMainHeader')
    if (firstToggle.classList[1] !== 'rotate45') {
        firstToggle.classList.add('rotate45')
        thirdToggle.classList.add('rotate-45')
        secondToggle.classList.add('slide-middletoggle-bar')
        mobileMenu.classList.add('open')

    }
    else {
        firstToggle.classList.remove('rotate45')
        thirdToggle.classList.remove('rotate-45')
        secondToggle.classList.remove('slide-middletoggle-bar')
        mobileMenu.classList.remove('open')
        dynamicNav.classList.remove('openedMainHeader')
        dynamicNav.classList.add('closeMainHeader')
    }

});

let mobileMenuItem = document.getElementsByClassName('mobile-dropdown__item')
let mobileMenuItemList = document.getElementsByClassName('mobile-dropdown__sub-menu')

for (let i = 0; i < mobileMenuItem.length; i++) {
    mobileMenuItem[i].addEventListener('click', function () {
        if (mobileMenuItemList[i].style.display !== "block")
            mobileMenuItemList[i].style.display = "block"
        else {
            mobileMenuItemList[i].style.display = "none"
        }
    }, false)

}

closeButton.addEventListener('click', function () {
    backdrop.classList.add('close-modal')
    modal.classList.add('close-modal')
    setTimeout(() => {
        backdrop.style.display = "none";
        modal.style.display = "none";
    }, 200)
}, false)


dropDownFunc = (dropDown) => {
    if (openDropDown == undefined) {
        openDropDown = dropDown.toElement
    }
    else {
        if (openDropDown === dropDown.toElement) {
            openDropDown.style.textDecoration = "none"
            ulDropDown[dropDownArray.indexOf(openDropDown)].style.display = "none"
            openDropDown = undefined
            return
        }
        openDropDown.style.textDecoration = "none"
        ulDropDown[dropDownArray.indexOf(openDropDown)].style.display = "none"
        openDropDown = dropDown.toElement
    }

    dropDown.toElement.style.textDecoration = "underline"
    ulDropDown[dropDownArray.indexOf(dropDown.toElement)].style.display = "flex"
}

for (let i = 0; i < dropDownArray.length; i++) {
    dropDownArray[i].addEventListener('click', dropDownFunc, false)
}



window.addEventListener("scroll", onScroll);
for (let i = 0; i < coursess.length; i++) {
    coursessArray[i] = coursess[i]
}
function onScroll() {
    for (var item of coursessArray) {
        elementVisible(item);
    }
}
function elementVisible(el) {
    let top = el.offsetTop;
    let height = el.offsetHeight;
    let bottom = top + height;

    let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
    let IsBeforeTop = bottom < window.pageYOffset;

    if (!IsOverBottom && !IsBeforeTop) {
        el.classList.add("alignUp");
    }
}


var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.right >= 0 &&
        distance.bottom <= (window.innerHeight) &&
        distance.left <= (window.innerWidth)
    );
};
window.addEventListener('scroll', () => {
    if (isInViewport(parent)) {
        for (let i = 0; i < slideShow.length; i++) {
            slideShow[i].classList.add(`right-animate_${i + 1}`)
        }
    }
})


window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) {
        mobileMenu.classList.remove('open')
        dynamicNav.classList.remove('main-nav__height')
        dynamicNav.classList.add('closeMainHeader')
        firstToggle.classList.remove('rotate45')
        thirdToggle.classList.remove('rotate-45')
        secondToggle.classList.remove('slide-middletoggle-bar')
    }
})