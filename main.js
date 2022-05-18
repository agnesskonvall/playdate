import './style.css';
import * as PIXI from 'pixi.js';
import { sound } from '@pixi/sound';

const appDiv = document.getElementById('app');
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
let buttons = [];
let statistics;
let stats;
let showingStats = false;

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
  constructor(happiness, tiredness, codingSkills) {
    this.happiness = happiness;
    this.tiredness = tiredness;
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
  app.loader.baseUrl = 'resources';
  //add assets to preload here:
  app.loader
    //background:
    .add('yrgotchiBase', 'sprites/yrgotchi_base.png')
    //icons:
    .add('beer', 'icons/beer_mug.png')
    .add('computer', 'icons/computer.png')
    .add('forkAndKnife', 'icons/fork_and_knife.png')
    .add('legstretch', 'icons/legstretch.png')
    .add('moon', 'icons/moon.png')
    .add('stackOverflow', 'icons/stack_overflow.png')
    .add('stats', 'icons/stats.png')
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
  statistics = new YrgoStats(5, 5, 0);
  createMenu();
  idle();

  app.ticker.add(gameLoop);
}
function gameLoop() {}

function createSounds() {}

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
  app.stage.addChild(beerButton);
  beerButton.on('pointerdown', beer);
  app.stage.addChild(legstretchButton);
  app.stage.addChild(stackOverflowButton);
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

function showStats() {
  showingStats = true;
  disableButtonsAndIdle();
  console.log('coding skills = ' + statistics.codingSkills);
  console.log('happiness = ' + statistics.happiness);
  console.log('tiredness = ' + statistics.tiredness);
  stats = new PIXI.Text(
    'Tiredness = ' +
      statistics.tiredness +
      '\nHappiness = ' +
      statistics.happiness +
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

function sleep() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('sleep', 271, 390, 0.02, 0.5, false);
  statistics.tiredness -= 2;
  statistics.tiredness = Math.max(statistics.tiredness, 0);
  enableButtonsAndIdle();
}

function eat() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('eat', 253, 390, 0.02, 0.5, false);
  statistics.happiness += 2;
  enableButtonsAndIdle();
}

function idle() {
  if (statistics.happiness > statistics.tiredness) {
    ///
  } else if (statistics.happiness === statistics.tiredness) {
    yrgonaut = new Yrgonaut('idle', 235, 390, 0.009, 0.5, true);
  } else {
    ///
  }
  app.stage.addChild(yrgonaut);
}

function beer() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('beer', 253, 390, 0.02, 0.5, false);
  enableButtonsAndIdle();
}
