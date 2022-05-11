import './style.css';
import * as PIXI from "pixi.js";
const appDiv = document.getElementById('app');
let app = new PIXI.Application({ width: 500, height: 700, backgroundColor: 0xffffff});
appDiv.appendChild(app.view);

let background = PIXI.Sprite.from("/sprites/yrgotchi_base.png");

//height på sprite bilden ska vara 120px
let yrgonaut_neutral = PIXI.Sprite.from("/sprites/yrgonaut_neutral.png")

let beer_button = PIXI.Sprite.from("/sprites/beermug.png");
let computer_button = PIXI.Sprite.from("/sprites/computer_button.png");
let food_button = PIXI.Sprite.from("/sprites/forkandknife.png");
let sleep_button = PIXI.Sprite.from("/sprites/moon.png");

app.stage.addChild(background);
let yrgonaut = yrgonaut_neutral;

app.stage.addChild(yrgonaut);

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






// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
// });
