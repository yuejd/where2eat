<?php
function db_exec_connect(){
	$conn = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
	if (!$conn) {
		echo 'not connect ';
		return false;
	} else {
		$selectTheDB = mysql_select_db(SAE_MYSQL_DB,$conn);
		if (!$selectTheDB) {
			echo ' not select database ';
			return false;
		} else {
			mysql_query("SET NAMES 'utf8'");
			return $conn;
		}
	}	
}
function get_all_places(){
	$db_conn = db_exec_connect();
	$select_all = "select * from places";
	$result = mysql_query($select_all, $db_conn);

	while(list($id, $place_name) = mysql_fetch_row($result)) {
	?>
        <div class="place_name"><?=$id ?>.<?=$place_name ?></div>
	<?php	
	}
	mysql_close($db_conn);
}
?>
