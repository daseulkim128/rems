$(function() {
	var fctsDetail = {
		init : function() {
			accordionItemHtml = $('#accordionExample').html();
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#modifyBtn').on('click', function(){
				location.href="fctsModify.html";
			});
			
			$('#cancelBtn').on('click', function(){
				location.href="fcts.html";
			});
		
		}
	};
	fctsDetail.init();
});
