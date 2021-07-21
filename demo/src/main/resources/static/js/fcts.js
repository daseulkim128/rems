$(function() {
	var fcts = {
		init : function() {
			this.setEvent();
			
			common.setTableOption('myTable');
			
		},
		setEvent : function() {			
			$('#registBtn').on('click', function(){
				location.href ="fctsRegist.html";
			});
		}
	};
	fcts.init();
});

