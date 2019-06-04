class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 25;
    this.age = 0;
    this.play = 20;
    this.sleep = 15;
    this.poo = 1;
    // this.alive = true;
  }

  createMe() {
      this.age+=.1;
      this.hunger--;
      this.play--;
      this.sleep--;
      this.update();
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
  };

  feedMe() {
    this.hunger+= 5;
    setTimeout(() => {
      this.poo--;
    }, 2500);

    if(this.poo === 0) {
      this.poo++;
    }
  }
  //if your tamagotchi is -hunger and -sleep, return "your tamagotchi has died"

  playWithMe() {
    this.play+= 5;
  }

  goToSleep() {
    this.sleep+= 5;

  }

  cleanUpPoo() {
    this.poo+= 1;
  }

  // deathToTamagotchi() {
  //   if(this.hunger === 0 || this.sleep === 0 || this.play === 0 || this.age === 20){
  //     return "You have died";
  //   }else{
  //   false;
  // }
};
}
export default Tamagotchi;
