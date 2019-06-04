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
    yourTamagotchi.createMe.bind(yourTamagotchi);
    let interval = setInterval(yourTamagotchi.createMe.bind(yourTamagotchi), 2500);

    // $("#hungerStats").html("Hunger: " + yourTamagotchi.hunger);
    // $("#ageStats").html("Age: " + yourTamagotchi.age);
    // $("#playStats").html("Play: " + yourTamagotchi.play);
    // $("#sleepStats").html("Sleep: " + yourTamagotchi.sleep);
    // $("#pooStats").html("Poo: " + yourTamagotchi.poo);

    $("#food").on("click", () => {
      yourTamagotchi.feedMe();
      yourTamagotchi.createMe();

    })

    $("#play").on("click", () => {
      yourTamagotchi.playWithMe();
      yourTamagotchi.createMe();

    })
    $("#sleep").on("click", () => {
      yourTamagotchi.goToSleep();
      yourTamagotchi.createMe();

    })

    // let isTamaDeed = this.deathToTamagotchi;
    // while(!isTamaDeed){
    //   $("#dead").html(isTamaDeed);
    // }
  });

});
