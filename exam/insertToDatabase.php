<?php
	require_once 'php/db_con.php';
	include 'php/create.php';
?>

<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Create</title>
	</head>

	<body>
		<h1>Create zipcode</h1>
		
		<form method="post" action="<? $_SERVER['PHP_SELF'] ?>">
			<input type="text" name="zipnumber" value="" />
			<input type="submit" name="create-zip" value="submit" />
		</form>
		
		<h1>Create municipality</h1>
		
		<form method="post" action="<? $_SERVER['PHP_SELF'] ?>">
			<input type="text" name="municipality" value="" />
			<input type="submit" name="create-municipality" value="submit" />
		</form>
		
		<h1>Create candidate</h1>
		
		<form method="post" action="<? $_SERVER['PHP_SELF'] ?>">
			name
			<input type="text" name="candidate" value="" /><br>
			party
			<input type="text" name="party" value="" /><br>
			<input type="submit" name="create-candidate" value="submit" />
		</form>
		
		<h1>Create question</h1>
		
		<form method="post" action="<? $_SERVER['PHP_SELF'] ?>">
			<input type="text" name="question" value="" />
			<input type="submit" name="create-question" value="submit" />
		</form>
	</body>
</html>

