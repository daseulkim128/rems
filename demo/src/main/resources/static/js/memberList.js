$(function() {
	var memberList = {
		init : function() {
			this.setEvent();
			
			common.setTableOption('myTable');
			
		},
		setEvent : function() {			
			$('#registBtn').on('click', function(){
				common.movePage('memberRegist');
			});
		}
	};
	memberList.init();
});

