<?php
  $json_string = '{
  	"firstName": "Fabien",
      "lastName": "Sayer",
      "age": "Non mais ça va pas ?(34ans)"
  }';
  $jsonResult = json_encode($json_string);
  echo $jsonResult;
?>
