import './style.css';
import * as PIXI from 'pixi.js';
import { graphicsUtils, Renderer } from 'pixi.js';

const appDiv = document.getElementById('app');
let app;
let yrgonaut;
let eatButton;
let sleepButton;
let computerButton;
let beerButton;
let legstretchButton;
let stackOverflowButton;
let background;
let buttons = [];

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
  app.loader.baseUrl = 'sprites';
  //add assets to preload here:
  app.loader
    .add('yrgotchiBase', 'yrgotchi_base.png')
    //icons:
    .add('beer', 'beer_mug.png')
    .add('computer', 'computer.png')
    .add('forkAndKnife', 'fork_and_knife.png')
    .add('legstretch', 'legstretch.png')
    .add('moon', 'moon.png')
    .add('stackOverflow', 'stack_overflow.png')
    //character:
    .add('yrgonaut', 'yrgonaut.json');

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
  //buttons.push(eatButton, sleepButton, computerButton, beerButton, legstretch)
  app.stage.addChild(eatButton);
  eatButton.on('pointerdown', eat);
  app.stage.addChild(sleepButton);
  sleepButton.on('pointerdown', sleep);
  app.stage.addChild(computerButton);
  app.stage.addChild(beerButton);
  beerButton.on('pointerdown', beer);
  app.stage.addChild(legstretchButton);
  app.stage.addChild(stackOverflowButton);
}

function disableButtonsAndIdle() {
  app.stage.removeChild(yrgonaut);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].interactive = false;
  }
}

function enableButtonsAndIdle() {
  app.stage.addChild(yrgonaut);
  yrgonaut.onComplete = function () {
    app.stage.removeChild(yrgonaut);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].interactive = true;
    }
    idle();
  };
}

function sleep() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('sleep', 271, 390, 0.02, 0.5, false);
  enableButtonsAndIdle();
}

function eat() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('eat', 253, 390, 0.02, 0.5, false);
  yrgonaut.animationId = 'eat';
  enableButtonsAndIdle();
}

function idle() {
  yrgonaut = new Yrgonaut('idle', 235, 390, 0.009, 0.5, true);
  app.stage.addChild(yrgonaut);
}

function beer() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut('beer', 253, 390, 0.02, 0.5, false);
  enableButtonsAndIdle();
}
