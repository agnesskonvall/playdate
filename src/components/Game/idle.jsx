function idle() {
  calculateMood();
  console.log(mood);
  yrgonaut = new Yrgonaut('idle', 235, 390, 0.009, 0.5, true);
  app.stage.addChild(yrgonaut);
}
