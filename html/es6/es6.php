<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>es6</title>
</head>
<body>
	<p>Привет</p>
    <div class="res"></div>
	<div class="items">
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
	</div>
	<script src="es6.js"></script>

</body>
</html>
<style>
	.item {
		text-align: center;
		display: inline-block;
		margin: 10px;
		width: 100px;
		height: 100px;
		background-color: grey;
	}
	.items {

		border: 1px solid black;
		padding: 5px;
	}
	.item-active {
		outline: 2px solid red;
	}
</style>