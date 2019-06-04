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
    // setInterval(() => {
      this.age++;
      this.hunger--;
      this.play--;
      this.sleep--;
    // }, 5000);
      this.update();
  }

  update() {
    console.log(this);
    // console.log(this.sleep);
    $("#hungerStats").load("Hunger: " + this.hunger);
    console.log(this.hunger);
    $("#ageStats").load("Age: " + this.age);
    $("#playStats").load("Play: " + this.play);
    $("#sleepStats").load("Sleep: " + this.sleep);
    $("#pooStats").load("Poo: " + this.poo);
    //clearInterval(this);
  };

  feedMe() {
    this.hunger+= 5;
    setTimeout(() => {
      this.poo--;
    }, 3000);

    if(this.poo === 0) {
      this.poo++;
    }
  }
  //if your tamagotchi is -hunger and -sleep, return "your tamagotchi has died"

  playWithMe() {
    this.play+= 5;
  }

  getRest() {
    this.sleep+= 5;

  }

  cleanUpPoo() {
    this.poo+= 1;
  }
}

export default Tamagotchi;
