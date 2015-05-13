<?php


$get_future_skills = function () {
    require("database.php");
	
	try {
		$results = $db->prepare("
            SELECT * FROM future_skills
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
echo json_encode($get_future_skills(), JSON_NUMERIC_CHECK);
?>