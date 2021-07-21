$(function() {
	var memberModify = {
		init : function() {
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#modifyBtn').on('click',function(){
				common.movePage('memberDetail');
			});
			
			$('#cancelBtn').on('click',function(){
				common.movePage('memberList');
			});
		}
	};
	memberModify.init();
});
