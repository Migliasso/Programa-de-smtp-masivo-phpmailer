<?php
/*--------------------------------------------------------------------------------------------*/
/* <db.lib>																					  */
/*--------------------------------------------------------------------------------------------*/
/**
 * [conn(): Conectarse a la db]
 * @return [int] [link a la db]
 */
$link = conn();

function conn() {
	$link = mysqli_connect(SERVIDOR_MYSQL, USUARIO_MYSQL, PASSWORD_MYSQL, BASE_DATOS);
    if (!$link) {
        error_log('Error al conectar al servidor mysql: ' . mysqli_error(), E_USER_ERROR);
    }
    //mysqli_set_charset('utf8', $link );
	return $link;
}

/**
 * [disconn(): Desconectarse de la db]
 * @param  [int] $p_link [Link de la db que quiere cerrarse]
 * @return [void]         []
 */
function disconn( $p_link) {
	mysqli_close($p_link);
}

/**
 * [connqry(): Conectarse a la db y ejecutar una sentencia sql]
 * @param  [String] $p_sqlStr 						[Sentencia sql a ejecutar]
 * @return [Cambia dependiendo de la sentencia]		[Resultado de ejecutar la sentencia sql]
 */

function connqry( $p_sqlStr, $chartSet='utf8') {
	global $link;
	mysqli_set_charset($link, $chartSet);
	$result = execQuery($p_sqlStr);
	return $result;
}

/**
 * [execQuery(): Ejecuta una sentencia sql, previamente se debe conectar a la base de datos con la funcion conn()
 *               y al finalizar utlizar la funcion disconn()]
 * @param  [String] $p_sqlStr 						[Sentencia sql a ejecutar]
 * @return [Cambia dependiendo de la sentencia]		[Resultado de ejecutar la sentencia sql]
 */
function execQuery($p_sqlStr) {
	global $link;
	$result = mysqli_query( $link, $p_sqlStr);

	if (!$result) {
		//trigger_error('Error al ejecutar la consulta SQL: ' . mysqli_error(),E_USER_ERROR);
		error_log('Error al ejecutar la consulta SQL: ' . mysqli_error($link) . ' --- ' . $p_sqlStr);
		return true;
	} 
	return $result;
}

/**
 * [cnvToAsocArray(): Convierte un resultado de una sentencia sql en un array asociativo]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [array]          [Array asociativo]
 */
function cnvToAsocArray( $p_qryResult) {
	return mysqli_fetch_assoc( $p_qryResult );
}

/**
 * [cnvToArray(): Convierte un resultado de un sentencia sql en un array]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [array]          [array asociativo]
 */
function cnvToArray( $p_qryResult) {
	return mysqli_fetch_array( $p_qryResult);
}

/**
 * [fetchAll description]
 * @param  [type] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [type]              [description]
 */
function fetchAll( $p_qryResult){
	while(($row = mysqli_fetch_array($p_qryResult))) {
		$rows[] = $row;
	}
	return $rows;
}

/**
 * [escapeString(): Escapa los caracteres no permitidos, se usa para evitar sql-inyections]
 * @param  [String] $p_unscapedStr [Cadena sin escapar]
 * @return [String]                [Cadena con los caracteres no permitidos escapados]
 */
function escapeString( $p_unscapedStr) {
	return mysqli_real_escape_string(  conn(), $p_unscapedStr);
}


/**
 * [cantFilas(): Calcula la cantidad de filas devuelta por una consulta]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [int]            [Cantidad de filas]
 */
function cantFilas( $p_qryResult) {
	return mysqli_num_rows( $p_qryResult);
}


/**
 * [lastInsertId(): Devuelve el valor de la pk del ultimo insert realizado]
 * @param  [int] 	$p_dblink [Link a la db]
 * @return [int]          	  [valor de la pk del ultimo insert realizado]
 */
function lastInsertId( ) {
	global $link;
	return mysqli_insert_id( $link);
}

/**
 * [freeResult description]
 * @param  [type] $p_qryResult [description]
 * @return [type]              [description]
 */
function freeResult( $p_qryResult) {
	return mysqli_free_result( $p_qryResult);
}

/**
 * [affectedRows description]
 * @param  [type] $p_dblink    [description]
 * @param  [type] $p_qryResult [description]
 * @return [type]              [description]
 */
function affectedRows( $p_dblink, $p_qryResult) {
	global $link;
	return mysqli_affected_rows( $link);
}

/**
 * [SqlConcat description]
 * @param [type] $p_sql       [Porción del string del query que se concatena separado por coma. ej: campoA, ' ' , campoB]
 * @param string $p_separador [description]
 */
function SqlConcat( $p_sql, $p_separador = ',') {
	$arg = $p_separador;
	$array = explode($arg, $p_sql);
	
	for ($i = 0,$c=count($array),$rtn="concat(";$i<$c;$i++){
		$rtn .= $array[$i].",";
	}
	$rtn = substr($rtn, 0, strlen($rtn)-1);
	return $rtn .= ")";
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
			$datepart = 'DAY';
			break;
		case 'm':
			$datepart = 'MONTH';
			break;
		case 'y':
			$datepart = 'YEAR';
			break;
	}
	$res = 'DATE_ADD( ' . $p_date . ', INTERVAL ' . $p_number . ' ' . $datepart . ')';
	return $res;
}

/**
 * [sqlNow description]
 * @return [type] [description]
 */
function sqlNow() {
	return 'now()';
}

/**
 * [SqlDateFormat devuelve la fecha formateada]
 * @param [type] $p_qry    [campo date a formatear]
 * @param [type] $p_format [formato fecha ej: 'dd/mm/yyyy', 'mm/yyyy']
 * @param string $p_ope    [operador ej: '/' , '-' , '.' , etc]
 */
function SqlDateFormat( $p_qry, $p_format, $p_ope = ''){
	$rtn = '';
	$arg = '/';
	$array = explode($arg, $p_format);
	$date = '';

	foreach ($array as $days){

		switch ($days) {
			case 'dd':
				$date .=  "%d";
				break;
			case 'mm':
				$date .= "%m";
				break;
			case 'yyyy':
				$date .= "%Y";
				break;
			case 'yy':
				$date .= "%y";
				break;
		}
		$date .= $p_ope;
	}
	$rtn = $date;
	if ($p_ope != '') {
		$rtn = substr($date, 0, strlen($date)-1);
	}
	
	$rtn = 'DATE_FORMAT('. $p_qry . ', \'' . $rtn . '\' )'; 
	return $rtn ;
}

/**
 * [sql_select_limit description]
 * @param  [type] $p_qry    [description]
 * @param  [type] $p_offset [description]
 * @param  [type] $p_limit  [description]
 * @return [type]           [description]
 */
function sql_select_limit( $p_qry, $p_offset = 0, $p_limit) {
	if ($p_offset == '') { $p_offset = 0 ;}
	return $p_qry . ' limit ' . $p_limit  . ' offset ' . $p_offset;
}

/**
 * [sql_select_top description]
 * @param  [type] $p_qry   [description]
 * @param  [type] $p_value [description]
 * @return [type]          [description]
 */
function sql_select_top( $p_qry, $p_value) {
	return $p_qry . ' limit ' . $p_value;
}

/**
 * [isNull description]
 * @param  [type]  $p_value [description]
 * @return boolean          [description]
 */
function isNull( $p_value){
	return ' isnull('. $p_value . ')';
}

/**
 * [formatDate(): Retorna la fecha formateada para diferenciar MsSql 
 * @param  [?] $p_fechaformat [fecha a formaterar]
 */
function formatDate( $p_fechaformat ){
	return $p_fechaformat;
}

/**
 * [getJuliantoDate description]
 * @param  [type] $p_date [description]
 * @return [type]         [description]
 */
function getJuliantoDate( $p_date){
	$qry = "SELECT date('1899-12-30') + INTERVAL " . $p_date . " DAY as fecha from dual ";
	$row = cnvToAsocArray( connqry( $qry));
	return $row['fecha'];
}

/**
 * [dateDiff description]
 * @param  [type] $p_day   [description]
 * @param  [type] $p_start [description]
 * @param  [type] $p_end   [description]
 * @return [type]          [description]
 */
function dateDiff( $p_day, $p_start, $p_end){
	return 'DATEDIFF('.$p_start.', '.$p_end.')';
}

/**
 * [dateInterval description]
 * @param  [type] $p_now      [description]
 * @param  [type] $p_interval [description]
 * @param  [type] $p_datePart [description]
 * @return [type]             [description]
 */
function dateInterval( $p_now, $p_interval, $p_datePart ){
	return $p_now . " + INTERVAL  ". $p_interval ." " . $p_datePart;
}

/**
 * [selectLastID description]
 * @param  [type] $id [description]
 * @return [type]     [description]
 */
function selectLastID($id = null){
	$qry = 'select last_insert_id();';
	return connqry( $qry);
}

/**
 * [stringAgg description]
 * @param  [type] $str [description]
 * @return [type]      [description]
 */
function stringAgg($str){
	$rtn = 'STRING_AGG(' . $str . ')';
	return $rtn;
}

function sql_substring ($strCampo, $intInit, $intFin) {
	return "SUBSTRING(" . $strCampo . ", " . $intInit . ", " . $intFin . ")";
}
?>