
	function fnProc_awcRd() { 

		if(isValid_awcRd()){
			document.frm.target = "procFrame";
			document.frm.action = "/ad/awcAdProc.asp"
			document.frm.submit();
		}		
	}

	function isValid_awcRd() { 
		
		if($("#userName").val() ==""){
			alert("이름을 입력해주세요.");
			$("#userName").focus();
			return false;
		}
		if($("#hpno2").val() ==""){
			alert("연락처를 입력해주세요.");
			$("#hpno2").focus();
			return false;
		}
		if($("#hpno3").val() ==""){
			alert("연락처를 입력해주세요.");
			$("#hpno3").focus();
			return false;
		}
		if($("#callTime").val() ==""){
			alert("상담 가능시간을 선택해주세요.");
			return false;
		}
		if(!$("#agree").is(":checked")){
			alert("개인정보취급방침 및 위탁동의를 해주세요.");
			$("#agree").focus();
			return false;
		} 
		return true;
	}
