//VARIABLES

const solLuna = document.getElementById("sol-luna")
const html = document.getElementById("html")
const setTheme = theme => document.documentElement.className = theme


solLuna.addEventListener("click", () => {
    if(html.classList.contains("light")){
        html.setAttribute("class", "dark")
    }
    html.setAttribute("class", "light")
})