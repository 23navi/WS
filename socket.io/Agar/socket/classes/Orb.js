class Orb {
  constructor() {
    this.color = this.getRandomColor();
    this.locX = Math.floor(Math.random() * 500);
    this.locY = Math.floor(Math.random() * 500);
    this.radius = 5;
  }

  getRandomColor() {
    const red = Math.floor(Math.random() * 200 + 55);
    const green = Math.floor(Math.random() * 200 + 55);
    const blue = Math.floor(Math.random() * 200 + 55);
    return `rgb(${red},${green},${blue})`;
  }
}

module.exports = Orb;
