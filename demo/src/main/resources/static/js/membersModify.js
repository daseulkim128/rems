$(function() {
	var membersModify = {
		init : function() {
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#modifyBtn').on('click',function(){
				location.href = "membersDetail.html";
			});
			
			$('#cancelBtn').on('click',function(){
				location.href = "members.html";
			});
		}
	};
	membersModify.init();
});
