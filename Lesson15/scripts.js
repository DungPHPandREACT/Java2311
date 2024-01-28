// $('selector')
console.log($('#text'));

// console.log(document.getElementsByClassName('paragraph'));
// console.log($('.paragraph'));

// console.log(document.getElementsByTagName('div'));
// console.log($('div'));

$(document).ready(function () {
	// console.log($('#text'));
	// console.log(document.getElementById('text'));

	// $('#text').click(() => {
	// 	console.log('onclick');
	// });

	$('#toggle').click(() => {
		$('#text').animate(
			{
				margin: '0px 0px 0px 25px',
				opacity: '0.5',
				height: '150px',
				width: '150px',
			},
			2000
		);
	});
});
