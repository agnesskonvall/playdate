import './style.css';
import * as PIXI from "pixi.js";
import { Renderer } from 'pixi.js';
const appDiv = document.getElementById('app');
window.onload = function () {
let app = new PIXI.Application({ width: 500, height: 700, backgroundColor: 0xffffff});
appDiv.appendChild(app.view);

let background = PIXI.Sprite.from("/sprites/yrgotchi_base.png");

//height på sprite bilden ska vara 120px
let yrgonaut_neutral = PIXI.Texture.from("/sprites/yrgonaut_neutral.png");
let yrgonaut_happy = PIXI.Texture.from("/sprites/yrgonaut_happy.png")

let beer_button = PIXI.Sprite.from("/sprites/beermug.png");
let computer_button = PIXI.Sprite.from("/sprites/computer_button.png");
let food_button = PIXI.Sprite.from("/sprites/forkandknife.png");
let sleep_button = PIXI.Sprite.from("/sprites/moon.png");
let stretch_button = PIXI.Sprite.from("/sprites/legstretch.png");
let stack_button = PIXI.Sprite.from("/sprites/stack_overflow.png");
let pizza = PIXI.Sprite.from("/sprites/pizza.png");

app.stage.addChild(background);
let yrgonaut = new PIXI.Sprite(yrgonaut_neutral);

app.stage.addChild(background);
app.stage.addChild(computer_button);
app.stage.addChild(sleep_button)
app.stage.addChild(food_button);
app.stage.addChild(beer_button);

yrgonaut.x = 208;
yrgonaut.y = 335;

beer_button.x = 330;
beer_button.y = 282;

computer_button.x = 265;
computer_button.y = 285;

food_button.x = 120;
food_button.y = 282;

sleep_button.x = 190;
sleep_button.y = 282;

stretch_button.x = 118;
stretch_button.y = 462;

stack_button.x = 185;
stack_button.y = 464;

pizza.x = 270;
pizza.y = 350;


food_button.interactive = true;
food_button.buttonMode = true;
//pointerdown fungerar för både mus och touch
food_button.on('pointerdown', eat);
// food_button.on('mouseup', onButtonUp);


app.stage.addChild(background);
app.stage.addChild(stack_button);
app.stage.addChild(computer_button);
app.stage.addChild(stretch_button);
app.stage.addChild(sleep_button)
app.stage.addChild(food_button);
app.stage.addChild(beer_button);
app.stage.addChild(yrgonaut);
app.stage.addChild(pizza);
pizza.visible=false;

let timeout;
let counter = 0;

 function eat() {
  pizza.visible=true;
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
      pizza.visible=false;
        clearInterval(i);
        counter = 0;
    }
}, 1000);

 }

//  function onButtonUp() {
//    timeout = setTimeout(function(yrgonaut) {
//      yrgonaut.texture = yrgonaut_neutral;
//    }, 3000, yrgonaut);
//  }



// function feed() {
//   yrgonaut.setTexture(yrgonaut_happy);
// }




}
// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
// });
