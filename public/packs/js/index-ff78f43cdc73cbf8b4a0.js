/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function toggle_check() {
  if ($('#check').is(':checked')) {
    $('.btn-start').prop('disabled', false);
  } else {
    $('.btn-start').prop('disabled', true);
  }
}

toggle_check();
$('#check').click(function () {
  toggle_check();
});
$('.btn-start').click(function () {
  window.location.href = './timer.php';
});

function showCountdown(c) {
  if (c < 10) {
    return '0' + c.toString();
  } else if (c == 0) {
    return '00';
  } else {
    return c.toString();
  }
}

var countdown = parseInt($('.countdown').text().split(":")[1]);
var timer = setInterval(function () {
  if (countdown > 0) {
    countdown = countdown - 1;
    $('.countdown').text('00:' + showCountdown(countdown));
  } else if (countdown == 0) {
    window.location.href = './quiz.php';
  }
}, 1000); // Quiz timer 

var quizCountdown = $('.quiz-countdown').text().split(":").map(function (s) {
  return isNaN(parseInt(s)) ? 0 : parseInt(s);
});
var quizTimer = setInterval(function () {
  if (quizCountdown[0] > 0) {
    if (quizCountdown[1] == 0) {
      quizCountdown[0] = quizCountdown[0] - 1;
      quizCountdown[1] = 59;
    } else {
      quizCountdown[0] = quizCountdown[0];
      quizCountdown[1] = quizCountdown[1] - 1;
    }

    $('.quiz-countdown').text(showCountdown(quizCountdown[0]) + ':' + showCountdown(quizCountdown[1]));
  }
}, 1000);
$('.btn-submit-test').click(function () {
  $('#testConfirmModal').modal('show');
});
$('.btn-no').click(function () {
  $('#testConfirmModal').modal('hide');
});
$('.btn-yes').click(function () {
  window.location.href = './responses.php';
});
$('.btn-response-download').click(function () {
  html2pdf().from(document.body).save('quiz-responses.pdf');
}); // Sign Up

$('.bi-password').click(function () {
  if ($('.bi-password').hasClass('bi-eye-slash-fill')) {
    $('.bi-password').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    $('.password').attr('type', 'text');
  } else if ($('.bi-password').hasClass('bi-eye-fill')) {
    $('.bi-password').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
    $('.password').attr('type', 'password');
  }
});
$('.bi-confirm-password').click(function () {
  if ($('.bi-confirm-password').hasClass('bi-eye-slash-fill')) {
    $('.bi-confirm-password').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    $('.verify-password').attr('type', 'text');
  } else if ($('.bi-confirm-password').hasClass('bi-eye-fill')) {
    $('.bi-confirm-password').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
    $('.verify-password').attr('type', 'password');
  }
});

function signup_toggle_check() {
  if (!$('.first_name').val() || !$('.last_name').val() || !$('.email').val() || !$('.password').val() || !$('.verify-password').val() || $('.password').val() !== $('.verify-password').val()) {
    $('.btn-signup').prop('disabled', true);
  } else {
    $('.btn-signup').prop('disabled', false);
  }
}

setInterval(function () {
  signup_toggle_check();
}, 500); // Sign In

$('.bi-login').click(function () {
  if ($('.bi-login').hasClass('bi-eye-slash-fill')) {
    $('.bi-login').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    $('.login-password').attr('type', 'text');
  } else if ($('.bi-login').hasClass('bi-eye-fill')) {
    $('.bi-login').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
    $('.login-password').attr('type', 'password');
  }
});

function signin_toggle_check() {
  if (!$('.login-email').val() || !$('.login-password').val()) {
    $('.btn-signin').prop('disabled', true);
  } else {
    $('.btn-signin').prop('disabled', false);
  }
}

setInterval(function () {
  signin_toggle_check();
}, 500); // Dashboard

$('.btn-new-quiz').click(function () {
  window.location.href = './create_quiz.php';
});

/***/ })

/******/ });
//# sourceMappingURL=index-ff78f43cdc73cbf8b4a0.js.map