function showStats() {
  showingStats = true;
  disableButtonsAndIdle();
  console.log('coding skills = ' + statistics.codingSkills);
  console.log('happiness = ' + statistics.happiness);
  console.log('tiredness = ' + statistics.tiredness);
  console.log('anger = ' + statistics.frustration);
  stats = new PIXI.Text(
    'Tiredness = ' +
      statistics.tiredness +
      '\nHappiness = ' +
      statistics.happiness +
      '\nFrustration = ' +
      statistics.frustration +
      '\nCoding Skills = ' +
      statistics.codingSkills,
    {
      fontFamily: 'VT323',
      fontSize: 24,
      fill: 0x000000,
    }
  );
  stats.anchor.set(0.5);
  stats.x = app.view.width / 2;
  stats.y = app.view.height / 2;
  app.stage.addChild(stats);
  setTimeout(() => {
    enableButtonsAndIdle();
  }, 3000);
}
