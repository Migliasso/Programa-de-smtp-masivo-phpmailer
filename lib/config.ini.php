<?php
    if(isset($home)){
        include_once($home.'/conf/config.php');
    } else {
        include_once($_SERVER['DOCUMENT_ROOT'].'/emailMarketing/conf/config.php');
    }
    
?>
