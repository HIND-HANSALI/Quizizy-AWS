<?php

// require '../model/database.php';
require 'model/database.php';
$con = new Connection();

$qyr = "SELECT questions.*,options.option1,options.option2,options.option3,options.option4 FROM `questions` INNER JOIN options on options.id=questions.id; ";
$stmt = $con->connect()->query($qyr);
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// var_dump($result);
// die();

// $data = array();


// foreach($result as $row){
//     $data[] = $row;
// }
       echo json_encode($result);