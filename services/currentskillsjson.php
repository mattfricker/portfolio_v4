<?php


$get_current_skills = function () {
    require("database.php");
	
	try {
		$results = $db->prepare("
            SELECT * FROM current_skills
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
echo json_encode($get_current_skills(), JSON_NUMERIC_CHECK);
?>