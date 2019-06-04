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
    // const testName = parseInt($("#name").val());

    // function checkName(newName) {
    //   if (newName.contains('!')){
    //     return new Error("Do not use '!'");
    //   }
    // }
    //
    // try {
    //   const isNameValid = checkName(newName);
    //   if (isNameValid instanceof Error){
    //     console.error(isNumberValid.message);
    //     throw RangeError("Do not use '!'");
    //   }else {
    //     console.log("Try successful, no catch needed!");
    //   }
    // } catch(error) {
    //   console.error(`Warning!! Error: ${error.message}`);
    // }


let yourTamagotchi = new Tamagotchi(newName);
yourTamagotchi.createMe.bind(yourTamagotchi);
let interval = setInterval(yourTamagotchi.createMe.bind(yourTamagotchi), 2000);
let updateInterval = setInterval(yourTamagotchi.update.bind(yourTamagotchi), 500);


$("#food").on("click", () => {
  yourTamagotchi.feedMe();
  // yourTamagotchi.createMe();
})

$("#play").on("click", () => {
  yourTamagotchi.playWithMe();
  // yourTamagotchi.createMe();

})
$("#sleep").on("click", () => {
  yourTamagotchi.goToSleep();
  // yourTamagotchi.createMe();

})

// let isTamaDeed = this.deathToTamagotchi;
// while(!isTamaDeed){
  //   $("#dead").html(isTamaDeed);
  // }
});

});
