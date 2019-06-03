//require('exports-loader?file!./bootstrap/js/dist/.js')
import Tamagotchi from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
$(document).ready(function() {
  $("#create").on('submit', function(e){
    e.preventDefault();
    let newName = $("#name").val();
    let yourTamagotchi = new Tamagotchi(newName);

    yourTamagotchi.createMe();


    $("#hungerStats").html(`${yourTamagotchi.hunger}`);
    $("#ageStats").html(yourTamagotchi.age);
    $("#playStats").html(yourTamagotchi.play);
    $("#sleepStats").html(yourTamagotchi.sleep);
    $("#pooStats").html(yourTamagotchi.poo);
  });


});
