 <?php
    require 'db.php';
    if(isset($_POST)){
        $city =$_POST['city'];
        $state =$_POST['state'];
        $country =$_POST['country'];
        $tempc =$_POST['tempc'];
        $windspeed =$_POST['windspeed'];
        $winddir =$_POST['winddir'];
        $query="INSERT INTO `weather_history`(`country`, `state`, `city`, `tempc`, `windspeed`, `winddir`) VALUES
         ('".$country."','".$state."','".$city."','".$tempc."','".$windspeed."','".$winddir."')";
        $wisherID = db::getInstance()->dbquery($query);
    }
   
 ?>