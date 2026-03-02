/** @type {HTMLButtonElement} */
const Buttons = document.querySelectorAll(".Button-Pesan")
const Search = document.querySelectorAll(".Menu-Card")
const Input = document.getElementById("Search-Input-Id")
const footer = document.getElementById("footer-page")
const NavDiv = document.getElementById("Navigation-Div")
const NavMenuTop = document.getElementById("Navigation-Menu-Top")
const MenuTop = document.getElementById("Menu-Top")
const RigtMenuTop = document.getElementById("Right-Menu-Top")

let moved = false
let MaxWindows = document.documentElement.scrollHeight - window.innerHeight
let pageX, pageY


function updateMaxScroll() {
    MaxWindows = document.documentElement.scrollHeight - window.innerHeight
}

function UpdateFooterPage() {
    if (window.scrollY >= MaxWindows - 35 ) {
        footer.style.transform = "translateY(-100px)"
    } else if (window.scrollY <= MaxWindows - 35 ) {
        footer.style.transform = "translateY(100px)"
    }
}

function UpdateMenuTopPage() {
    const navBottom = NavDiv.getBoundingClientRect().bottom
    const menuTopTop = MenuTop.getBoundingClientRect().top

    if (menuTopTop < navBottom && !moved) {
        NavMenuTop.appendChild(RigtMenuTop)
        moved = true
    }

    if (navBottom < menuTopTop && moved) {
        MenuTop.appendChild(RigtMenuTop)
        moved = false
    }
}

function ScrollEvent(){
    UpdateFooterPage()
    UpdateMenuTopPage()
    updateMaxScroll()
}

window.addEventListener("resize", ScrollEvent)
window.addEventListener("scroll", ScrollEvent)

document.addEventListener("mousemove", e => {
    pageX = e.pageX
    pageY = e.pageY
})

Buttons.forEach(Button => {
    Button.addEventListener("click", e => {
        
    })
})


Input.addEventListener("keyup", () => {
    Search.forEach(Card => {
        let text = Card.textContent.toLowerCase();
        Card.style.display = text.includes(Input.value.toLowerCase()) ? "" : "none";
        ScrollEvent()
    })
})
