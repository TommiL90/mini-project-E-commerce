const tagUl = document.getElementById("lista");

//console.log(tagUl)
//console.log(tagUl.children)

//1). Listar produtos

function listarTodosProdutos(lista, referenciaHtml) {
  // antes de add novo produto, tenho que limpar antes de add, para não duplicar produtos en tela Html

  referenciaHtml.innerHTML = "";
  //console.log(referenciaHtml)
  for (let i = 0; i < lista.length; i++) {
    let produto = lista[i];

    //console.log(lista[i])
    //2). categoriza

    let produtoMontado = criarTemplate(produto);
    //console.log(produtoMontado)
    //3). jogar no HTML
    referenciaHtml.appendChild(produtoMontado);
  }
}

listarTodosProdutos(data, tagUl);

//2.5) Criar template

function criarTemplate(produto) {
  let image = produto.img;
  let nameItem = produto.nameItem;
  let description = produto.description;
  let value = produto.value;
  let addCart = produto.addCart;
  let tag = produto.tag[0];
  let imageDescription = produto.nameItem;
  let id = produto.id

  let tagli = document.createElement("li");

  let tagDiv1 = document.createElement("div");
  let tagImage = document.createElement("img");
  let tagDiv2 = document.createElement("div");
  let tagSmall = document.createElement("small");
  let tagH4 = document.createElement("h4");
  let tagPdescription = document.createElement("p");
  let tagPPrice = document.createElement("p");
  let tagButton = document.createElement("button");

  tagImage.src = image;
  tagImage.alt.innerText = `${imageDescription}`;
  tagButton.setAttribute("class", "lista-favoritos")
  tagButton.setAttribute("id", `${id}`)

  tagSmall.innerText = tag;
  tagH4.innerText = nameItem;
  tagPdescription.innerText = description;
  tagPPrice.innerHTML = `<strong>R$ ${value}</strong>`;
  tagButton.innerText = addCart;

  tagSmall.classList.add("type");
  tagH4.classList.add("title");
  tagPdescription.classList.add("description");
  tagPPrice.classList.add("price");
  tagButton.classList.add("add-carrinho");

  tagDiv1.appendChild(tagImage);
  tagDiv2.append(tagSmall, tagH4, tagPdescription, tagPPrice, tagButton);

  tagli.append(tagDiv1, tagDiv2);

  return tagli;
}


// retornar segun id
let btnTodos = document.getElementById("todos");
let btnAccesorios = document.getElementById("accesorios");
let btnCalcados = document.getElementById("calcados");
let btnCamisetas = document.getElementById("camisetas");

btnTodos.addEventListener("click", retornaTodos);

function retornaTodos(e) {
  e.preventDefault();

  listarTodosProdutos(data, tagUl);
}

btnAccesorios.addEventListener("click", retornaAccesorios);

function retornaAccesorios(e) {
  
  e.preventDefault();

  let listaFiltrada = [];

  for (let i = 0; i < data.length; i++) {
    //console.log(data[i])
    let tag = data[i].tag[0];

    if (tag.toUpperCase() == "Acessórios".toUpperCase()) {
      listaFiltrada.push(data[i]);
    }
  }
  listarTodosProdutos(listaFiltrada, tagUl);
}

btnCalcados.addEventListener("click", retornaCalcados);

function retornaCalcados(e) {
  
  e.preventDefault();

  let listaFiltrada = [];

  for (let i = 0; i < data.length; i++) {
    //console.log(data[i])
    let tag = data[i].tag[0];

    if (tag.toUpperCase() == "Calçados".toUpperCase()) {
      listaFiltrada.push(data[i]);
    }
  }
  listarTodosProdutos(listaFiltrada, tagUl);
}

btnCamisetas.addEventListener("click", retornaCamisetas);

function retornaCamisetas(e) {
  
  e.preventDefault();
  
  let listaFiltrada = [];

  for (let i = 0; i < data.length; i++) {
    //console.log(data[i])
    let tag = data[i].tag[0];

    if (tag.toUpperCase() == "Camisetas".toUpperCase()) {
      listaFiltrada.push(data[i]);
    }
  }
  listarTodosProdutos(listaFiltrada, tagUl);
}
