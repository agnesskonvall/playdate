function eat() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('eat', 253, 390, 0.02, 0.5, false);
  statistics.happiness += 2;
  enableButtonsAndIdle();
}
