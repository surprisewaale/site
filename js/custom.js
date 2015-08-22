// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com

/*
Theme by: WebThemez.com
Note: donate to remove backlink form the site
*/
   
   
var customScripts = {
 
    onePageNav: function () {
        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing'
        });
		
	$("a[href='#top']").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    }
}
$('document').ready(function () { 
    customScripts.onePageNav();
    $( "#menuToggle" ).toggle(function() {
    $(this).find('i').removeClass('fa-bars').addClass('fa-remove');
       $('#mainNav').animate({"right":"0px"}, "slow");
    }, function() {
      $('#mainNav').animate({"right":"-200px"}, "slow");
      $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
    });	
});
