<?php
  $lang = '';
  if (!empty($_GET["lang"])) {
    $lang = $_GET["lang"];
  } else {
    $lang = "EN";
  }
  include_once('languages.php');
?>

<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php echo $lang_arr[$lang]["title"]; ?></title>
</head>
<body>
  <h1><?php echo $lang_arr[$lang]["h1"]; ?></h1>
  <h2><?php echo $lang_arr[$lang]["h2_1"]; ?></h2>
  <p><?php echo $lang_arr[$lang]["p_1"]; ?></p>
  <h2><?php echo $lang_arr[$lang]["h2_2"]; ?></h2>
  <p><?php echo $lang_arr[$lang]["p_2"]; ?></p>
  <h2><?php echo $lang_arr[$lang]["h2_3"]; ?></h2>
  <p><?php echo $lang_arr[$lang]["p_3"]; ?></p>
  <p><?php echo $lang_arr[$lang]["p_4"]; ?></p>
  <h2><?php echo $lang_arr[$lang]["h2_4"]; ?></h2>
  <p><?php echo $lang_arr[$lang]["p_4"]; ?></p>
  <p><?php echo $lang_arr[$lang]["p_5"]; ?></p>
  <p><?php echo $lang_arr[$lang]["p_6"]; ?></p>
</body>
</html>
