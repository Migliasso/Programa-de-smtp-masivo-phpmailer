<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ryaco Send Emails</title>

    <meta name="description" content="Program para el envio de emails">
    <meta name="author" content="">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="stylenav.css">
	<link rel="stylesheet" href="stylebase.css">

  </head>
	<body>
	<?php require_once "nav.php"; ?>

		<!-- <div class="container-fluid fondo-white"> 
			<div class="row mb-5 nav-shadow" >
				<div class="col-md-12 mt-3">
					<img src="./img/logo-landing.png" alt="">
				</div>
			</div>
		</div>-->

		<div class="container p-4  form fondo-white form-shadow">
		
			<div class="row">
				<div class="col-md-12">
					<h2 class="text-center mb-3">
						Envio de email
					</h2>
					<form role="form" class="mt-5"action="enviar-prueba.php" method="POST"  enctype="multipart/form-data"><!--form-->
						
						<div class="form-group"><!--form asunto-->

							<div class="mb-4" >
								<label for="exampleFormControlInput1" class="form-label">Asunto</label>
								<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Escriba su Asunto" name='asunto'>
							</div>

						</div>

						<div class="form-group" ><!--form mensaje-->
							
							<div class="mb-4">

								<div>
									<label for="formFileMultiple" class="form-label">mensaje</label>
									<input class="form-control" type="file" id="formFileMultiple" multiple name='mensaje'>
								</div>
							</div>

						</div>

						<div class="form-group"><!--form destino-->
							
							<div class="mb-3">

								<label for="formFileMultiple" class="form-label">Destinos (.txt)</label>
								<input class="form-control" type="file" id="formFileMultiple" multiple name='destinos'>
							</div>

						</div>
						
						<button type="submit" class="btn btn-primary">
							Enviar emails
						</button>
					</form>
				</div>
			</div>
		</div>

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
	</body>
	
</html>