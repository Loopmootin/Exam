<?php 	
		$myZip = $_POST["zipcode"];
?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="I sammenhæng med Kommunalvalg 2017 - Denne side er til at hjælpe unge, med at finde ud af hvor de skal sætte deres kryds til kommunalvalget 2017">
		<title>#sætX</title>
		<link href="css/style.css" rel="stylesheet">
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
			
			<div class="col-6-12" id="mest-pop"><h2>Test dig selv</h2></div>
			<div class="col-6-12" id="mest-pop"><h2>Start testen her</h2></div>
			<div class="col-6-12"><div><p>I forbindelse med kommunalvalget 2017, har vi valgt at lave denne side, som lynhurtigt kan hjælpe unge med at finde ud af hvilken borgmesterkandidat de har noget til fælles med. <br><br>
			Alle dine svar vil blive gemt helt anonymt og blive sendt til den nye borgmester i din kommune efter kommunalvalget, så han eller hun kan se, lige præcis hvad de unge i jeres kommune sætter pris på og måske lave nogle tiltag som i alle kan få glæde af. </p></div></div>
			
			<div class="col-6-12 findMunicipality">
			<p>Du kan nøjes med at indtaste dit postnummer her, så hjælper vi dig med at finde din kommune: </p>
			<form action="<? $_SERVER['PHP_SELF'] ?>" method="post">
			<input type="text" name="zipcode" placeholder="Indtast postnummer her" class="inputBox">
			<input type="submit" name="searchForZip" value="Søg" class="searchForZip button">
			</form>
			<div class="col-1-1 municipalityInfo">
				<?php
					
					if($myZip == null) {
						$myMunicipality = "";
					} else if($myZip == '3460') {
						$myMunicipality = "Rudersdal kommune";
					} else if ($myZip == '3000' || $myZip == '3060') {
						$myMunicipality = "Helsingør kommune";
					} else if ($myZip == '2800'){
						$myMunicipality = "Lyngby-Taarbæk kommune";
					} else if ($myZip == '3400') {
						$myMunicipality = "Hillerød kommune";
					} else {
						$myMunicipality = "Findes ikke";
					}
					echo '<form action="questionSite.php" method="get">
					<input type="text" name="muni" value="'.$myMunicipality.'" class="inputBox" placeholder="...eller indtast din kommune her">';
				?>
				<form>
					<input type="submit" name="send" value="Næste" class="button">
				</form>
			</div>
		</div>
		
		<div class="col-1-1 spacer"></div>		
		</div>
		
		<div class="footer">
		<img alt="sponsor" src="img/sponsor.png">
	</div>
	</body>
</html>