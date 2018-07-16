 <?php
 require 'db.php';
  if(isset($_POST)){
      $city = $_POST['city'];
  }
    $query="select * from weather_history where city = '".$city."'";
    $sockets = db::getInstance()->get_result($query);
    if(!empty($sockets )){
        echo json_encode($sockets);
    } else{
         echo json_encode();
    }
        
 ?>
 