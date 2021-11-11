<?php
//<=======================================DADOS============================================>
$email = array($_POST['email'], $_POST['email2'],$_POST['email3'], $_POST['email4'],$_POST['email5'],$_POST['email-reserva']);
$telefone = array($_POST['telefone'], $_POST['telefone2'],$_POST['telefone3'], $_POST['telefone4'],$_POST['telefone5'],$_POST['telefone-reserva']);
$equipe = $_POST['equipe'];
$matricula = array($_POST['matricula'],$_POST['matricula2'],$_POST['matricula3'],$_POST['matricula4'],$_POST['matricula5'],$_POST['matricula-reserva']);
$nome = array($_POST['nome'],$_POST['nome2'],$_POST['nome3'],$_POST['nome4'],$_POST['nome5'],$_POST['nome-reserva']);
$turma_e_curso = array($_POST['turma-e-curso'],$_POST['turma-e-curso2'],$_POST['turma-e-curso3'],$_POST['turma-e-curso4'],$_POST['turma-e-curso5'],$_POST['turma-e-curso-reserva']);
$nick = array($_POST['nick-dos-integrantes-da-equipe'],$_POST['nick-dos-integrantes-da-equipe2'],$_POST['nick-dos-integrantes-da-equipe3'],$_POST['nick-dos-integrantes-da-equipe4'],$_POST['nick-dos-integrantes-da-equipe5'],$_POST['nick-dos-integrantes-da-equipe-reserva']);
$count = 0;

//<===========================CONEXÃO-COM-BANCO-DE-DADOS================================>
$conexao = new mysqli('localhost','root','','etpc_esports');

for ($i=0; $i < count($email); $i++) {
    $query = "INSERT INTO registro (email, telefone, equipe, matricula, nome, turma_e_curso, nick)";
    $query .= " VALUES ('{$email[$i]}', '{$telefone[$i]}', '{$equipe}', '{$matricula[$i]}', '{$nome[$i]}', '{$turma_e_curso[$i]}', '{$nick[$i]}')";
    $resultado = mysqli_query($conexao,$query);
    if ($resultado){
        $count = $count+1;
    }
}

if ($count == 5 || $count == 6){
    echo "<meta http-equiv='refresh' content='0;URL=../../../public/cadastro-termos.html'>";
    mysqli_close($conexao);
}else{
    echo "<meta http-equiv='refresh' content='0;URL=../../../public/cadastro-erro.html'>";
    die();
}




//$resultado = mysqli_query($conexao,$query);
//print_r($query);
//if ($resultado){
//    echo "<meta http-equiv='refresh' content='0;URL=../../../public/cadastro-termos.html'>";
//    }else{
//        die('Erro de conexao('.mysqli_connect_errno().')'.mysqli_connect_error());
//    }   
//    mysqli_free_result($resultado);
//    mysqli_close($conexao); 


//<================================METÓDO-ANTIGO================================>
//Compo E-mail
//$conteudo = "
// <=====EQUIPE=====>
// Email: $email
// Nome Completo: $nome
// Nome da Equipe: $equipe
// Matrícula: $matricula
//Turma e curso: $turma_e_curso
//Nick's: $nicks\n
//";
//$arquivo = fopen("info.txt" , "a+");
//fwrite($arquivo, $conteudo);
//echo "<meta http-equiv='refresh' content='0;URL=../../../public/cadastro-termos.html'>";