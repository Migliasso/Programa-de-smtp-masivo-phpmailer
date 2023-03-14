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
	$connectionInfo = array( 'Database'=>BASE_DATOS, 'UID'=>USUARIO_MS, 'PWD'=>PASSWORD_MS);
	$link = sqlsrv_connect( SERVIDOR_MS, $connectionInfo);

    if (!$link) {
        die(error_log(  print_r( sqlsrv_errors(), true)));
    } 
	return $link;
}

/**
 * [disconn(): Desconectarse de la db]
 * @param  [int] $p_link [Link de la db que quiere cerrarse]
 * @return [void]         []
 */
function disconn( $p_link) {
	sqlsrv_close($p_link);
}

/**
 * [connqry(): Conectarse a la db y ejecutar una sentencia sql]
 * @param  [String] $p_sqlStr 						[Sentencia sql a ejecutar]
 * @return [Cambia dependiendo de la sentencia]		[Resultado de ejecutar la sentencia sql]
 */
function connqry( $p_sqlStr) {
	global $link;
	$result = execQuery( $p_sqlStr);
	return $result;
}

/**
 * [execQuery(): Ejecuta una sentencia sql, previamente se debe conectar a la base de datos con la funcion conn()
 *               y al finalizar utlizar la funcion disconn()]
 * @param  [String] $p_sqlStr 						[Sentencia sql a ejecutar]
 * @return [Cambia dependiendo de la sentencia]		[Resultado de ejecutar la sentencia sql]
 */
function execQuery( $p_sqlStr) {
	global $link;
	$result = sqlsrv_query( $link, $p_sqlStr);

	if (!$result) {
		error_log( print_r( sqlsrv_errors(), true) . ' --- ' . $p_sqlStr );
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
	return sqlsrv_fetch_array( $p_qryResult, SQLSRV_FETCH_ASSOC );
}

/**
 * [cnvToArray(): Convierte un resultado de un sentencia sql en un array]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [array]          [array asociativo]
 */
function cnvToArray( $p_qryResult) {
	return sqlsrv_fetch_array( $p_qryResult, SQLSRV_FETCH_BOTH );
}

/**
 * [fetchAll description]
 * @return [type] [description]
 */
function fetchAll( $p_qryResult){
	while(($row = sqlsrv_fetch_array( $p_qryResult, SQLSRV_FETCH_BOTH ))) {
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
	return sqlsrv_escape( $p_unscapedStr);
}

/**
 * [sqlsrv_escape description]
 * @param  [type] $str [description]
 * @return [type]      [description]
 */
function sqlsrv_escape($str){
	if(get_magic_quotes_gpc()) {
		$str = stripslashes($str);
	}
   return str_replace("'", "''", $str);
}

/**
 * [cantFilas(): Calcula la cantidad de filas devuelta por una consulta]
 * @param  [?] $p_qryResult [Valor devuelto por una sentencia sql]
 * @return [int]            [Cantidad de filas]
 */
function cantFilas( $p_qryResult) {
	if ($p_qryResult) {
		return sqlsrv_num_rows( $p_qryResult);
	} else {
		return false;
	}
}

/**
 * [lastInsertId(): Devuelve el valor de la pk del ultimo insert realizado]
 * @param  [int] 	$p_dblink [Link a la db]
 * @return [int]          	  [valor de la pk del ultimo insert realizado]
 */
function lastInsertId( ) {
	global $link;
	$insert_query = execQuery("SELECT SCOPE_IDENTITY();");
	$insert_row = cnvToArray($insert_query);
	return $insert_row[0];
}

/**
 * [freeResult description]
 * @param  [type] $p_sql [description]
 * @return [type]        [description]
 */
function freeResult( $p_sql) {
	return sqlsrv_cancel( $p_sql);
}

/**
 * [affectedRows description]
 * @param  [type] $p_dblink    [description]
 * @param  [type] $p_qryResult [description]
 * @return [type]              [description]
 */
function affectedRows( $p_dblink, $p_qryResult) {
	return sqlsrv_rows_affected( $p_dblink);
}

/**
 * [affectedRow description]
 * @return [type] [description]
 */
function affectedRow() {
	global $link;
	return sqlsrv_rows_affected( $link);
}

/*ms.lib.php*/
/**
 * [SqlConcat devuelve la cadena concatenada]
 * @param [type] $p_sql [Porción del string del query que se concatena separado por coma. ej: campoA, ' ' , campoB ]
 */
function SqlConcat( $p_sql, $p_separador = ',') {
	$arg = $p_separador;
	$array = explode($arg, $p_sql);
	for ($i = 0,$c=count($array),$rtn="";$i<$c;$i++){
		$rtn .= $array[$i]." + ";
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
			$datepart = 'DAY';
			break;
		case 'm':
			$datepart = 'MONTH';
			break;
		case 'y':
			$datepart = 'YEAR';
			break;
	}
	$res = 'DATEADD( ' . $datepart . ', ' . $p_number . ', ' . $p_date . ')';
	return $res;
}

/**
 * [sqlNow description]
 * @return [type] [description]
 */
function sqlNow() {
	return 'GETDATE()';
}

/**
 * [SqlDateFormat devuelve la fecha formateada]
 * @param [type] $p_qry    [campo date a formatear]
 * @param [type] $p_format [formato fecha ej: 'dd/mm/yyyy', 'mm/yyyy']
 * @param string $p_ope    [operador ej: '/' , '-' , '.' , etc]
 */
function SqlDateFormat( $p_qry, $p_format, $p_ope = '') {
	//return 'format( ' . $p_qry . ', \'' . $p_format . '\', \'' . $p_ope . '\')';
	$p_format = str_replace('/', $p_ope, str_replace('mm', 'MM', $p_format));
	return 'format( ' . $p_qry . ', \'' . $p_format . '\', \'en-US\')';
}

/**
 * [get_positions_of description]
 * @param  [type] $p_qry           [description]
 * @param  [type] $p_reserved_word [description]
 * @return [type]                  [description]
 */
function get_positions_of( $p_qry, $p_reserved_word) {
	$aux = $p_qry;
	$adv = strlen( $p_reserved_word);
	$pos = stripos( $p_qry, $p_reserved_word);
	for( $i = 0; is_numeric( $pos); ) {
		$aux = substr( $aux, $pos + $adv);	
		$res[] = $i + $pos;
		$i += $pos + $adv;
		$pos = stripos( $aux, $p_reserved_word);
	}
	return $res;
}

/**
 * [sql_select_limit description]
 * @param  [type] $p_qry    [description]
 * @param  [type] $p_offset [description]
 * @param  [type] $p_limit  [description]
 * @return [type]           [description]
 */
function sql_select_limit( $p_qry, $p_offset, $p_limit  ){
	if (is_null($p_offset)) {
		$p_offset = 0;
	}
	/*$x = $p_offset + $p_limit;
	$i = strripos( $p_qry, 'order by ');
	$order_by = substr( $p_qry, $i);
	$qry = substr( $p_qry, 0, $i);
	$a1 = get_positions_of( $qry, 'select ');
	$a2 = get_positions_of( $qry, 'from ');

	for ( $i=$j=0; $i < count( $a1) - 1; $i++, $j++) {
		if ($a1[$i] < $a2[$j]){
			if ($a2[$j] < $a1[$i+1]){		
				break;
			}
		}
	}
	$i = $a2[$j];
	$qry = substr( $qry, 0, $i) . ', row_number() over ( ' . $order_by . ' ) as rownumber ' . substr( $qry, $i);
	$qry = 'select * 
	          from ( ' . $qry . ' ) limit_table
            where rownumber between ' . ($p_offset + 1) . ' and ' . ($p_offset + $p_limit);*/
	return $p_qry . " OFFSET ". $p_offset ." ROWS FETCH  NEXT ".$p_limit." ROWS ONLY";



}

/**
 * [sql_select_top description]
 * @param  [type] $p_qry   [description]
 * @param  [type] $p_value [description]
 * @return [type]          [description]
 */
function sql_select_top( $p_qry, $p_value) {
	$i = stripos( $p_qry, 'select ');
	$aux = substr( $p_qry, $i + 7);
	return 'select top ' . $p_value . ' ' . $aux;
}

/**
 * [isNull(): Restorna función propia de mssql, si isnull
 * @param  [?] $p_value [campo a verficar si es nulo]
 * @return [int]        [Devuelve el string de la funcion si es nulo, propia de mssql]
 */
function isNull( $p_value){
	return $p_value . ' IS NULL';
}

/**
 * [formatDate(): Retorna la fecha formateada para diferenciar MsSql 
 * @param  [?] $p_fechaformat [fecha a formaterar]
 */
function formatDate( $p_fechaformat ){
	return $p_fechaformat->format('Y-m-d') ;
}

/**
 * [getJuliantoDate description]
 * @param  [type] $p_date [description]
 * @return [type]         [description]
 */
function getJuliantoDate( $p_date){
	$qry = "select dateadd(d," . $p_date . ",1899-12-30) as fecha";
	$row = cnvToAsocArray( connqry( $qry));
	return $row['fecha']->format('Y-m-d');
}

/**
 * [dateDiff description]
 * @param  [type] $p_day   [description]
 * @param  [type] $p_start [description]
 * @param  [type] $p_end   [description]
 * @return [type]          [description]
 */
function dateDiff( $p_day, $p_start, $p_end){
	return 'DATEDIFF(day,'.$p_end.', '.$p_start.')';
}

/**
 * [dateInterval description]
 * @param  [type] $p_now      [description]
 * @param  [type] $p_interval [description]
 * @param  [type] $p_datePart [description]
 * @return [type]             [description]
 */
function dateInterval( $p_now, $p_interval, $p_datePart ){
	return "DATEADD(" . $p_datePart . "," . $p_interval. "," . $p_now . ")";
}

/**
 * [selectLastID description]
 * @param  [type] $id [description]
 * @return [type]     [description]
 */
function selectLastID($id = null){
	$rst = cnvToAsocArray( connqry("select @@IDENTITY as id"));
    return $rst['id'];
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