import * as PIXI from 'pixi.js';
import { sound } from '@pixi/sound';
import Yrgonaut from './yrgonaut';
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

  let appDiv = document.createElement('div');
  appDiv.setAttribute('id', 'game');
  document.querySelector('.game').appendChild(appDiv);
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
  statistics = new YrgoStats(5, 5, 0, 0);
  const animations = new Animations(
    statistics,
    app,
    yrgonaut,
    buttons,
    showingStats,
    stats
  );
  // console.log(app.loader.resources['forkAndKnife'].texture);

  //add background:
  background = new PIXI.Sprite.from(app.loader.resources.yrgotchiBase.texture);
  app.stage.addChild(background);
  //create stats:
  //create menu:
  eatButton = new MenuItem(app, 120, 283, 'forkAndKnife', buttons);
  // sleepButton = new MenuItem(app, 190, 283, 'moon', buttons);
  // computerButton = new MenuItem(app, 265, 285, 'computer', buttons);
  // beerButton = new MenuItem(app, 330, 282, 'beer', buttons);
  // legstretchButton = new MenuItem(app, 118, 462, 'legstretch', buttons);
  // stackOverflowButton = new MenuItem(app, 185, 464, 'stackOverflow', buttons);
  // statsButton = new MenuItem(app, 330, 460, 'stats', buttons);
  app.stage.addChild(eatButton);
  eatButton.on('pointerdown', animations.Eat.bind(animations));
  // app.stage.addChild(sleepButton);
  // sleepButton.on('pointerdown', sleep);
  // app.stage.addChild(computerButton);
  // computerButton.on('pointerdown', code);
  // app.stage.addChild(beerButton);
  // beerButton.on('pointerdown', beer);
  // app.stage.addChild(legstretchButton);
  // legstretchButton.on('pointerdown', stretch);
  // app.stage.addChild(stackOverflowButton);
  // stackOverflowButton.on('pointerdown', stack);
  // app.stage.addChild(statsButton);
  // statsButton.on('pointerdown', showStats);
  animations.Idle();
  app.ticker.add(gameLoop);
}
function gameLoop() {}

// function disableButtonsAndIdle() {
//   app.stage.removeChild(yrgonaut);
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].interactive = false;
//   }
// }

// function enableButtonsAndIdle() {
//   if (showingStats === false) {
//     app.stage.addChild(yrgonaut);
//     yrgonaut.onComplete = function () {
//       app.stage.removeChild(yrgonaut);
//       for (let i = 0; i < buttons.length; i++) {
//         buttons[i].interactive = true;
//       }
//       Idle();
//     };
//   } else {
//     app.stage.removeChild(stats);
//     for (let i = 0; i < buttons.length; i++) {
//       buttons[i].interactive = true;
//     }
//     showingStats = false;
//     Idle();
//   }
// }

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

// function sleep() {
//   disableButtonsAndIdle();
//   yrgonaut = new Yrgonaut(app, 'sleep', 271, 390, 0.02, 0.5, false);
//   statistics.tiredness -= 2;
//   statistics.tiredness = Math.max(statistics.tiredness, 0);
//   enableButtonsAndIdle();
// }

// function eat() {
//   disableButtonsAndIdle();
//   yrgonaut = new Yrgonaut(app, 'eat', 253, 390, 0.02, 0.5, false);
//   statistics.happiness += 2;
//   enableButtonsAndIdle();
// }

// function Idle() {
//   calculateMood();
//   console.log(mood);
//   yrgonaut = new Yrgonaut(app, 'Idle', 235, 390, 0.009, 0.5, true);
//   app.stage.addChild(yrgonaut);
// }

// function beer() {
//   disableButtonsAndIdle();
//   yrgonaut = new Yrgonaut(app, 'beer', 253, 390, 0.02, 0.5, false);
//   enableButtonsAndIdle();
// }

// function stretch() {
//   disableButtonsAndIdle();
//   yrgonaut = new Yrgonaut(app, 'stretch', 262, 390, 0.02, 0.5, false);
//   enableButtonsAndIdle();
// }

// function code() {
//   disableButtonsAndIdle();
//   yrgonaut = new Yrgonaut(app, 'code', 261, 390, 0.02, 0.5, false);
//   enableButtonsAndIdle();
// }

// function stack() {
//   disableButtonsAndIdle();
//   yrgonaut = new Yrgonaut(app, 'stack', 277, 390, 0.02, 0.5, false);
//   enableButtonsAndIdle();
// }
