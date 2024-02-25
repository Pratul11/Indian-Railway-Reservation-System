<?php
    $departure = $_POST['departure'];
    $destination = $_POST['destination'];
    $quota-id = $_POST['quota-id'] ;
    $date = $_POST['date'];
    $classID = $_POST['classID'];

    $conn = new mysqli('localhost','root','','irrs');


    if($conn){
        echo "Connected...";
    }
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into train(departure,destination,quota-id,date,classID)
            values(?, ?, ?, ?, ?)");
            $stmt->bind_param("sssss",$departure,$destination,$quota-id,$date,$classID);
            $stmt->execute();
            echo "register Successfully...";
            $stmt->close();
            $conn->close();
    }
?>
