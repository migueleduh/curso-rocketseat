function toggleMode() {
    const html = document.documentElement

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem 
    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a imagem light
        html.classList.remove('light')
         img.setAttribute("src", "/assets/avatar.png")
    }
    else{
        //se estiver sem light mode, deixar a imagem normal
        html.classList.add('light')
        img.setAttribute("src","/assets/avatar-light.png")
    }
}