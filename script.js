//seleciona todos os elementos requeridos 
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {//depois do carregamento da janela
    filterItem.onclick = (selectedItem) => {//quando o usr clicar no item a ser filtrado
        if (selectedItem.target.classList.contains("item")) {//se o usr clicar no elemento que tem a classe .item
            filterItem.querySelector(".active").classList.remove("active");//remove active do elemento anterior
            selectedItem.target.classList.add("active");//adiciona active no elemento clicado
            let filterName = selectedItem.target.getAttribute("data-name");//pega o elemento pelo data-name
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");//pega valor do data-name da imagem
                //se o usr clicar em todos ou no item selecionado
                if((filterImages == filterName) || filterName == "all"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)"); //adicionando atributo de onclick em todas as imagens disponíveis
        
    }
}

// Mostrar imagem em tela cheia
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

// função tela cheia
function preview(element){
    document.querySelector("body").style.overflow = "hidden"; //não permite scroll na imagem
    let selectedPrevImg = element.querySelector("img").src; //pega origam da imagem clicada
    let selectedImgCategory = element.getAttribute("data-name"); //pega o data-name da imagem clicada
    categoryName.textContent = selectedImgCategory; //passa o data-name da imagem clicada como categoria
    previewImg.src = selectedPrevImg; //passa o src da imagem clicada para tela cheia
    previewBox.classList.add("show"); //mostra preview-box
    shadow.classList.add("show"); //mostra shadow
    closeIcon.onclick = ()=>{
        previewBox.classList.remove("show"); //oculta preview-box
        shadow.classList.remove("show"); //remove shadow
        document.querySelector("body").style.overflow = "scroll";//mostra scroll bar do body
    }
}