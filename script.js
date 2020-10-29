import './style.scss';
import $ from 'jquery';
// import axios from 'axios';

var fond = $('<div class="fond"></div>');
fond.css({
  'background-image': 'url(fond.jpg)',
  'background-repeat': 'no-repeat',

  'background-size': 'cover',
  position: 'relative',
  width: '100%',
  height: '100%',
});
$('body').html(fond);

var fish1 = $('<img class="fish fish1" src="bleuDroite.png"/>');
$('.fond').append(fish1);
var fish2 = $('<img class="fish fish2" src="jauneDroite.png"/>');
$('.fond').append(fish2);
var fish3 = $('<img class="fish fish3" src="bleuGauche.png"/>');
$('.fond').append(fish3);
var fish4 = $('<img class="fish fish4" src="jauneGauche.png"/>');
$('.fond').append(fish4);
var algue = $('<img class="seaweed" src="seaweed.png"/>');
$('.fond').append(algue);

var algue1 = algue.clone().appendTo('.fond');
algue1.addClass('algue1');
var algue2 = algue.clone().appendTo('.fond');
algue2.addClass('algue2');
var algue3 = algue.clone().appendTo('.fond');
algue3.addClass('algue3');

$('.fish').each(function () {
  $(this).clone().appendTo('.fond');
});
setInterval(function () {
  var position = parseInt($('.fish3').css('left'), 10);
  position -= 1;
  $('.fish3').css('left', `${position}px`);
}, 25);

setInterval(function () {
  var position1 = parseInt($('.fish2').css('left'), 10);
  position1 += 1;
  $('.fish2').css('left', `${position1}px`);
}, 35);

setInterval(function () {
  var position2 = parseInt($('.fish4').css('left'), 10);
  position2 -= 1;
  $('.fish4').css('left', `${position2}px`);
}, 150);

setInterval(function () {
  var position3 = parseInt($('.fish1').css('left'), 10);
  position3 += 1;
  $('.fish1').css('left', `${position3}px`);
}, 150);

/*
$('.fish').after('<p>je suis un poisson</p>');
*/
