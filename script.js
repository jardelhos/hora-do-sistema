function carregar(){
    var x = document.getElementById('msg')
    var y = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 8
    x.innerHTML = `Agora são ${hora} horas`
    
    if (hora >=0 && hora<=12){
        imagem.src ="imagens/manha.PNG"
        document.body.style.background="#ff8c00"
    }
    else if(hora>12 && hora <=18){
        imagem.src ="imagens/tarde.PNG"
        document.body.style.background="#1a6fae"
    }
    else if(hora>18){
        imagem.src ="imagens/noite.PNG"
        document.body.style.background="#050029"
    }
    
}

