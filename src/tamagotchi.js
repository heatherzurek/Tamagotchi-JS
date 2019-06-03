class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 25;
    this.age = 0;
    this.play = 20;
    this.sleep = 15;
    this.poo = 1;
    this.alive = true;
  }

  createMe() {
    // setInterval(() => {
      this.age++;
      this.hunger-=2;
      this.play-=5;
      this.sleep-=4;
      console.log(this);
    // }, 5000);
    this.update();
  }

  update() {
    console.log(this.hunger);
    console.log(this.sleep);
    $("#hungerStats").html("Hunger: " + this.hunger);
    $("#ageStats").html("Age: " + this.age);
    $("#playStats").html("Play: " + this.play);
    $("#sleepStats").html("Sleep: " + this.sleep);
    $("#pooStats").html("Poo: " + this.poo);
    //clearInterval(this);
  };

  feedMe() {
    this.hunger+= 5;
    setTimeout(() => {
      this.poo--;
    }, 1000);

    if(this.poo === 0) {
      this.poo++;
    }
  }

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
