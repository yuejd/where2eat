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

function insert_place($place_name) {
	$db_conn = db_exec_connect();
    $select_place = "select name from places where name = '$place_name'";
    $result = mysql_query( $select_place, $db_conn );
    if(mysql_num_rows($result) > 0) {
        return false;
    }
    $insert_place = "INSERT INTO places (name) VALUES ( '$place_name' )";
    $result = mysql_query( $insert_place, $db_conn );
    mysql_close($db_conn);
    return true;
}

function delete_place( $place_name ) {
	$db_conn = db_exec_connect();
    $delete_query = "delete from places where name = '$place_name'";
    $result = mysql_query( $delete_query, $db_conn );
    mysql_close($db_conn);
}

function get_all_places(){
	$db_conn = db_exec_connect();
    $select_all = "select * from places order by id";
	$result = mysql_query($select_all, $db_conn);
    
	while(list($id, $place_name) = mysql_fetch_row($result)) {
	?>
    <div class="inner_box">
        <div class="place_name"><?=$place_name ?></div>
        <button class='delete_btn'></button>
    </div>
	<?php	
	}
    mysql_close($db_conn);
}
?>