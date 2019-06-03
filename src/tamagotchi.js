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
    setInterval(() => {
      this.age++;
      this.hunger-=2;
      this.play--;
      this.sleep-=4;
      console.log(this.sleep);
    }, 1000);
    // while(this.alive == true){
    //   clearInterval(this.createMe());
    // }

  }

  feedMe() {
    this.hunger+= 5;
    setTimeout(() => {
      this.poo--;
    }, 60000);

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
