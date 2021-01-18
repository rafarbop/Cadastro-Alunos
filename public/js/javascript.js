document.getElementById("nav-home").onclick = () => {
    document.getElementById("home").style.display = "block"
    document.getElementById("novo-cadastro").style.display = "none"
    document.getElementById("lista-cadastro").style.display = "none"
}
document.getElementById("nav-novo-cadastro").onclick = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("novo-cadastro").style.display = "block"
    document.getElementById("lista-cadastro").style.display = "none"
}
document.getElementById("nav-lista-cadastro").onclick = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("novo-cadastro").style.display = "none"
    document.getElementById("lista-cadastro").style.display = "block"
}