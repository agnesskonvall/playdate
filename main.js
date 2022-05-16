import './style.css';
import * as PIXI from "pixi.js";
import { graphicsUtils, Renderer } from 'pixi.js';

const appDiv = document.getElementById('app');
let app;
let sprite_sheet;
let yrgonaut;
let eat_button;
let sleep_button;
let computer_button;
let beer_button;
let legstretch_button;
let stack_overflow_button;


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

class Menu_Item extends PIXI.Sprite {
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
  .add("yrgotchi_base", "yrgotchi_base.png")
  //icons:
  .add("beer", "beer_mug.png")
  .add("computer", "computer.png")
  .add("fork_and_knife", "fork_and_knife.png")
  .add("legstretch", "legstretch.png")
  .add("moon", "moon.png")
  .add("stack_overflow", "stack_overflow.png")
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
  let background = new PIXI.Sprite.from(app.loader.resources.yrgotchi_base.texture)
  app.stage.addChild(background);
  //create menu:
  create_Menu();
  idle();

  app.ticker.add(gameLoop);
}
function gameLoop() {

}

function create_Menu() {
  eat_button = new Menu_Item(120, 283, "fork_and_knife", true, true);
  sleep_button = new Menu_Item(190, 283, "moon", true, true);
  computer_button = new Menu_Item(265, 285, "computer", true, true);
  beer_button = new Menu_Item(330, 282, "beer", true, true);
  legstretch_button = new Menu_Item(118, 462, "legstretch", true, true);
  stack_overflow_button = new Menu_Item(185, 464, "stack_overflow", true, true);
  app.stage.addChild(eat_button);
  eat_button.on('pointerdown', eat);
  app.stage.addChild(sleep_button);
  sleep_button.on('pointerdown', sleep);
  app.stage.addChild(computer_button);
  app.stage.addChild(beer_button);
  app.stage.addChild(legstretch_button);
  app.stage.addChild(stack_overflow_button);
}
function sleep() {
  app.stage.removeChild(yrgonaut);
  yrgonaut = new Yrgonaut("sleep", 239, 390, 0.02, 0.5, false)
  sprite_sheet = app.loader.resources["yrgonaut"].spritesheet;
  app.stage.addChild(yrgonaut);
  yrgonaut.play();
  yrgonaut.onComplete = function () {
  app.stage.removeChild(yrgonaut);
  idle();
  };
  }

function eat() {
  app.stage.removeChild(yrgonaut);
  yrgonaut = new Yrgonaut("eat", 239, 390, 0.02, 0.5, false)
  sprite_sheet = app.loader.resources["yrgonaut"].spritesheet;
  app.stage.addChild(yrgonaut);
  yrgonaut.play();
  yrgonaut.onComplete = function () {
  app.stage.removeChild(yrgonaut);
  idle();
  };
  }

  function idle() {
    yrgonaut = new Yrgonaut("idle", 235, 390, 0.009, 0.5, true)
    app.stage.addChild(yrgonaut);
  }


