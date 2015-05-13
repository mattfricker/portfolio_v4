<?php


$get_projects = function () {
    require("database.php");
	
	try {
		$results = $db->prepare("
            SELECT * FROM projects
			");
		$results->execute();
	} catch (Exception $e) {
		echo "Data could not be retrieved at this time";
		exit;
	}
	
	$results = $results->fetchAll(PDO::FETCH_ASSOC);
    return $results;
};


header('Content-Type: application/json; charset=utf-8');
echo json_encode($get_projects(), JSON_NUMERIC_CHECK);
?>