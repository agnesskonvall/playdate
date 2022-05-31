import * as PIXI from 'pixi.js';
import YrgoStats from './yrgostats';
import MenuItem from './menuitem';
import Animations from './animations';

let app;
let yrgonaut;
let eatButton;
let sleepButton;
let computerButton;
let beerButton;
let legstretchButton;
let stackOverflowButton;
let statsButton;
let githubButton;
let background;
let statistics;
let stats;
let showingStats = false;
let buttons = [];

window.onload = function () {
  app = new PIXI.Application({
    width: 500,
    height: 700,
    backgroundAlpha: 0,
  });

  //render a div to place canvas in:
  let appDiv = document.createElement('div');
  appDiv.setAttribute('id', 'game');

  //render canvas:
  document.querySelector('.game').appendChild(appDiv);
  appDiv.appendChild(app.view);

  //preload sprites location:
  app.loader.baseUrl = '/resources/';

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
    .add('github', 'sprites/github.png')
    .add('stats', 'sprites/stats.png')
    //character:
    .add('yrgonaut', 'sprites/yrgonaut_sheet.json')
    //sounds:
    .add('attention', 'sounds/attention.mp3')
    .add('happy', 'sounds/happy.mp3')
    .add('frustrated', 'sounds/frustrated.mp3')
    .add('tired', 'sounds/tired.mp3');

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
  //render stats object:
  statistics = new YrgoStats(5, 5, 0, 0);

  //render animations object:
  const animations = new Animations(
    statistics,
    app,
    yrgonaut,
    buttons,
    showingStats,
    stats
  );

  //render background:
  background = new PIXI.Sprite.from(app.loader.resources.yrgotchiBase.texture);
  app.stage.addChild(background);

  //render menu:
  eatButton = new MenuItem(app, 120, 283, 'forkAndKnife', buttons);
  sleepButton = new MenuItem(app, 190, 283, 'moon', buttons);
  computerButton = new MenuItem(app, 265, 285, 'computer', buttons);
  beerButton = new MenuItem(app, 330, 282, 'beer', buttons);
  legstretchButton = new MenuItem(app, 118, 462, 'legstretch', buttons);
  stackOverflowButton = new MenuItem(app, 190, 464, 'stackOverflow', buttons);
  githubButton = new MenuItem(app, 262, 461, 'github', buttons);
  statsButton = new MenuItem(app, 330, 460, 'stats', buttons);
  app.stage.addChild(eatButton);
  eatButton.on('pointerdown', animations.Eat.bind(animations));
  app.stage.addChild(sleepButton);
  sleepButton.on('pointerdown', animations.Sleep.bind(animations));
  app.stage.addChild(computerButton);
  computerButton.on('pointerdown', animations.Code.bind(animations));
  app.stage.addChild(beerButton);
  beerButton.on('pointerdown', animations.Beer.bind(animations));
  app.stage.addChild(legstretchButton);
  legstretchButton.on('pointerdown', animations.Stretch.bind(animations));
  app.stage.addChild(stackOverflowButton);
  stackOverflowButton.on('pointerdown', animations.Stack.bind(animations));
  app.stage.addChild(githubButton);
  githubButton.on('pointerdown', animations.Github.bind(animations));
  app.stage.addChild(statsButton);
  statsButton.on('pointerdown', animations.ShowStats.bind(animations));

  //render yrgonaut:
  animations.Idle();
  app.ticker.add(gameLoop);
}
function gameLoop() {}
