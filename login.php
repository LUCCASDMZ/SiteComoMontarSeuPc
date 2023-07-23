<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pcgamer";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$senha = $_POST['senha'];

// Consulta o banco de dados para verificar se o nome de usuário e senha existem
$sql = "SELECT * FROM Orcamento WHERE nome = '$nome' AND senha = '".md5($senha)."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Dados corretos, usuário autenticado
    header("Location: Orcamento.php");
    exit();
} else {
    // Dados incorretos, exibe mensagem de erro
    echo "<h2>Erro de autenticação</h2>";
    echo "<p>Nome de usuário ou senha incorretos. Tente novamente.</p>";
}

$conn->close();
?>
