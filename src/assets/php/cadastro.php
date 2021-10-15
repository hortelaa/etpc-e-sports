<?php

$email = $_POST['email'];
$equipe = $_POST['equipe'];
$matricula = $_POST['matricula'];
$nome = $_POST['nome'];
$turma_e_curso = $_POST['turma-e-curso'];
$nicks = $_POST['nick-dos-integrantes-da-equipe'];

//Compo E-mail
$conteudo = "
 <=====EQUIPE=====>
 Email: $email
 Nome Completo: $nome
 Nome da Equipe: $equipe
 Matrícula: $matricula
 Turma e curso: $turma_e_curso
 Nick's: $nicks\n
";

$arquivo = fopen("../info/info.txt" , "a+");
fwrite($arquivo, $conteudo);

echo "<meta http-equiv='refresh' content='0;URL=../../public/cadastro-termos.html'>";

?>
