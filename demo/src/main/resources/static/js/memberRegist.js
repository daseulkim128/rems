$(function() {
	var memberRegist = {
		init : function() {
			
			this.setEvent();
		},
		setEvent : function() {			
			
			$('#registBtn').on('click',function(){
				registMember();
			});
			
			$('#cancelBtn').on('click',function(){
				common.movePage('memberList');
			});
		}
	};
	memberRegist.init();
});

function chkId(){
	
	$.post('members', param, function(data){
		
	}
	
}

function registMember(){
	
	var param = {
		"ID"	: $('#MEM_ID').val() ,
		"NM" 	: $('#MEM_NM').val(),
		"CONT"	: $('#MEM_CONT1').val() + '-' +  $('#MEM_CONT2').val() + '-' + $('#MEM_CONT3').val() ,
		"EML" 	: $('#MEM_EML').val(),
		"STAT" 	: $('#MEM_STAT').val()
	}
	
	$.post('members', param, function(data){
		
		if(data.result > 0){
			alert('성공적으로 등록되었습니다!'); 
			common.movePage('memberList');
		}
	});
}

