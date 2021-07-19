$(function() {
	var lnb = {
		init : function() {
			this.setEvent();
			
			setLnb();
		},
		setEvent : function() {			
			
		}
	};
	lnb.init();
});


function setLnb(){
	var locationName = location['pathname'];
	locationName = locationName.replace('/', '');
	locationName = locationName.substring(0, locationName.lastIndexOf('.'));
	
	
	$('div.menu-bar').find('ul.nav a.'+locationName).addClass('active');
	
}