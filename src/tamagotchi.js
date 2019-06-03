class Tamagotchi {
  constructor(name, hunger, age, play, sleep, poo) {
    this.name = name;
    this.hunger = hunger;
    this.age = age;
    this.play = play;
    this.sleep = sleep;
    this.poo = poo;
  }

  createMe() {
    let name = "buddy";
    let age = 0;
    let hunger = 25;
    let play = 20;
    let sleep = 15;
    let poo = 1;

    setInterval(() => {
      this.age++;
      this.hunger-=2;
      this.play++;
      this.sleep-=4;
      this.poo--;
    }, 30000);

  let newTamagotchi = new Tamagotchi(name, age, hunger, play, sleep, poo);

  return newTamagotchi;


  }

  feedMe() {

  }

  playWithMe() {

  }

  getRest() {

  }

  cleanUpPoo() {

  }
}
