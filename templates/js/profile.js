$(function(){

	loader_on();

	$.ajax({
        type    : "POST",
        cache   : false,
        url     : "/api/account.php",
        dataType: 'json',
        data    : {'action' : 'info'},
        success: function(data) {
        	if(data.result) {
        		$('.load_name').text(data.user.name);
        		$('.load_mail').text(data.user.mail);
        		$('.load_photo').attr('src', data.user.photo);
        		$('.load_bar').html('<div class="prog-bar-inner" style="width: '+data.user.rating.progress+'%;"></div>'+data.user.rating.progress+'%');
        		$('.load_level').text(data.user.rating.level);
        		$('.load_rating').text(data.user.rating.number+'/'+data.user.rating.total);
        	} else alert('Произошла ошибка при загрузке!');
        	console.log(data);
        	loader_off();
        }
    });

})