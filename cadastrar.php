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
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$dataNasc = $_POST['dataNasc'];

// Verifica se o email já existe no banco de dados
$sql = "SELECT * FROM usuarios WHERE email='$email'";

$result = $conexao->query($sql);

if($result->num_rows === 1){
    // O email já está em uso
    echo "<script>
    alert('Email já cadastrado.');
</script>
<meta http-equiv='refresh' content='0, url=cadastro.html'>
";

} else {
    
// O email não está em uso, pode prosseguir com o cadastro
$sql = "INSERT INTO usuarios (Pnome, Snome, email, senha, dataNasc) VALUES ('$nome','$sobrenome', '$email', '$senha', '$dataNasc')";

if($conexao->query($sql) === TRUE){
echo "<script>
          alert('Usuário cadastrado com sucesso.');
      </script>
      <meta http-equiv='refresh' content='0, url=login.html'>
";
} else {
    echo "<script>
          alert('Erro ao cadastrar.');
      </script>
      <meta http-equiv='refresh' content='0, url=cadastro.html'>";
}
}
// Fecha a conexão com o banco de dados
$conexao->close();
?>