<?php
  $results = '{
    "firstName": "Fabien",
      "lastName": "Sayer",
      "age": "Non mais ça va pas ?(32ans)"
  }';
  $jsonResult = json_encode($results);
  echo $jsonResult;
?>
