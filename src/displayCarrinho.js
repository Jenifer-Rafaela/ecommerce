document.addEventListener('DOMContentLoaded', function() {
  // Obtem o carrinho do localStorage
  var cart = getCart();

  // Exibir o carrinho na página
  displayCart(cart);

  // Exibir o valor total na página
  displayTotal(cart);
  });
  
  function displayCart(cart) {
    // Corpo da tabela onde vai os produtos
    var tbody = document.getElementById('listaProdutos'); 
    tbody.innerHTML = ''; // Limpar o conteúdo anterior
    
    // Percorrer os produtos do carrinho
    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];

        // Cria elemento <tr> para armazenar os produtos
        var trElement = document.createElement('tr');

        /*Chama a função de criação das colunas da tabela dinamica,
        passando o produto, o índice e o elemento tr*/
        tbody.appendChild(getProducts(product, i, trElement)); 
    }
  }

  function getProducts(product, i, trElement){
    
    var imageElement = document.createElement('img'); 
    var divElement = document.createElement('div'); 
    var inputElement = document.createElement('input');
    var image = document.createElement('td');
    var nameElement = document.createElement('td');
    var priceElement = document.createElement('td');
    var sizeElement = document.createElement('td');
    var incrementButtonElement = document.createElement('button');
    var decrementButtonElement = document.createElement('button');
    var quantityElement = document.createElement('td');


    //Criar classes e atributos nos elementos
    imageElement.classList.add('imagem'); //cria classe
    inputElement.setAttribute('type', 'number'); //cria atributo
    inputElement.setAttribute('value', '0'); //cria atributo
    inputElement.setAttribute('readonly', 'true'); //cria atributo
    
     // Cria os botões de incremento e decremento
    incrementButtonElement.dataset.index = i;
    incrementButtonElement.addEventListener('click', incrementQuantity);
  
    decrementButtonElement.dataset.index = i;
    decrementButtonElement.addEventListener('click', decrementQuantity);
  
    // Definir os valores das células
    incrementButtonElement.textContent = '+';
    decrementButtonElement.textContent = '-';
    inputElement.value =  product.quantity;
    imageElement.src = product.image;
    nameElement.textContent = product.name;
    priceElement.textContent = 'R$ ' + priceConverter(product.price);
    sizeElement.textContent = 'Tamanho escolhido: ' + product.size;

    // Coloca os elementos na div, na imagem e na quantidade
    divElement.appendChild(incrementButtonElement);
    divElement.appendChild(inputElement);
    divElement.appendChild(decrementButtonElement);
    quantityElement.appendChild(divElement);
    image.appendChild(imageElement);

    // Adiciona os elementos à linha da tabela
    trElement.appendChild(imageElement);
    trElement.appendChild(nameElement);
    trElement.appendChild(priceElement);
    trElement.appendChild(sizeElement);
    trElement.appendChild(quantityElement);
  
    return trElement;
  }
  
  function decrementQuantity(event) {
    var cart = getCart(); //pega o carrinho do localStorage
    var index = event.target.dataset.index; //pega o index do botão selecionado

    //Se a quantidade for maior que 1 apenas diminui
    if(cart[index].quantity > 1){
        cart[index].quantity--;
        updateCart(cart); //Atualiza o carrinho no localStorage
    } else{
      // Se a quantidade for igual a 1 remove o produto do carrinho
        cart.splice(index, 1);
        updateCart(cart); //Atualiza o carrinho no localStorage
    }
    
  }

  function incrementQuantity(event) {
    var cart = getCart(); //pega o carrinho do localStorage
    var index = event.target.dataset.index; //pega o index do botão selecionado
    cart[index].quantity++; //adiciona mais 1 na quantidade
    updateCart(cart); //Atualiza o carrinho no localStorage
  }

  function updateCart(cart) {
    localStorage.setItem('carrinho', JSON.stringify(cart)); //atualiza o carrinho
    displayTotal(cart); //atualiza o valor total 
    displayCart(cart); // mostra o carrinho na página
  }

  function displayTotal(product) {
    let total = calculateTotal(product); //calcula o valor total
    let totalElement = document.getElementById('total');
    totalElement.textContent = total; 
  }
  
  function calculateTotal(product) {
    let total = 0;
    for (let i = 0; i < product.length; i++) { 
      if(product[i].quantity > 1){ //faz o loop e pega a quantidade de cada item
        total += product[i].price*parseFloat(product[i].quantity); //se for maior que 1 atualiza o preço do produto no total
      } else {
        total += parseFloat(product[i].price); //se não apenas coloca o preço no total
      }
    }
    return priceConverter(total); //converte o valor para ser apresentado corretamente
  }

  function priceConverter(product){
    var number = parseFloat(product);
    var valorFormatado = number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return valorFormatado;
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
  