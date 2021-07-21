$(function() {
	var membersDetail = {
		init : function() {
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#modifyBtn').on('click',function(){
				location.href = "membersModify.html";
			});
			
			$('#cancelBtn').on('click',function(){
				location.href = "members.html";
			});
		}
	};
	membersDetail.init();
});
