$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		anchors:['Home', 'About'],
		navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Home', 'About'],
        showActiveTooltip: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,

        //Background sections
        sectionsColor: ['#ffd3fe', '#8EADAB', '#EAD599']
        // sectionsColor: ['#3B61B4', '#F5AE4C', '#ABCEDF', '#E06D5B', '#3B61B4']

	});
});



