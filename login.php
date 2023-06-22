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

// Dados enviados pelo formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Verifica se o email já existe no banco de dados e pega o nome e sobrenome
$sqlLogin = "SELECT Id, Pnome, Snome FROM `usuarios` WHERE email='$email' AND senha='$senha'";

//Atribui o resultado da query para a variavel result
$result = $conexao->query($sqlLogin);

if($result->num_rows === 1){ // O email e senha existem
    //pega o nome, sobrenome e o id
    $row = $result->fetch_assoc();
    $Pnome = $row["Pnome"];
    $Snome = $row["Snome"];
    $id = $row["Id"];
    
    echo "<script>
    localStorage.setItem('nomeUsuario', '" . $Pnome . "');
    localStorage.setItem('sobrenomeUsuario', '" . $Snome . "');
    localStorage.setItem('idUsuario', '" . $id . "');
    </script>";
    recomendacao($id);
} else{ //email e senha não existe
    echo "<script>
    alert('Email ou senha incorretos.');
    </script>
    <meta http-equiv='refresh' content='0, url=login.html'>"; // faz o reaload da página de login
}

// Verificar se cliente tem pedidos na loja 
function recomendacao($id){ //recebe o id para fazer a busca no banco de dados
    global $conexao;
    //pega o pedidos feitos pelo id recuperado no login e faz a contagem de qual marca mais foi comprada
    
    $sqlMarca = "SELECT ip.marca, COUNT(ip.marca) AS conta 
    FROM itens_pedido AS ip 
    WHERE ip.pedidoId IN (
        SELECT p.Pedido 
        FROM pedido AS p 
        WHERE p.ClienteId = '$id') 
    GROUP BY ip.marca 
    ORDER BY conta DESC 
    LIMIT 1";
    
    $result = $conexao->query($sqlMarca);
     
    if ($result->num_rows === 1) {
        // Obtém a marca mais comprada
        $row = $result->fetch_assoc(); // pega a linha retornada do banco de dados
        $marca = $row['marca'];
        
        // Redireciona o Cliente para a página da marca que ele mais compra 
        echo "<meta http-equiv='refresh' content='0, url=./marcas/" . $marca . ".html'>";
    } else {
        //Caso ainda não tenha nenhuma pedido é redirecionado para a página de destaques
        echo "<meta http-equiv='refresh' content='0, url=inicio.html'>";
    }
}
//fecha conexão com o banco de dados
$conexao->close();
?>