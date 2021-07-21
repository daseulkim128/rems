$(function() {
	var memberDetail = {
		init : function() {
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#modifyBtn').on('click',function(){
				common.movePage('memberModify');
			});
			
			$('#cancelBtn').on('click',function(){
				common.movePage('memberList');
			});
		}
	};
	memberDetail.init();
});
