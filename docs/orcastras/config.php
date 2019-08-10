<?php
// Database config & class
$db_config = array(
	"servername"=> "mysql3.000webhost.com",
	"username"	=> "a4045361_jstree",
	"password"	=> "atk0629",
	"database"	=> "a4045361_jstree"
);
if(extension_loaded("mysqli")) require_once("_inc/class._database_i.php"); 
else require_once("_inc/class._database.php"); 

// Tree class
require_once("_inc/class.tree.php"); 
?>