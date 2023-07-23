<!DOCTYPE html>
<html>
<head>
    <title>Formulário de Login</title>
    <link rel="stylesheet" href="./src/css/login.css">
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="login.php">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>
        
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required><br><br>
        
        <input type="submit" value="Entrar">
    </form>
</body>
</html>
