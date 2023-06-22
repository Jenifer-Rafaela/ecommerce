let botao = document.getElementById('meuBotao');
botao.addEventListener('click', addToCart);
let inputsTamanho = getSize();
let size = '';

function addToCart(){
  //Pega os dados do carrinho
    let price = document.getElementById('item-value').getAttribute('valor');
    let name = document.getElementById('item-name').textContent;
    let brand = document.getElementById('marca').textContent;
    let image = document.getElementById('item-img').src;
  
    //adiciona em um array para posteriormente transformar em JSON
    let item = {
      name: name,
      price: price,
      image: image,
      size: size,
      brand: brand,
      quantity: 1
    };

    //pega o carrinho do localStorage
    var cart = getCart();

    //verifica se já tem o produto no carrinho caso tenha apenas aumenta a quantidade
    var produtoExistente = cart.find(function (produto) {
      return produto.name === item.name && produto.size === item.size;
    });
  
    if (produtoExistente) {
      produtoExistente.quantity++; // Incrementar a quantidade do produto existente
    } else{
      cart.push(item); //coloca mais um produto no carrinho
    }

    //atualiza o carrinho no localStorage 
    saveCart(cart);

    alert('Item adicionado ao carrinho!');
}


function getCart() {
  // Verificar se o carrinho está armazenado no localStorage
  var cart = localStorage.getItem('carrinho');
  if (cart) {
    // Se estiver, converter de JSON para objeto JavaScript
    return JSON.parse(cart);
  } else {
    // Caso contrário, retornar um array vazio
    return [];
  }
}

function saveCart(cart) {
  // Converter o carrinho de objeto JavaScript para JSON
  var cartJSON = JSON.stringify(cart);

  // Salvar o carrinho no localStorage
  localStorage.setItem('carrinho', cartJSON);
}

function getSize(){
  //pega os inputs de tamanho de calçado 
  let inputsTamanho = document.getElementsByName('tamanho');

  //faz um loop nos inputs e pega aquele que foi clicado
  inputsTamanho.forEach(function(input) {
    input.addEventListener('click', function() {
      // Verifica se o input foi selecionado
      if (input.checked) {
        // Obtém o valor do input selecionado
        size = input.value;
      }
    });
  });
}