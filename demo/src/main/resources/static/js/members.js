$(function() {
	var members = {
		init : function() {
			this.setEvent();
			
			common.setTableOption('myTable');
			
		},
		setEvent : function() {			
			$('#registBtn').on('click', function(){
				location.href ="membersRegist.html";
			});
		}
	};
	members.init();
});

