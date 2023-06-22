<?php

// Dados de conexão com o banco de dados
$usuario = "root";
$senha = "";
$database = "sneakersecommerce";
$host = "localhost";

// Conexão com o banco de dados
$conexao = new mysqli($host, $usuario, $senha, $database);

// Verificar conexão
if($conexao->connect_errno){
    die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
}

// Obtem os dados enviados na requisição e coloca dentro de um array
$data = json_decode(file_get_contents('php://input'), true); 

// Pega cada dado
$LocalStorageCart = $data['carrinho']; //pega do array o carrinho e coloca na variável como string
$LocalStorageCart = json_decode($LocalStorageCart, true); // passa o carrinho para array novamente
$LocalStorageIdUser = $data['idUsuario']; //pega do array o id do usuário

// Associa um pedido com o cliente
$sqlOrder = "INSERT INTO pedido (ClienteId) VALUES ('$LocalStorageIdUser')";

//verifica a conexão
if($conexao->query($sqlOrder) === TRUE){
    //pega o id inserido na conexão
    $lastInsertId = $conexao->insert_id;
    echo "Dados inseridos com sucesso.";
    inserirDados($lastInsertId);

} else{
    echo "Erro ao inserir dados: " . $conexao->connect_errno;
}


function inserirDados($idOrder){
    global $LocalStorageCart, $conexao;
    
    //faz um loop no array de carrinho para pegar cada dado
    foreach ($LocalStorageCart as $item) {

        $name = $item['name'];
        $brand = $item['brand'];
        $price = $item['price'];
        $quantity = $item['quantity'];
        $size = $item['size'];
        
        //Coloco na tabela de itens
        $sqlItem = "INSERT INTO itens_pedido(marca, nomeProduto, pedidoId, preco, quantidade, tamanhoProduto) VALUES ('$brand', '$name', '$idOrder', '$price', '$quantity', '$size')";
        
        if ($conexao->query($sqlItem) === TRUE) {
            echo "Dados inseridos com sucesso.";
            echo "<script>
            alert('Usuário cadastrado com sucesso.');
            </script>
            <meta http-equiv='refresh' content='0, url=../inicio.html'>";
        } else {
            echo "Erro ao inserir dados: " . $connect_errno;
        }
    }
}

$conexao->close();

?>