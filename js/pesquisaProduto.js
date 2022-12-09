let btnPesquisa = document.getElementById("btn-pesquisa");



btnPesquisa.addEventListener("click", pesquisaProduto);

function pesquisaProduto(event) {
  event.preventDefault();
  event.stopPropagation();

  let listaFiltrada = [];

  let inputPesquisa = document.getElementById("barra-de-pesquisa");
  let inputValor = inputPesquisa.value;
  let count = 0

  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    let nomeProduto = produto.nameItem;

    if (inputValor.toUpperCase() == nomeProduto.toUpperCase()) {
      listaFiltrada.push(produto);
      count++;
    }
  }

  // listaFiltrada == ""
  //   ? alert("produto não encontrado")
  //   : listarTodosProdutos(listaFiltrada, tagUl);
   count > 0 ? listarTodosProdutos(listaFiltrada, tagUl) : alert ("produto não encontrado")
}
