var accordionItemHtml;
var fctsListIdx = 1;

$(function() {
	var membersRegist = {
		init : function() {
			accordionItemHtml = $('#accordionExample').html();
			
			this.setEvent();
		},
		setEvent : function() {			
			
			/**
			 * 인버터 추가
			 */
			$('#accordionExample').on('click', 'button[name=addInvertBtn]', function(){
				addInvertHtml(this);
			});
			
			/**
			 * 인버터 삭제
			 */
			$('#accordionExample').on('click','button[name="delInvertBtn"]', function(){
				if(!confirm('인버터를 삭제하시겠습니까?')){
					return false;
				}
				$(this).parents('tr.invertor-tr').remove();
			});
			
			/**
			 * 발전소 추가
			 */
			$('button[name="addFctsBtn"]').on('click', function(){
				addFctsHtml();
			});
		}
	};
	membersRegist.init();
});

function addInvertHtml(obj){
	
	/*var qs		='<tr class="invertor-tr">'
				+'<th class="table-th">인버터</th>'
				+'	<td colspan="1">'
				+'		<div class="input-group">'
				+'			<input class="form-control" type="text" aria-label="default input example">'
				+'			<button class="btn btn-sm btn-dark pm-buttons" type="button" name="delInvertBtn">-</button>'
				+'		</div>'
				+'	</td>'
				+'</tr>';*/
	
	var qs		='<tr class="invertor-tr">'
				+'<th class="table-th">인버터</th>'
				+'	<td colspan="1">'
				+'		<div class="input-group">'
				+'			<div class="left">'
    			+'				<span>식별 ID :</span>'
	    		+'				<input class="form-control" type="text" aria-label="default input example">'
	    		+'			</div>'
	    		+'			<div class="center">'
    			+'				<span>모델명 :</span>'
	    		+'				<input class="form-control" type="text" aria-label="default input example">'
	    		+'			</div>'
	    		+'			<div class="right">'
	    		+'				<button class="btn btn-sm btn-dark pm-buttons" type="button" name="delInvertBtn">-</button>'	
	    		+'			</div>'
				+'		</div>'
				+'	</td>'
				+'</tr>';
	
	
	$(obj).parents('table[name=invertor-table]').find('tbody').append(qs);
	
}

function addFctsHtml(){
	
	var addHtml = accordionItemHtml;
	fctsListIdx++;
	addHtml = addHtml.replace(/list_1/g, 'list_'+fctsListIdx);
	addHtml = addHtml.replace(/head_1/g, 'head_'+fctsListIdx);
	$('#accordionExample').append(addHtml);
}

