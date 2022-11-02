<?php
    $strJsonFileContents = file_get_contents("./assets/json/data.json");
    $array = json_decode($strJsonFileContents, true);
?>