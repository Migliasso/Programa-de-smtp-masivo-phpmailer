<?php
include_once(__DIR__.'/login.lib.php'); 
//function encriptar($cadena, $clave = null) {
function encriptar_ant($cadena, $clave = null) {
	$cifrado = MCRYPT_RIJNDAEL_256;
	$modo = MCRYPT_MODE_ECB;
	
	$crypttext = mcrypt_encrypt($cifrado, substr (rtnCla() , 311, 32), $cadena, $modo,
		mcrypt_create_iv(mcrypt_get_iv_size($cifrado, $modo), MCRYPT_RAND)
	);
	return trim(base64_encode($crypttext));
}

//function desencriptar($cadena, $clave = null) {
function desencriptar_ant($cadena, $clave = null) {
	$cifrado = MCRYPT_RIJNDAEL_256;
	$modo = MCRYPT_MODE_ECB;
	$crypttext = base64_decode($cadena);
	$decrypttext =  mcrypt_decrypt($cifrado, substr (rtnCla() , 311, 32), $crypttext, $modo,
		mcrypt_create_iv(mcrypt_get_iv_size($cifrado, $modo), MCRYPT_RAND)
		);
	return trim($decrypttext);
}

//function encrypt($data) {
function encriptar($data) {
    $key = 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU=';
    // Remove the base64 encoding from our key
    $encryption_key = base64_decode($key);
    // Generate an initialization vector
    //$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));
    $iv = '1256436513165465';
    // Encrypt the data using AES 256 encryption in CBC mode using our encryption key and initialization vector.
    $encrypted = openssl_encrypt($data, 'aes-256-cbc', $encryption_key, 0, $iv);
    // The $iv is just as important as the key for decrypting, so save it with our encrypted data using a unique separator (::)
    return base64_encode($encrypted . '::' . $iv);
}

//function decrypt($data) {
function desencriptar($data) {
    $key = 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU=';
    // Remove the base64 encoding from our key
    $encryption_key = base64_decode($key);
    // To decrypt, split the encrypted data from our IV - our unique separator used was "::"
    list($encrypted_data, $iv) = explode('::', base64_decode($data), 2);
    return openssl_decrypt($encrypted_data, 'aes-256-cbc', $encryption_key, 0, $iv);
}

function rtnCla() {
	$c = base64_decode( ReturnParAlfa('PATH_PROTECT') );
	$f = file_get_contents(dirname(__DIR__).'/'.$c);
	return $f;
}

function base64url_encode($data) {
	$salt = 'ryacosa'; 
	return rtrim(strtr(base64_encode($data.$salt), '+/', '-_'), '='); 
}

function base64url_decode($data) { 
	$salt = 'ryacosa';
	return str_replace( $salt ,'' ,  base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT)) ); 
}
// error_log( base64url_encode( 'id'));

// error_log( base64url_decode( 'MTA1MXJ5YWNvc2E' ));
?>