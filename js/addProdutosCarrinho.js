let btnsProdutos = document.getElementsByClassName("lista-favoritos");
let favCount = 0;
let totalPrice = 0;

PesquisaProdutoLista();

function PesquisaProdutoLista() {
  for (let i = 0; i < btnsProdutos.length; i++) {
    let botao = btnsProdutos[i];

    botao.addEventListener("click", function (e) {
      let id = parseInt(e.target.id);

      let produto = comparaId(id);

      if (!produto) {
        alert("Este artigo não esta disponivel na base de dados.");
      } else {
        removerTexto();
        inserirFavorito(produto);
      }
    });
  }
}


function comparaId(id) {
  for (let i = 0; i < data.length; i++) {
    let produtoData = data[i];
    let idProdutoData = produtoData.id;

    if (id === idProdutoData) {
      return produtoData;
    }
  }
  return false;
}

function inserirFavorito(produto) {
  let tagUlCarrinho = document.getElementsByClassName(
    "lista-carrinho-compras"
  )[0];

  let image = produto.img;
  let nameItem = produto.nameItem;
  let value = produto.value;
  let imageDescription = produto.nameItem;

  let tagli = document.createElement("li");

  let tagDiv1 = document.createElement("div");
  let tagImage = document.createElement("img");
  let tagDiv2 = document.createElement("div");
  let tagH4 = document.createElement("h4");
  let tagPPrice = document.createElement("p");
  let tagButton = document.createElement("button");

  tagImage.src = image;
  tagImage.alt.innerText = `${imageDescription}`;
  tagButton.setAttribute("class", "remover");
  tagButton.setAttribute("id", "remover");

  tagH4.innerText = nameItem;
  tagPPrice.innerHTML = `<strong>R$ ${value}</strong>`;
  tagButton.innerText = "Remover produto";

  tagH4.classList.add("title");
  tagPPrice.classList.add("price");
  tagButton.setAttribute("class", "remover");
  tagButton.setAttribute("id", "remover");

  // add fuuncionalidade botao remover
  tagButton.addEventListener("click", function (event) {
    //IDENTIFICANDO BOTÃO
    let button = event.target;
    //imag == button = false
    //button == button = false
    if (button.tagName == "BUTTON") {
      //ACESSANDO ELEMENTO PAI
      let li = button.closest("li");

      //REMOVENDO ELEMENTO
      li.remove();
      addText();
      //remover n contador e sustrair $ de preços
      favCount--;
      document.getElementById("quantidade").innerHTML = `${favCount}`;

      totalPrice -= value;
      document.getElementById("total-Price").innerHTML = `R$ ${totalPrice}`;
    }
  });
  //.. continuidade do template
  tagDiv1.appendChild(tagImage);
  tagDiv2.append(tagH4, tagPPrice, tagButton);

  tagli.append(tagDiv1, tagDiv2);

  tagUlCarrinho.appendChild(tagli);

  //add contador e somador de preços
  favCount++;
  document.getElementById("quantidade").innerHTML = `${favCount}`;

  totalPrice += value;
  document.getElementById("total-Price").innerHTML = `R$ ${totalPrice}`;
}

// function remover(event) {
//   //IDENTIFICANDO BOTÃO
//   let button = event.target;
//   //imag == button = false
//   //button == button = false
//   if (button.tagName == "BUTTON") {
//     //ACESSANDO ELEMENTO PAI
//     let li = button.closest("li");

    
//     //REMOVENDO ELEMENTO
//     li.remove();
   
//     //remover n contador e sustrair $ de preços
//     favCount--;
//     document.getElementById("quantidade").innerHTML = `${favCount}`;

//     totalPrice -= value;
//     document.getElementById("total-Price").innerHTML = `R$ ${totalPrice}`;
//   }
// }

function removerTexto() {
  let toggleCarrinho = document.getElementsByClassName("texto-carrinho")[0];
  let toggleCarrinhoTotal =
    document.getElementsByClassName("carrinho-Total")[0];

  if (toggleCarrinho.classList.contains("toggle-carrinho")) {
    toggleCarrinho.classList.remove("toggle-carrinho");
  }

  if (toggleCarrinhoTotal.classList.contains("toggle-total")) {
    toggleCarrinhoTotal.classList.remove("toggle-total");
  }
}

function addText() {
  let ul = document.getElementsByClassName("lista-carrinho-compras")[0];
  let ulLength = ul.children.length;

  if (ulLength < 2) {
    let toggleCarrinho = document.getElementsByClassName("texto-carrinho")[0];
    toggleCarrinho.classList.add("toggle-carrinho");

    let toggleCarrinhoTotal = document.getElementsByClassName("carrinho-Total")[0]

    toggleCarrinhoTotal.classList.add("toggle-total")
  }

}
