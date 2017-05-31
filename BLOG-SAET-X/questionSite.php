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
		<title>#sætX - test</title>
		<link href="css/style.css" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	</head>

	<body>
		<div class="grid grid-pad">
			<div class="col-1-1">
				<div class="nav1">
					<a href="index.html"><img id="logo" alt="#sætX" src="img/logo1.png"></a>
					<a href="index.html">Forside</a>
					<a class="selected" href="test.php">Test dig selv</a>
					<a href="bibliotek.html">#sætX bibliotek</a>
					<a href="kampagner.html">Kampagner</a>
					<a href="blog.html">Blog</a>
					<a href="debat.html">Debat</a>
					<a href="om-kontakt.html">Om og kontakt</a>
					<input placeholder="Søg...">
					<a href="https://www.instagram.com/saetx17/"><img id="ig" src="img/icon/insta.png" alt="instagram"></a>
				<a href="https://www.facebook.com/saetx17/"><img id="fb" src="img/icon/fb.png" alt="facebook"></a>		
				</div>
			</div>
			
			<div class="col-1-1" id="mest-pop"></div>
			<div class="col-2-12"></div>
			<div class="col-8-12">
				<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
				<div class="questionOne">
					<h1>Spørgsmål 1:</h1>
					<p>Ølløbet er et sjovt event og klart værd at bevare, da det er en god måde at bringe de unge sammen på!</p>
				</div>
				<div class="questionDropOne">
					<fieldset>
					  <input type="radio" name="submit1" value="megetEnig" class="submit1" required>Meget enig<br>
					  <input type="radio" name="submit1" value="enig" class="submit1" required>Enig<br>
					  <input type="radio" name="submit1" value="uenig" class="submit1" required>Uenig<br>
					  <input type="radio" name="submit1" value="megetUenig" class="submit1" required>Meget uenig<br>
					</fieldset>
				</div>
	
				<div class="questionTwo">
					<h1>Spørgsmål 2:</h1>
					<p>eSport er vokset eksplosivt over det sidste års tid og jeg syntes at mulighederne for at kunne gå til det, fx ligesom man går til fodbold, skal blive en realitet!</p>
				</div>
				<div class="questionDropTwo">
					<fieldset>
					  <input type="radio" name="submit2" value="megetEnig" class="submit2" required>Meget enig<br>
					  <input type="radio" name="submit2" value="enig" class="submit2" required>Enig<br>
					  <input type="radio" name="submit2" value="uenig" class="submit2" required>Uenig<br>
					  <input type="radio" name="submit2" value="megetUenig" class="submit2" required>Meget uenig<br>
					</fieldset>
				</div>
	
				<div class="questionThree">
					<h1>Spørgsmål 3:</h1>
					<p>Mange unge er utrykke går de går i byen i weekenderne, jeg syntes at sikkerheden skal øges, så alle der har lyst til det, kan tage ubekymrede i byen og have det sjovt!</p>
				</div>
				<div class="questionDropThree">
					<fieldset>
					  <input type="radio" name="submit3" value="megetEnig" class="submit3" required>Meget enig<br>
					  <input type="radio" name="submit3" value="enig" class="submit3" required>Enig<br>
					  <input type="radio" name="submit3" value="uenig" class="submit3" required>Uenig<br>
					  <input type="radio" name="submit3" value="megetUenig" class="submit3" required>Meget uenig<br>
					</fieldset>
				</div>
				<div class="questionFour">
					<h1>Spørgsmål 4</h1>
					<p>Der er mange måder at komme hinanden ved på udendørs når vejret er godt, men syntes vi skal have flere spille eller aktivitetshaller, så der er en sjov måde at komme hinanden ved, på trods af vejret.</p>
				</div>
				<div class="questionDropFour">
					<fieldset>
					  <input type="radio" name="submit4" value="megetEnig" class="submit4" required>Meget enig<br>
					  <input type="radio" name="submit4" value="enig" class="submit4" required>Enig<br>
					  <input type="radio" name="submit4" value="uenig" class="submit4" required>Uenig<br>
					  <input type="radio" name="submit4" value="megetUenig" class="submit4" required>Meget uenig<br>
					</fieldset>
				</div>
				<div class="col-6-12 questionFive">
					<input type="submit" name="next" value="Næste" class="resultButton button">
				</div>
			</form>
			<div class="col-6-12 questionSix">
				<form action="test.php">
					<input type="submit" name="next" value="Tilbage" class="backButton button">
				</form>
			</div>
			</div>
			<div class="col-2-12"></div>
			
		
		</div>
		<div class="footer">
			<img alt="sponsor" src="img/sponsor/lorry.png">
			<img alt="sponsor" src="img/sponsor/midt.png">
			<img alt="sponsor" src="img/sponsor/oj.png">
			<img alt="sponsor" src="img/sponsor/bornholm.jpg">
			<img alt="sponsor" src="img/sponsor/ost.jpg">
			<img alt="sponsor" src="img/sponsor/nord.png">
			<img alt="sponsor" src="img/sponsor/fyn.png">
			<img alt="sponsor" src="img/sponsor/syd.png">
	</div>
		<script src="js/burgermagic.js"></script>
	</body>
</html>