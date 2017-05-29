<?php 	
		$myZip = $_POST["zipcode"];
?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="I sammenhæng med Kommunalvalg 2017 - Denne side er til at hjælpe unge, med at finde ud af hvor de skal sætte deres kryds til kommunalvalget 2017">
		<title>Kommunalvalg</title>
		<link href="combinedSheets.css" rel="stylesheet">
	</head>

	<body>
	<div class="col-1-1 header">
	<h1>Kommunalvalg for unge</h1>
	<img src="img/setx.png" alt="headerImage">
	</div>
	<div class="col-1-1 contentContainer">
		<div class="col-1-4 pageIntro">
			<p>I forbindelse med kommunalvalget 2017, har vi valgt at lave denne side, som lynhurtigt kan hjælpe unge med at finde ud af hvilken borgmesterkandidat de har noget til fælles med. <br><br>
			Alle dine svar vil blive gemt helt anonymt og blive sendt til den nye borgmester i din kommune efter kommunalvalget, så han eller hun kan se, lige præcis hvad de unge i jeres kommune sætter pris på og måske lave nogle tiltag som i alle kan få glæde af. </p>
		</div>
		<div class="col-1-5 findMunicipality">
			<h2>Du kan nøjes med at indtaste dit postnummer her, så hjælper vi dig med at finde din kommune: </h2>
			<form action="<? $_SERVER['PHP_SELF'] ?>" method="post">
			<input type="text" name="zipcode" placeholder="Indtast postnummer her" class="inputBox">
			<input type="submit" name="searchForZip" value="Søg" class="searchForZip button">
			</form>
			<div class="col-1-1 municipalityInfo">
				<?php
					
					if($myZip == null) {
						$myMunicipality = "Du søger vi finder";
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
					<input type="text" name="muni" value="'.$myMunicipality.'" class="inputBox">';
				?>
				<form>
					<input type="submit" name="send" value="Næste" class="button">
				</form>
			</div>
		</div>
	</div>
	</body>
</html>