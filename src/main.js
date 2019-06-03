//require('exports-loader?file!./bootstrap/js/dist/.js')
import Tamagotchi from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



// function attachListeners() {
//   $("#careFor").on("click", "button", function() {
//     Tamagotchi.feedMe();
//     Tamagotchi.playWithMe();
//     Tamagotchi.getRest();
//   });
// }
$(document).ready(function() {
  // attachListeners();
  $("#create").on('submit', function(e){
    e.preventDefault();
    let newName = $("#name").val();
    let yourTamagotchi = new Tamagotchi(newName);
    yourTamagotchi.createMe();
    let interval = setInterval(yourTamagotchi.update, 1000);

    $("#hungerStats").html("Hunger: " + yourTamagotchi.hunger);
    $("#ageStats").html("Age: " + yourTamagotchi.age);
    $("#playStats").html("Play: " + yourTamagotchi.play);
    $("#sleepStats").html("Sleep: " + yourTamagotchi.sleep);
    $("#pooStats").html("Poo: " + yourTamagotchi.poo);

    $("#food").on("click", () => {
      yourTamagotchi.feedMe();
      yourTamagotchi.createMe();
      //clearInterval(interval);
      $("#hungerStats").html("Hunger: " + yourTamagotchi.hunger);

      })
      $("#play").on("click", () => {
        yourTamagotchi.playWithMe();
        yourTamagotchi.createMe();
        //clearInterval(interval);
        $("#playStats").html("Playfulness: " + yourTamagotchi.play);
    })
  });





});
