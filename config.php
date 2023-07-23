<?php

if(isset($_POST['cadastrar']))
	$nome = $_POST['nome'];
	$senha = $_POST['senha'];
	$check_senha = $_POST['check-senha'];
	if($senha != $check_senha){
		die("As senhas não correspondem.");
	}

	$host = "localhost";
	$banco = "pcgamer";
	$user = "root";
	$senha_user = "";

	$con = mysqli_connect($host, $user, $senha_user, $banco);

	if(!$con){
		die("Conexão falhou.".mysqli_connect_error());
	}
	$sql ="INSERT INTO Orcamento (Nome, Senha) VALUES('$nome', '".md5($senha)."')";
	$rs = mysqli_query($con, $sql);
	
	if ($rs) {
        // Cadastro bem-sucedido, redirecionar para a página de login
        header("Location: logar.php");
        exit();
    } else {
        echo "Ocorreu um erro ao cadastrar.";
    }

?>