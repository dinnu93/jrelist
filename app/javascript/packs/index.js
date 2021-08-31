function toggle_check() {
	if ($('#check').is(':checked')) {
		$('.btn-start').prop('disabled',false);
	} else {
		$('.btn-start').prop('disabled',true);
	}
}

toggle_check();

$('#check').click(function(){
	toggle_check();
});

$('.btn-start').click(function(){
	window.location.href = './timer.php';
});

function showCountdown(c) {
	if (c < 10) {
		return ('0' + c.toString()) ;
	} else if (c == 0) {
		return '00';
	} else {
		return c.toString();
	}
}

var countdown = parseInt($('.countdown').text().split(":")[1]);


var timer = setInterval(function(){
	if (countdown > 0) {
		countdown = countdown - 1
		$('.countdown').text('00:' + showCountdown(countdown));
	} else if (countdown == 0) {
		window.location.href = './quiz.php';
	}

}, 1000)

// Quiz timer 

var quizCountdown = $('.quiz-countdown').text().split(":").map(function (s) {return isNaN(parseInt(s)) ? 0 : parseInt(s) });

var quizTimer = setInterval(function(){
	if (quizCountdown[0] > 0) {
		if (quizCountdown[1] == 0) {
			quizCountdown[0] = quizCountdown[0] - 1;
			quizCountdown[1] = 59;
		} else {
			quizCountdown[0] = quizCountdown[0]
			quizCountdown[1] = quizCountdown[1] - 1;
		}
		$('.quiz-countdown').text( showCountdown(quizCountdown[0]) + ':' + showCountdown(quizCountdown[1]));
	}

}, 1000)

$('.btn-submit-test').click(function(){
	$('#testConfirmModal').modal('show');
});

$('.btn-no').click(function(){
	$('#testConfirmModal').modal('hide');
});

$('.btn-yes').click(function(){
	window.location.href = './responses.php';
});


$('.btn-response-download').click(function(){
	html2pdf().from(document.body).save('quiz-responses.pdf');
});

// Sign Up

$('.bi-password').click(function(){
	if ($('.bi-password').hasClass('bi-eye-slash-fill')) {
		$('.bi-password').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
		$('.password').attr('type','text');
	} else if ($('.bi-password').hasClass('bi-eye-fill')) {
		$('.bi-password').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
		$('.password').attr('type','password');
	}	
});

$('.bi-confirm-password').click(function(){
	if ($('.bi-confirm-password').hasClass('bi-eye-slash-fill')) {
		$('.bi-confirm-password').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
		$('.verify-password').attr('type','text');
	} else if ($('.bi-confirm-password').hasClass('bi-eye-fill')) {
		$('.bi-confirm-password').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
		$('.verify-password').attr('type','password');
	}	
});



function signup_toggle_check() {
	if (!$('.first_name').val() || !$('.last_name').val() || !$('.email').val() || !$('.password').val() || !$('.verify-password').val() || $('.password').val() !== $('.verify-password').val()) {
		$('.btn-signup').prop('disabled',true);
	} else {
		$('.btn-signup').prop('disabled',false);
	}
}

setInterval(function(){
	signup_toggle_check();
} , 500);

// Sign In
$('.bi-login').click(function(){
	if ($('.bi-login').hasClass('bi-eye-slash-fill')) {
		$('.bi-login').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
		$('.login-password').attr('type','text');
	} else if ($('.bi-login').hasClass('bi-eye-fill')) {
		$('.bi-login').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
		$('.login-password').attr('type','password');
	}	
});

function signin_toggle_check() {
	if (!$('.login-email').val() || !$('.login-password').val()) {
		$('.btn-signin').prop('disabled',true);
	} else {
		$('.btn-signin').prop('disabled',false);
	}
}

setInterval(function(){
	signin_toggle_check();
} , 500);


// Dashboard

$('.btn-new-quiz').click(function(){
	window.location.href = './create_quiz.php';
});