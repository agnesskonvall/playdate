function sleep() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('sleep', 271, 390, 0.02, 0.5, false);
  statistics.tiredness -= 2;
  statistics.tiredness = Math.max(statistics.tiredness, 0);
  enableButtonsAndIdle();
}
