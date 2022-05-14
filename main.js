import './style.css';
import * as PIXI from "pixi.js";
import { graphicsUtils, Renderer } from 'pixi.js';

const appDiv = document.getElementById('app');
let app;
let yrgonaut;
let eat_button;
let sleep_button;
let computer_button;
let beer_button;
let legstretch_button;
let stack_overflow_button;
let pizza;
let timeout;
let counter = 0;

class Yrgonaut extends PIXI.Sprite {
  constructor(x = 0, y = 0, texture, mood) {
    super(texture);
    this.x = x;
    this.y = y;
    this.mood = mood;
  }
  idle() {

  }
}

class Menu_Item extends PIXI.Sprite {
  constructor(x = 0, y = 0, texture, interactive, buttonMode) {
    super(texture);
    this.x = x;
    this.y = y;
    this.interactive = interactive
    this.buttonMode = buttonMode
  }
}

class Effect extends PIXI.Sprite {
  constructor(x = 0, y = 0, texture) {
    super(texture);
    this.x = x;
    this.y = y;
  }
}

window.onload = function() {
app = new PIXI.Application(
  {
    width: 500,
    height: 700,
    transparent: true
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
  //effects:
  .add("pizza", "pizza.png")
  //character:
  .add("yrgonaut_neutral", "yrgonaut_neutral.png")
  .add("yrgonaut_happy", "yrgonaut_happy.png")

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
  //create yrgonaut:
  create_Yrgonaut();
  //create effects
  create_effects();
  app.ticker.add(gameLoop);
}
function gameLoop(delta) {
}


function create_Menu() {
  eat_button = new Menu_Item(120, 283, app.loader.resources["fork_and_knife"].texture, true, true);
  sleep_button = new Menu_Item(190, 283, app.loader.resources["moon"].texture, true, true);
  computer_button = new Menu_Item(265, 285, app.loader.resources["computer"].texture, true, true);
  beer_button = new Menu_Item(330, 282, app.loader.resources["beer"].texture, true, true);
  legstretch_button = new Menu_Item(118, 462, app.loader.resources["legstretch"].texture, true, true);
  stack_overflow_button = new Menu_Item(185, 464, app.loader.resources["stack_overflow"].texture, true, true);
  app.stage.addChild(eat_button);
  eat_button.on('pointerdown', eat);
  app.stage.addChild(sleep_button);
  app.stage.addChild(computer_button);
  app.stage.addChild(beer_button);
  app.stage.addChild(legstretch_button);
  app.stage.addChild(stack_overflow_button);
}

function create_Yrgonaut() {
  yrgonaut = new Yrgonaut(235, 390, app.loader.resources["yrgonaut_neutral"].texture, "neutral");
  yrgonaut.anchor.set(0.5);
  app.stage.addChild(yrgonaut);
  //console.log(yrgonaut);
}

function create_effects() {

}


function eat() {
  let yrgonaut_happy = app.loader.resources["yrgonaut_happy"].texture;
  let yrgonaut_neutral = app.loader.resources["yrgonaut_neutral"].texture;
  pizza = new Effect(270, 350, app.loader.resources["pizza"].texture)
  app.stage.addChild(pizza);
    //  timeout = setTimeout(function(yrgonaut) {
    //   yrgonaut.texture = yrgonaut_neutral;
    // }, 3000, yrgonaut);

  let i = setInterval(function(){
    yrgonaut.texture = yrgonaut_happy;

    timeout = setTimeout(function(yrgonaut) {
        yrgonaut.texture = yrgonaut_neutral;
      }, 500, yrgonaut);
      counter++;
      if(counter === 4) {
        yrgonaut.texture = yrgonaut_neutral;
        pizza.destroy();
          clearInterval(i);
          counter = 0;
      }
  }, 1000);
  }


