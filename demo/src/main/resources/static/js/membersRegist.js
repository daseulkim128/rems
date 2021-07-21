$(function() {
	var membersRegist = {
		init : function() {
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#cancelBtn').on('click',function(){
				location.href = "members.html";
			});
		}
	};
	membersRegist.init();
});
