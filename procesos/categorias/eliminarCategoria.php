<?php 

require_once "../../clases/Categorias.php";
$Categorias = new Categorias();
$idCategoria = $_POST['idCategoria'];
echo $Categorias->eliminaCategoria($idCategoria);

?>