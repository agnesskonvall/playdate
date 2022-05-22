class Yrgonaut extends PIXI.AnimatedSprite {
  constructor(animationId, x, y, animationSpeed, anchor, loop) {
    const sheet = app.loader.resources['yrgonaut'].spritesheet;
    super(sheet.animations[animationId]);
    this.x = x;
    this.y = y;
    this.width = this.width / 2.5;
    this.height = this.height / 2.5;
    this.animationSpeed = animationSpeed;
    this.anchor.set(anchor);
    this.loop = loop;
    this.play();
  }
}

class YrgoStats {
  constructor(happiness, tiredness, frustration, codingSkills) {
    this.happiness = happiness;
    this.tiredness = tiredness;
    this.frustration = frustration;
    this.codingSkills = codingSkills;
  }
}

class MenuItem extends PIXI.Sprite {
  constructor(x = 0, y = 0, textureId) {
    super(app.loader.resources[textureId].texture);
    this.x = x;
    this.y = y;
    this.interactive = true;
    this.buttonMode = true;
    buttons.push(this);
  }
}
window.onload = function () {
  app = new PIXI.Application({
    width: 500,
    height: 700,
    backgroundAlpha: 0,
  });

  appDiv.appendChild(app.view);

  //preload sprites location:
  app.loader.baseUrl = 'src/components/game/resources';
  //add assets to preload here:
  app.loader
    .add('yrgotchiBase', 'sprites/yrgotchi_base.png')
    //icons:
    .add('beer', 'sprites/beer_mug.png')
    .add('computer', 'sprites/computer.png')
    .add('forkAndKnife', 'sprites/fork_and_knife.png')
    .add('legstretch', 'sprites/legstretch.png')
    .add('moon', 'sprites/moon.png')
    .add('stackOverflow', 'sprites/stack_overflow.png')
    .add('stats', 'sprites/stats.png')
    //character:
    .add('yrgonaut', 'sprites/yrgonaut.json')
    //sounds:
    .add('attention', 'sounds/attention.mp3')
    .add('happy', 'sounds/happy.mp3');

  app.loader.onProgress.add(loadingProgress);
  app.loader.onComplete.add(loadingSuccessful);
  app.loader.onError.add(errorReport);
  app.loader.load();
};

function loadingProgress(e) {
  console.log(e.progress);
}

function errorReport(e) {
  console.error('error: ' + e.message);
}

function loadingSuccessful() {
  console.log('loading complete');
  //add background:
  background = new PIXI.Sprite.from(app.loader.resources.yrgotchiBase.texture);
  app.stage.addChild(background);
  //create menu:
  statistics = new YrgoStats(5, 5, 0, 0);
  createMenu();
  idle();
  app.ticker.add(gameLoop);
}
function gameLoop() {}

function createMenu() {
  eatButton = new MenuItem(120, 283, 'forkAndKnife');
  sleepButton = new MenuItem(190, 283, 'moon');
  computerButton = new MenuItem(265, 285, 'computer');
  beerButton = new MenuItem(330, 282, 'beer');
  legstretchButton = new MenuItem(118, 462, 'legstretch');
  stackOverflowButton = new MenuItem(185, 464, 'stackOverflow');
  statsButton = new MenuItem(330, 460, 'stats');
  app.stage.addChild(eatButton);
  eatButton.on('pointerdown', eat);
  app.stage.addChild(sleepButton);
  sleepButton.on('pointerdown', sleep);
  app.stage.addChild(computerButton);
  computerButton.on('pointerdown', code);
  app.stage.addChild(beerButton);
  beerButton.on('pointerdown', beer);
  app.stage.addChild(legstretchButton);
  legstretchButton.on('pointerdown', stretch);
  app.stage.addChild(stackOverflowButton);
  stackOverflowButton.on('pointerdown', stack);
  app.stage.addChild(statsButton);
  statsButton.on('pointerdown', showStats);
}

function disableButtonsAndIdle() {
  app.stage.removeChild(yrgonaut);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].interactive = false;
  }
}

function enableButtonsAndIdle() {
  if (showingStats === false) {
    app.stage.addChild(yrgonaut);
    yrgonaut.onComplete = function () {
      app.stage.removeChild(yrgonaut);
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].interactive = true;
      }
      idle();
    };
  } else {
    app.stage.removeChild(stats);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].interactive = true;
    }
    showingStats = false;
    idle();
  }
}
