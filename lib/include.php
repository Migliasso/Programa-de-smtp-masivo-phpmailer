<?php
ini_set("session.cookie_httponly", 1);
if( isset($_SERVER['HTTPS']) ) {
	$link ='https://'. $_SERVER['SERVER_NAME'];
	ini_set( "session.cookie_secure", 1);
} else {
	$link ='http://'. $_SERVER['SERVER_NAME'];
	ini_set( "session.cookie_secure", 0);
}
ini_set('session.use_only_cookies', 1);
setcookie('session-cookie-key', 'data', 0, '/', 'http://'.$_SERVER['HTTP_HOST'], true, true);
header_remove('X-Frame-Options');
header('X-Frame-Options: DENY');
Header('X-Frame-Options: ALLOW-FROM '.$link);
//header('X-Frame-Options: ALLOW-FROM http://'.$_SERVER["HTTP_HOST"].'/dis_plantillas_add_edit.php');
include_once(__DIR__.'/config.ini.php'); //incluimos configuración
include_once(__DIR__.'/common.php'); //incluimos las funciones

/*if (!estoy_logeado()) { // si no estoy logeado
    //header('Location: dis_login.php'); //saltamos a la página de login
	?>
		<!--<script languaje="javascript">
			window.location.href='/index.php';
		</script>-->
  <?php
	/*die('Acceso no autorizado'); // por si falla el header (solo se pueden mandar las cabeceras si no se ha impreso nada)
}*/
// set inactive to 10 minutes (in seconds)
$inactive = 60000;
if (!empty($_SESSION['timeout'])) {
  // set session life to current time minus timeout
  $session_life = time() - $_SESSION['timeout'];
  // check if your session life is greater than 10 minutes
  if ($session_life > $inactive) {
    //session_destroy();
    //header("Location: dis_logout.php");
		?>
		<script languaje="javascript">
			window.location.href='/index.php';
		</script>
		<?php
    die;
	}
}

$_SESSION['timeout'] = time();

?>
