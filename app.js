function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "inline"){
        campo.style.display = "none"    
    }else{
        campo.style.display = "inline"
    }
}

/*
projetos = {
    titulo: 'Karen',
    descricao: 'Projeto desenvolvido para identidade vivual' , 
    foto: 'kscapalogo.jpg'

}

okashi = {
    titulo: 'Jdmarca',
    descricao: 'Projeto da minha logo',  
    foto: 'okashitye'

}

jdlogo = {
    titulo: 'Jdmarca',
    descricao: 'Projeto da minha logo', 
    foto: 'jda.png'
}
*/

//let projetos = ['Identidade Visual Karen Santos' ,'Social Media para Okashi Doceria', 'JD minha Marca']
//let projetosDescricao = [
  //  'Projeto desenvolvido para utilização web com fins de divulgamento do trabalho da Nail Designer Karen Santos.',
    //'Projeto de Social Media desenvolvido para Doceria, afim de divulgar seus doces no instagram',
    //'Projeto da minha logo, onde exploro meu cliente mais exigente, ITS ME !.'
    // let fotos = ['kscapalogo.jpg' , 'okashitye.jpg' , 'logoeu.png']
//]

let projeto1 = {
    titulo: 'Karen Santos Identidade Visual' ,
    descricao: 'Projeto desenvolvido para utilização web com fins de divulgamento do trabalho da Nail Designer Karen Santos.' ,
    foto: 'kscapalogo.jpg'
}

let projeto2 = {
    titulo: 'Okashi Doceria' ,
    descricao: 'Projeto de Social Media desenvolvido para Doceria, afim de divulgar seus doces no instagram',
    foto: 'okashitye.jpg'
}

let projeto3 = {
    titulo: 'Minha Logo' ,
    descricao: 'Projeto da minha logo, onde exploro meu cliente mais exigente, ITS ME !.' ,
    foto: 'logoeu.png'
}

let projetos = [projeto1, projeto2, projeto3]

let projetoAtual = 0 

function ProximoProjeto(){
    if(projetoAtual < 2){
        projetoAtual++
    }else{
    projetoAtual = 0
}

     titulo = document.querySelector(".titulo-projeto")
     titulo.innerHTML = projetos[projetoAtual].titulo
    
     descricao = document.querySelector(".texto-corpo2")
     descricao.innerHTML = projetos[projetoAtual].descricao

     imagem = document.querySelector(".foto-perfil")
     imagem.src = "images/" + projetos[projetoAtual].foto
}