class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.age = 0;
    this.play = 5;
    this.sleep = 5;
    this.poo = 1;
    this.alive = true;
  }

  createMe() {
    this.age+=.1;
    this.hunger--;
    this.play--;
    this.sleep--;
    this.update();
    if(this.hunger <= 0 || this.sleep <= 0 || this.play <= 0 || this.age >= 20){
      this.alive = false;
      // this.deathToTamagotchi();
    }
  }

  update() {
    $("#hungerStats").html("My hunger level is... " + this.hunger);
    $("#playStats").html("Playfulness: " + this.play);
    $("#ageStats").html("Age: " + Math.floor(this.age));
    $("#sleepStats").html(`Sleepiness: ${this.sleep}`);
    $("#pooStats").html("Poo: " + this.poo);
    $("#myName").html(`My name is ${this.name}!`)
    $("#create").hide()
    $("#game").show()

    if(this.alive == false) {
      $("#dead").show()
      $("#game").hide()
      $("#stats").hide()


    }
  };

  feedMe() {
    this.hunger+= 5;
    setTimeout(() => {
      this.poo--;
    }, 1500);

    if(this.poo === 0) {
      this.poo++;
    }
  }

  playWithMe() {
    this.play+= 5;
  }

  goToSleep() {
    this.sleep+= 5;

  }

  cleanUpPoo() {
    this.poo+= 1;
  }

  deathToTamagotchi() {
    console.log("die");
    return "You have died";
  }
}

//if poo = 1.. "clean up poo"

export default Tamagotchi;
