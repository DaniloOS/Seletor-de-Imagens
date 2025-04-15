//Seleção de filtros e buttões

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

//Definir a função dos filter cards
const filterCards = e => {
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

//Integrar cada filterable card
filterableCards.forEach(card =>{
//Adicionar a classe hide para escoder os cards inicialmente
    card.classList.add("hide")
//Checar se os cards combinam com o botão que está filtrando
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "tudo"){
card.classList.remove("hide");
    }else {
        card.classList.add("hide");
      }
 })
};


//Adicionar event listener para cada filtro de botão
filterButtons.forEach(button => button.addEventListener("click", filterCards))