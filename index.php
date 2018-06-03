<!DOCTYPE HTML>
<html lang="sk">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Marko Hozaa">
	<title>webdesign2018</title>
    <link rel="icon" type="image/png" href="img/favicon.png">
    <link rel='stylesheet' href='node_modules/swiper/dist/css/swiper.min.css' type='text/css'/>
    <link rel='stylesheet' href='css/mausstyle.min.css' type='text/css'/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&amp;subset=cyrillic-ext" rel="stylesheet">

	<!-- Search Engine -->
	<meta itemprop="name" content="nazov">
	<meta name="twitter:title" content="nazov">
	<meta name="og:title" content="nazov">
	<meta name="og:site_name" content="nazov">
	<meta name="description" content="popis">
	<meta itemprop="description" content="popis">
	<meta name="twitter:description" content="popis">
	<meta name="og:description" content="popis">
	<meta name="keywords" content="tagy">
	<meta name="image" content="/img/represent1.jpg">
	<meta itemprop="image" content="/img/represent1.jpg">
	<meta name="twitter:image:src" content="/img/represent2.jpg">
	<meta name="og:image" content="/img/represent2.jpg">
	<meta name="twitter:card" content="summary">
	<meta name="og:url" content="<?php echo $_SERVER["HTTP_HOST"]; ?>">
	<meta name="og:locale" content="sk_SK">
	<meta name="og:type" content="website">
</head>
<body>
	<div id="preloader" style="display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-webkit-box-align: center;-ms-flex-align: center;align-items: center;background-color: #fff;position: absolute;width: 100vw;height: 100vh;z-index: 9999;opacity: 1;visibility: visible;transition: opacity 1s, visibility 1s ease;">
		<div class="spinner"></div>
	</div>
	<?php include "part/header.php" ?>
	<?php include "part/content.php" ?>
	<?php include "part/footer.php" ?>
	<script src="node_modules/jquery/dist/jquery.min.js"></script>
	<script src="node_modules/swiper/dist/js/swiper.min.js?r=1"></script>
	<script src="node_modules/scroll-parallax/dist/Parallax.min.js?r=1"></script>
	<script src="node_modules/onscreen/dist/on-screen.umd.js?r=1"></script>
	<script src="js/mausscript.js?r=1"></script>
</body>
</html>
