$(function() {
	var membersRegist = {
		init : function() {
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#registBtn').on('click',function(){
				location.href = "membersDetail.html";
			});
			
			$('#cancelBtn').on('click',function(){
				location.href = "members.html";
			});
		}
	};
	membersRegist.init();
});
