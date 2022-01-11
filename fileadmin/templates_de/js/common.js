$(document).ready(function(){
	/*
	$('#signonLoginButton').click(function(){
		$('#signonFormErrorMsg').hide();
		$('#signonFormLoginWait').show();
			$.ajax({
				type: 'POST',
				cache: false,
				data: 'account=' + $('#un').val() + '&passwd=' + $('#pw').val() + '&server=' + $('#server').val(),
				url: 'fileadmin/templates_de/php/req.php', 
				success: function(response) {
				var oLogin = $.parseJSON(response);
    			if(oLogin.response.login_successful == 1)
    			{
    				top.location.href = oLogin.response.redirect_url;
    			} else {
    				$('#signonFormLoginWait').hide();
    				$('#signonFormErrorMsg').show();
    			}
  			}
		});
	});
	*/
	$('#buygold').mouseover(function(){
		src = $('#buygold').attr("src");
		newsrc = src.replace('inactive','active');
		$('#buygold').attr("src",newsrc);
	});
	
	$('#buygold').mouseout(function(){
		src = $('#buygold').attr("src");
		newsrc = src.replace('active','inactive');
		$('#buygold').attr("src",newsrc);
	});
});