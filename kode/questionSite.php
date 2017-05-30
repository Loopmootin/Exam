<?php
					require_once('php/db_con.php');

					$submit1 = filter_input(INPUT_POST, 'submit1');
					$submit2 = filter_input(INPUT_POST, 'submit2');
					$submit3 = filter_input(INPUT_POST, 'submit3');
					$submit4 = filter_input(INPUT_POST, 'submit4');

					if($submit1 && $submit2 && $submit3 && $submit4) {
					$stmt = $con->prepare("INSERT INTO answers(submit1, submit2, submit3, submit4) VALUES( ?, ?, ?, ?)");
					//binde værdier til parameter
					//datatyper: s=string, i=integer, d=double
					$stmt->bind_param("ssss", $submit1, $submit2, $submit3, $submit4);
					//udføre SQL querien som prepared statement
					$stmt->execute();


					$stmt->close();
					$con->close();
					if(isset($_POST["next"])){
						header("location:resultSite.php");
					}
				}

?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="I sammenhæng med Kommunalvalg 2017 - Denne side er til at hjælpe unge, med at finde ud af hvor de skal sætte deres kryds til kommunalvalget 2017">
		<title>Kommunalvalg</title>
		<link href="combinedSheets.css" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	</head>

	<body>
		<div class="col-1-1 header">
			<h1>Kommunalvalg for unge</h1>
			<img src="img/setx.png" alt="headerImage">
		</div>
		<div class="col-1-1 contentContainer">
			<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
				<div class="col-2-3 questionOne">
					<h1>Spørgsmål 1:</h1>
					<p>Ananas på pizza burde være forbudt!</p>
				</div>
				<div class="col-1-2 questionDropOne">
					<fieldset>
					  <input type="radio" name="submit1" value="megetUenig" class="submit1" required> Meget uenig<br>
					  <input type="radio" name="submit1" value="uenig" class="submit1" required> Uenig<br>
					  <input type="radio" name="submit1" value="enig" class="submit1" required> Enig<br>
					  <input type="radio" name="submit1" value="megetEnig" class="submit1" required> Meget enig
					</fieldset>
				</div>
				<div class="col-2-3 questionTwo">
					<h1>Spørgsmål 2:</h1>
					<p>Ølløbet er helt klart noget vi skal holde fast i, da det bringer de unge sammen og skaber et godt sammenhold i kommunen!</p>
				</div>
				<div class="col-1-2 questionDropTwo">
					<fieldset>
					  <input type="radio" name="submit2" value="megetUenig" class="submit2" required> Meget uenig<br>
					  <input type="radio" name="submit2" value="uenig" class="submit2" required> Uenig<br>
					  <input type="radio" name="submit2" value="enig" class="submit2" required> Enig<br>
					  <input type="radio" name="submit2" value="megetEnig" class="submit2" required> Meget enig
					</fieldset>
				</div>
				<div class="col-2-3 questionThree">
					<h1>Spørgsmål 3:</h1>
					<p>Mette burde være præsident!</p>
				</div>
				<div class="col-1-2 questionDropThree">
					<fieldset>
					  <input type="radio" name="submit3" value="megetUenig" class="submit3" required> Meget uenig<br>
					  <input type="radio" name="submit3" value="uenig" class="submit3" required> Uenig<br>
					  <input type="radio" name="submit3" value="enig" class="submit3" required> Enig<br>
					  <input type="radio" name="submit3" value="megetEnig" class="submit3" required> Meget enig
					</fieldset>
				</div>
				<div class="col-2-3 questionFour">
					<h1>Spørgsmål 4</h1>
					<p>CHÅLÆÆÆÆÆÆÆ!!!!!</p>
				</div>
				<div class="col-1-2 questionDropFour">
					<fieldset>
					  <input type="radio" name="submit4" value="megetUenig" class="submit4" required> Meget uenig<br>
					  <input type="radio" name="submit4" value="uenig" class="submit4" required> Uenig<br>
					  <input type="radio" name="submit4" value="enig" class="submit4" required> Enig<br>
					  <input type="radio" name="submit4" value="megetEnig" class="submit4" required> Meget enig
					</fieldset>
				</div>
				<div class="col-1-3 questionFive">
						<input type="submit" name="next" value="Næste" class="resultButton button">
				</div>
			</form>
			<div class="col-1-3  push-1-6 questionSix">
				<form action="index.php">
					<input type="submit" name="next" value="Tilbage" class="backButton button">
				</form>
			</div>
		</div>
		<script src="js/burgermagic.js"></script>
	</body>
</html>