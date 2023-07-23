<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Formulário</title>
	<link rel="stylesheet" href="./src/css/registro.css">
	<
</head>
<body>
	<form action="config.php" method="POST">
		<div class="nome">
			<label for="nome">Nome:</label>
			<br/>
			<input type="text" name="nome" placeholder="Digite seu nome" id="nome" class="input" required>
			<br/><br/>
			<label for="senha">Senha:</label>
			<br/>
			<input type="password" name="senha" placeholder="Digite sua senha" id="senha" class="input" required>
			<br/><br/>
			<label for="check-senha">Repita sua Senha:</label>
			<br/>
			<input type="password" name="check-senha" placeholder="Repita sua senha" id="check-senha" class="input" required>
			<br/><br/>
			<button class="btn1" type="submit" name="cadastrar" id="cadastrar">Cadastrar</button>

			<span class="ou">ou</span>

			<button class="btn1" onclick="window.location.href='logar.php'">Conecte-se</button>
		</div>
	</form>

	<script src="script.js"></script>
</body>
</html>
