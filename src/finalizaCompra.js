var botaoFinalizar = document.getElementById('botaoFinalizar');
botaoFinalizar.addEventListener('click', finalizarCompra);

function finalizarCompra(){
    // Obtem os dados do LocalStorage
    var carrinho = localStorage.getItem('carrinho');
    var idUsuario = localStorage.getItem('idUsuario');
    
    //adiciona em um array para posteriormente transformar em JSON
    var data = {
        carrinho: carrinho,
        idUsuario: idUsuario
      };
      
      // Envie os dados para o PHP usando fetch API
      fetch('finalizaCompra.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //tranforma em JSON
      })
      .then(response => {
        if (response.ok) { //recebe a resposta de ok
          alert("Compra efetuada com sucesso!!");
          localStorage.setItem('carrinho', '');
        }
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
}

