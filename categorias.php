<!DOCTYPE html>
<html>
<head>
	<title>Campaña contactos</title>
	<link rel="icon" type="image/jpg" href="img/ryaco-250x92.png">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="stylenav.css">
	<link rel="stylesheet" href="stylebase.css">
	<?php require_once "dependencias.php"; ?>
</head>
<body>
	<nav>
		<div>
		<?php require_once "nav.php"; ?>
		</div>
	</nav>
	<div class="container">

	


		<div class="caja">
			<h1 class="display-4">Campañas</h1>
			<button class="btn btn-primary" data-toggle="modal" data-target="#modalAgregarCategoria">
				<span class="fas fa-book"></span> Agregar Campaña
			</button>
			<hr class="my-4">
			
			<div id="cargaTablaCategorias"></div>
		</div>

		<?php 
			require_once "vistas/categorias/modalAgregar.php";
			require_once "vistas/categorias/modalActualizar.php";  
		?>
	</div>

	<script src="public/js/categorias.js"></script>
</body>
</html>