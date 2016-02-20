$(function(){

	$('form.login_form').submit(function(){
    	loader_on();
    	$.ajax({
	        type    : "POST",
	        cache   : false,
	        url     : "/api/login.php",
	        dataType: 'json',
	        data    : $('form.login_form').serialize(),
	        success: function(data) {
	        	if(data.result) {
	        		$('form.login_form').html('<div class="alert alert-success">Вы успешно авторизированы!</div>');
	        		setTimeout(function(){
	        			location.href = data.url;
	        		}, 1000);
	        	} else {
	        		$('form.login_form .alert-danger').html(data.error).removeClass('hide');
	        	}
	        	loader_off();
	        }
	    });
    	return false;
    });

    $('form.registration_form').submit(function(){
    	loader_on();
    	$.ajax({
	        type    : "POST",
	        cache   : false,
	        url     : "/api/login.php",
	        dataType: 'json',
	        data    : $('form.registration_form').serialize(),
	        success: function(data) {
	        	if(data.result) {
	        		$('form.registration_form').html('<div class="alert alert-success">Вы успешно зарегестрированы!</div>');
	        		setTimeout(function(){
	        			location.href = data.url;
	        		}, 1000);
	        	} else {
	        		$('form.registration_form .alert-danger').html(data.error).removeClass('hide');
	        	}
	        	loader_off();
	        }
	    });
    	return false;
    });

    $('form.forgot_form').submit(function(){
    	loader_on();
    	$.ajax({
	        type    : "POST",
	        cache   : false,
	        url     : "/api/login.php",
	        dataType: 'json',
	        data    : $('form.forgot_form').serialize(),
	        success: function(data) {
	        	if(data.result) {
	        		$('form.forgot_form').html('<div class="alert alert-success">Пароль успешно сброшен!<br>Новый пароль отправлен Вам на почту.</div><a href="'+data.url+'" class="btn btn-primary">Назад</a>');
	        	} else {
	        		$('form.forgot_form .alert-danger').html(data.error).removeClass('hide');
	        	}
	        	loader_off();
	        }
	    });
    	return false;
    });

})