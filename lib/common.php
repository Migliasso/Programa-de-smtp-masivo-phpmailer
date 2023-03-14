<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//include(__DIR__ . '/lib_ext.php');
if ( defined('DATABASE') ){
	if (DATABASE == 'pgsql')
		include(__DIR__ . '/pg.lib.php');
	if (DATABASE == 'mssql')
		include(__DIR__ . '/ms.lib.php');
	if (DATABASE == 'mysql')
		include(__DIR__ . '/my.lib.php');
}
?>