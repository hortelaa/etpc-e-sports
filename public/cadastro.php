<?php

$email = $_POST['email'];
$equipe = $_POST['equipe'];
$matricula = $_POST['matricula'];
$nome = $_POST['nome'];
$turma_e_curso = $_POST['turma-e-curso'];
$nicks = $_POST['nick-dos-integrantes-da-equipe'];

$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

//Compo E-mail
$arquivo = "
 <html>
   <p><b>Nome: </b>$nome</p>
   <p><b>E-mail: </b>$email</p>
   <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
 </html>
";

$destino = 'bandeiraguel@gmail.com';
$assunto = 'test';

$headers = "MIME-Version 1.0\n";
$headers .= "Content-type: text/html; charset-iso-8859-1\n";
$headers .= "From: $nome <$email>";

mail($destino, $assunto, $arquivo, $headers);

echo "<meta http-equiv='refresh' content='10;URL=../cadastro-termos.html'>";

?>
