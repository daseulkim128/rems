$(function() {
	common = {
		init : function() {
			this.setEvent();
		},
		setEvent : function() {
			$('button[name=download-btn]').click(function(){
				var tableName = $(this).attr('tname');
				$('#'+tableName).parents('div.dataTables_wrapper').find('button.buttons-excel').trigger('click');
			});
		},
		setCalendar : function (stDateId, stDate, endDateId, endDate, def) {
			
			$('#'+stDateId).datepicker({format:'yyyy-mm-dd', language:'ko', autoclose: true});
			$('#'+stDateId).datepicker('setDate', stDate);
			
			if(endDateId != undefined) {
				$('#'+endDateId).datepicker({format:'yyyy-mm-dd', language:'ko', autoclose: true});
				$('#'+endDateId).datepicker('setDate', endDate);
			}
			
			if(!!def) $('#' + def).trigger('click');
			
			$('select.ui-datepicker-year').attr('title', '년도 선택');
			$('select.ui-datepicker-month').attr('title', '월 선택');
			
			$('#'+stDateId).parent().find('svg.search-calendar').on('click', function(){
				$('#'+stDateId).datepicker('show');
			});
			if(endDateId != undefined) {
				$('#'+endDateId).parent().find('svg.search-calendar').on('click', function(){
					$('#'+endDateId).datepicker('show');
				});
			}
		},
		
		/**
		 * 데이터 테이블 옵션
		 */
		setTableOption : function(id){
			
			$('#'+id).DataTable( {
				"searching": false,
				"language": {
					"paginate": {
						"previous": "<",
						"next":">"
					},
					 "emptyTable" : "데이터가 없습니다.",
					 "infoEmpty" : "0 / 0",
					 "infoFiltered" : "(전체 _MAX_ 중 검색결과)",
					 "lengthMenu" : "_MENU_ 개씩 보기"
				},
				dom: 'Btipl',
				buttons: [
					{
						extend: 'excel'
						,text: '엑셀출력'
						,filename: '엑셀파일명'
						,title: '엑셀파일 안에 쓰일 제목'
					}
				]
			} );
			
			
			
			var infoHtml = $('#'+id).parents('div.dataTables_wrapper').find('div.dataTables_info').html();
			var pagiHtml = $('#'+id).parents('div.dataTables_wrapper').find('div.dataTables_paginate').html();
			var lengthHtml = $('#'+id).parents('div.dataTables_wrapper').find('div.dataTables_length').html();
			
			var bottomDiv = '<div class="data-tables-bottom"></div>';
			
			$('#'+id).parents('div.dataTables_wrapper').find('div.dataTables_info').remove();
			$('#'+id).parents('div.dataTables_wrapper').find('div.dataTables_paginate').remove();
			$('#'+id).parents('div.dataTables_wrapper').find('div.dataTables_length').remove();
			$('#'+id).parents('div.dataTables_wrapper').append(bottomDiv);
			
			$('#'+id).parents('div.dataTables_wrapper').find('div.data-tables-bottom').append(infoHtml);
			$('#'+id).parents('div.dataTables_wrapper').find('div.data-tables-bottom').append(pagiHtml);
			$('#'+id).parents('div.dataTables_wrapper').find('div.data-tables-bottom').append(lengthHtml);
		}
	};

	common.init();
});
