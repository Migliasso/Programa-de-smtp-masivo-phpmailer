<?php
/*--------------------------------------------------------------------------------------------*/
/* <db.lib>																					  */
/*--------------------------------------------------------------------------------------------*/
/**
 * [conn(): Conectarse a la db]
 * @return [int] [link a la db]
 */
$link = '';


function conn($encode) {
	$link = pg_connect( "host=".SERVIDOR_PG." port=".PORT_PG." dbname=".BASE_DATOS." user=".USUARIO_PG." password=".PASSWORD_PG);
	//pg_exec("SET client_encoding = 'UTF-8'");
	pg_set_client_encoding( $encode );
	$GLOBALS['LINK'] = $link;
	return $link;
}

/**
 * [disconn(): Desconectarse de la db]
 * @param  [int] $p_link [Link de la db que quiere cerrarse]
 * @return [void]         []
 */
function disconn( $p_link) {
	pg_close($p_link);
}

/**
 * [connqry(): Conectarse a la db y ejecutar una sentencia sql]
 * @param  [String] $p_sqlStr 						[Sentencia sql a ejecutar]
 * @return [Cambia dependiendo de la sentencia]		[Resultado de ejecutar la sentencia sql]
 */
function connqry( $p_sqlStr, $encode = 'utf8' ) {
	$link = conn( $encode );
	$result = execQuery( $p_sqlStr);
	//disconn( $link );
	return $result;
}

/**
 * [execQuery(): Ejecuta una sentencia sql, previamente se debe conectar a la base de datos con la funcion conn()
 *               y al finalizar utlizar la funcion disconn()]
 * @param  [String] $p_sqlStr 						[Sentencia sql a ejecutar]
 * @return [Cambia dependiendo de la sentencia]		[Resultado de ejecutar la sentencia sql]
 */
function execQuery( $p_sqlStr) {
	$result = pg_query( $p_sqlStr);
	if (!$result) {
		error_log('Error al ejecutar la consulta SQL: ' . pg_last_error() . ' --- ' . $p_sqlStr ,E_USER_ERROR );
		return false;
	}
	return $result;
}

/**
 * [cnvToAsocArray(): Convierte un resultado de una sentencia sql en un array asociativo]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [array]          [Array asociativo]
 */
function cnvToAsocArray( $p_qryResult) {
	return pg_fetch_assoc( $p_qryResult);
}

/**
 * [cnvToArray(): Convierte un resultado de un sentencia sql en un array]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [array]          [array asociativo]
 */
function cnvToArray( $p_qryResult) {
	return pg_fetch_array( $p_qryResult);
}

function fetchAll( $p_qryResult){
	return pg_fetch_all( $p_qryResult);
}

/**
 * [escapeString(): Escapa los caracteres no permitidos, se usa para evitar sql-inyections]
 * @param  [String] $p_unscapedStr [Cadena sin escapar]
 * @return [String]                [Cadena con los caracteres no permitidos escapados]
 */
function escapeString( $p_unscapedStr) {
	return pg_escape_string( $p_unscapedStr);
}

/**
 * [cantFilas(): Calcula la cantidad de filas devuelta por una consulta]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [int]            [Cantidad de filas]
 */
function cantFilas( $p_qryResult) {
	return pg_num_rows( $p_qryResult);
}

/**
 * [lastInsertId(): Devuelve el valor de la pk del ultimo insert realizado]
 * @param  [int] 	$p_dblink [Link a la db]
 * @return [int]          	  [valor de la pk del ultimo insert realizado]
 */
function lastInsertId( $p_dblink) {
	$insert_query = execQuery("SELECT lastval();");
	$insert_row = cnvToArray($insert_query);
	return $insert_row[0];
}

/**
 * [freeResult description]
 * @param  [type] $p_qryResult [description]
 * @return [type]              [description]
 */
function freeResult( $p_qryResult) {
	return pg_free_result( $p_qryResult);
}

/**
 * [affectedRows description]
 * @param  [type] $p_dblink    [description]
 * @param  [type] $p_qryResult [description]
 * @return [type]              [description]
 */
function affectedRows( $p_dblink, $p_qryResult) {
	return pg_affected_rows( $p_qryResult);
}

/**
 * [SqlConcat description]
 * @param [type] $p_sql       [Porción del string del query que se concatena separado por coma. ej: campoA, ' ' , campoB]
 * @param string $p_separador [description]
 */
function SqlConcat( $p_sql, $p_separador = ',') {
	$arg = $p_separador;
	$array = explode($arg, $p_sql);
	$rtn ='';
	for($i = 0,$c=count($array); $i<$c; $i++){
		$rtn .= $array[$i]." || ";
	}
	$rtn = substr($rtn, 0, strlen($rtn)-3);
	return $rtn ;
}

/**
 * [sqlDateAdd description]
 * @param  [type] $p_date     [description]
 * @param  [type] $p_datepart d = days, m = months, y = years
 * @param  [type] $p_number   [description]
 * @return [type]             [description]
 */
function sqlDateAdd( $p_date, $p_datepart, $p_number) {
	switch ($p_datepart) {
		case 'd':
			$datepart = 'days';
			break;
		case 'm':
			$datepart = 'months';
			break;
		case 'y':
			$datepart = 'years';
			break;
	}
	$res = $p_date . ' + INTERVAL \'' . $p_number . ' ' . $datepart . '\'';
	return $res;
}

function sqlNow() {
	return 'now()';
}

/**
 * [SqlDateFormat devuelve la fecha formateada]
 * @param [type] $p_qry    [campo date a formatear]
 * @param [type] $p_format [formato fecha ej: 'dd/mm/yyyy', 'mm/yyyy']
 * @param string $p_ope    [operador ej: '/' , '-' , '.' , etc]
 */
function SqlDateFormat( $p_qry, $p_format, $p_ope = '') {
	$rtn = '';
	$arg = '/';
	$array = explode($arg, $p_format);
	$date = '';

	foreach ($array as $days){

		switch ($days) {
			case 'dd':
				$date .= "dd";
				break;
			case 'mm':
				$date .= "mm";
				break;
			case 'yyyy':
				$date .= "yyyy";
				break;
			case 'yy':
				$date .= "yy";
				break;
		}
		$date .= $p_ope;
	}

	if ($p_ope != '') {
		$rtn = substr($date, 0, strlen($date)-1);
	} else {
		$rtn = substr($date, 0, strlen($date));
	}

	$rtn = 'to_char('. $p_qry . ', \'' . $rtn . '\' )';
	return $rtn ;
}

function sql_select_limit( $p_qry, $p_offset = 0, $p_limit ) {
	if ($p_offset == NULL) {
		return $p_qry . ' limit ' . $p_limit;
	} else {
		return $p_qry . ' limit ' . $p_limit  . ' offset ' . $p_offset;
	}
}

function sql_select_top( $p_qry, $p_value) {
	return '(' . $p_qry . ' limit ' . $p_value . ')';
}

function isNull( $p_value){
	return is_null($p_value);
}

/**
 * [formatDate(): Retorna la fecha formateada para diferenciar MsSql 
 * @param  [?] $p_fechaformat [fecha a formaterar]
 */
function formatDate( $p_fechaformat ){
	return $p_fechaformat;
}

function getJuliantoDate( $p_date){
	$qry = "SELECT CAST ( '1899-12-30' AS DATE ) + CAST ( " . $p_date . " AS INTEGER ) as fecha";
	$row = cnvToAsocArray( connqry( $qry));
	return $row['fecha'];
}

function dateDiff( $p_day, $p_start, $p_end){
	return 'DATE_PART(\'day\', '.$p_start. ' - '.$p_end.' )';
}

function dateInterval( $p_now, $p_interval, $p_datePart ){
	return $p_now . " + INTERVAL  '". $p_interval." " . $p_datePart . "'";
}

function selectLastID( $id = null ){
	$qry = 'SELECT CURRVAL(dis_'. $id .'_seq)';
	return connqry( $qry);
}

function stringAgg($str){
	$rtn = 'STRING_AGG(' . $str . ')';
	return $rtn;
}

function sql_substring ($strCampo, $intInit, $intFin) {
	return "SUBSTRING(" . $strCampo . " FROM " . $intInit . " FOR " . $intFin . ")";
}
?>