import './style.css';
import * as PIXI from "pixi.js";
const appDiv = document.getElementById('app');
let app = new PIXI.Application({ width: 500, height: 700, backgroundColor: 0xffffff});
appDiv.appendChild(app.view);

let background = PIXI.Sprite.from("/sprites/yrgotchi_base.png");
let yrgonaut_neutral = PIXI.Sprite.from("/sprites/yrgonaut_neutral.png");
let beer_button = PIXI.Sprite.from("/sprites/beermug.png");
let computer_button = PIXI.Sprite.from("/sprites/computer_button.png");
let food_button = PIXI.Sprite.from("/sprites/forkandknife.png");
let sleep_button = PIXI.Sprite.from("/sprites/moon.png");

beer_button.x = 150;
beer_button.y = 150;

app.stage.addChild(background);
let sprite = yrgonaut_neutral;

app.stage.addChild(beer_button);

app.stage.addChild(sprite);





// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
// });
