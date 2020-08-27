$(function(){
    
    $(".typed").typed({
		strings: ["ingredients.", "for.", "the.","right.","food."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
    $(window).on('load', function(){
      $('.preloder').delay(500).fadeOut(500);
  });  
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop: 0},2000);
    });
    
    var formTag = document.querySelector('form');
var nameError = document.querySelector('.name_error');
var Email_error = document.querySelector('.email_error');
   var Email = document.querySelector('#email');
var fullName = document.querySelector('#name');
formTag.addEventListener('submit',function(a){
    a.preventDefault();
if(fullName.value == null || fullName.value == '' &&  Email.value == null || Email.value == ''){
        alert('please put your info')
    }
if(Email.value.length <=15 || Email.value.length >=40){
       Email_error.innerHTML = "You must put your email";
        Email.style.borderColor = 'red';
       }else{
           Email_error.innerHTML = '';
           Email.style.borderColor = '#0b0b0b'
       }
})
    
});