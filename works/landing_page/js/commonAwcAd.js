
	function fnProc_awcRd() { 

		if(isValid_awcRd()){
			document.frm.target = "procFrame";
			document.frm.action = "/ad/awcAdProc.asp"
			document.frm.submit();
		}		
	}

	function isValid_awcRd() { 
		
		if($("#userName").val() ==""){
			alert("�̸��� �Է����ּ���.");
			$("#userName").focus();
			return false;
		}
		if($("#hpno2").val() ==""){
			alert("����ó�� �Է����ּ���.");
			$("#hpno2").focus();
			return false;
		}
		if($("#hpno3").val() ==""){
			alert("����ó�� �Է����ּ���.");
			$("#hpno3").focus();
			return false;
		}
		if($("#callTime").val() ==""){
			alert("��� ���ɽð��� �������ּ���.");
			return false;
		}
		if(!$("#agree").is(":checked")){
			alert("����������޹�ħ �� ��Ź���Ǹ� ���ּ���.");
			$("#agree").focus();
			return false;
		} 
		return true;
	}
