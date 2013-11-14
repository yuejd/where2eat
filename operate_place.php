<?php
$method = $_GET["method"];
$place_name = $_GET["place_name"];
require_once "./func/func.php";
if($method == "add") {
    if( insert_place( $place_name ) )
        echo $place_name;
    else
        echo "false";
} else if($method == "delete") {
    delete_place($place_name);
}
?>
