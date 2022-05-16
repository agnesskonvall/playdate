import './style.css';
import * as PIXI from "pixi.js";
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


class Yrgonaut extends PIXI.AnimatedSprite {
  constructor(animationId, x, y, animationSpeed, anchor, loop) {
    const sheet = app.loader.resources["yrgonaut"].spritesheet;
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
  constructor(x = 0, y = 0, textureId, interactive, buttonMode) {
    super(app.loader.resources[textureId].texture,);
    this.x = x;
    this.y = y;
    this.interactive = interactive
    this.buttonMode = buttonMode
  }
}

window.onload = function() {
app = new PIXI.Application(
  {
    width: 500,
    height: 700,
    backgroundAlpha: 0,
  }
);

appDiv.appendChild(app.view);

//preload sprites location:
app.loader.baseUrl = "sprites";
//add assets to preload here:
app.loader
  .add("yrgotchiBase", "yrgotchi_base.png")
  //icons:
  .add("beer", "beer_mug.png")
  .add("computer", "computer.png")
  .add("forkAndKnife", "fork_and_knife.png")
  .add("legstretch", "legstretch.png")
  .add("moon", "moon.png")
  .add("stackOverflow", "stack_overflow.png")
  //character:
  .add("yrgonaut", "yrgonaut.json")

  app.loader.onProgress.add(loadingProgress);
  app.loader.onComplete.add(loadingSuccessful);
  app.loader.onError.add(errorReport);
  app.loader.load();
}

function loadingProgress(e) {
  console.log(e.progress);
}

function errorReport(e) {
  console.error("error: " + e.message);
}

function loadingSuccessful() {
  console.log("loading complete");
  //add background:
  background = new PIXI.Sprite.from(app.loader.resources.yrgotchiBase.texture)
  app.stage.addChild(background);
  //create menu:
  createMenu();
  idle();
  app.ticker.add(gameLoop);
}
function gameLoop() {

}

function createMenu() {
  eatButton = new MenuItem(120, 283, "forkAndKnife", true, true);
  sleepButton = new MenuItem(190, 283, "moon", true, true);
  computerButton = new MenuItem(265, 285, "computer", true, true);
  beerButton = new MenuItem(330, 282, "beer", true, true);
  legstretchButton = new MenuItem(118, 462, "legstretch", true, true);
  stackOverflowButton = new MenuItem(185, 464, "stackOverflow", true, true);
  app.stage.addChild(eatButton);
  eatButton.on('pointerdown', eat);
  app.stage.addChild(sleepButton);
  sleepButton.on('pointerdown', sleep);
  app.stage.addChild(computerButton);
  app.stage.addChild(beerButton);
  app.stage.addChild(legstretchButton);
  app.stage.addChild(stackOverflowButton);
}

function disableButtonsAndIdle(){
  app.stage.removeChild(yrgonaut);
  eatButton.interactive = false;
  eatButton.buttonMode = false;
  sleepButton.interactive = false;
  sleepButton.buttonMode = false;
  computerButton.interactive = false;
  computerButton.buttonMode = false;
  beerButton.interactive = false;
  beerButton.buttonMode = false;
  legstretchButton.interactive = false;
  legstretchButton.buttonMode = false;
  stackOverflowButton.interactive = false;
  stackOverflowButton.buttonMode = false;
}


function enableButtonsAndIdle(){
  app.stage.addChild(yrgonaut);

  // for (const [key, value] of Object.entries(button)) {
  //   console.log(`${key}: ${value}`);
  // }
  console.log(eatButton);
  eatButton.interactive = true;
  eatButton.buttonMode = true;
  sleepButton.interactive = true;
  sleepButton.buttonMode = true;
  computerButton.interactive = true;
  computerButton.buttonMode = true;
  beerButton.interactive = true;
  beerButton.buttonMode = true;
  legstretchButton.interactive = true;
  legstretchButton.buttonMode = true;
  stackOverflowButton.interactive = true;
  stackOverflowButton.buttonMode = true;
  yrgonaut.onComplete = function () {
    app.stage.removeChild(yrgonaut);
    idle();
    };
}


function sleep() {
  disableButtonsAndIdle();
  yrgonaut= new Yrgonaut("sleep", 239, 390, 0.02, 0.5, false)
  enableButtonsAndIdle();
  }

function eat() {
  disableButtonsAndIdle();
  yrgonaut = new Yrgonaut("eat", 239, 390, 0.02, 0.5, false)
  enableButtonsAndIdle();
  }

  function idle() {
    yrgonaut = new Yrgonaut("idle", 235, 390, 0.009, 0.5, true)
    app.stage.addChild(yrgonaut);
  }


