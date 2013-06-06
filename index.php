<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>View My Tufts Schedule</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	<!--<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700' rel='stylesheet' type='text/css' />-->
	<link rel="stylesheet" href="css/normalize.css" />
	<link rel="stylesheet" href="css/main.css" />
	<script src="js/vendor/modernizr-2.6.1.min.js"></script>
</head>
<body>
	
	<div id="sched-settings">
		
		<h1>Tufts Scheduler</h1>

		<a href="#" id="add-block-button">Add Class</a>
		<div id="overlay-select">
			<span class="overlay-select-button" id="overlay-alpha-button">A - Q</span><!--
		 --><span class="overlay-select-button" id="overlay-plus-button">A+ - Q+</span><!--
		 --><span class="overlay-select-button" id="overlay-numeric-button">0 - 13</span><!--
		 --><span class="overlay-select-button" id="overlay-other-button">Other</span>
		</div>
		
		<ul id="block-list">
<!--			<li class="block-list-item">
				<span class="block-list-title">Intro to Psychology</span>
				<span class="block-list-location">Cabot Auditorium</span>
				<span class="block-list-professor">Nathanson</span>
				<span class="block-list-time">D+ Block</span>
			</li>-->
		</ul>
		
	</div>
	
	<!-- Filled with Javascript -->
	<div id="sched-view"></div>

<script type="text/javascript" src="/global/jquery.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/periods.defs.js"></script>
<script type="text/javascript" src="js/sched.js"></script>
<script type="text/javascript" src="js/click.js"></script>
<script type="text/javascript">

var SCHED_PRELOAD = [
	{
		times: [
			new SchedTime(1, 2.5, 75),
			new SchedTime(3, 2.5, 75)
		],
		timeLabel: 'D+ Block',
		title: 'Intro to Psychology',
		location: 'Cabot Auditorium',
		professor: 'Nathanson',
		color: [0,255,255]
	},
	{
		times: [
			new SchedTime(1, 1.5, 50),
			new SchedTime(2, 1.5, 50),
			new SchedTime(4, 1.5, 50)
		],
		timeLabel: 'C Block',
		title: 'Calculus III',
		location: 'Bromfield-Pearson 07',
		professor: 'Faubion',
		color: [0,255,0]
	}
];

</script>
</body>
</html>