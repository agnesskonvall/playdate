import './style.css';
import * as PIXI from "pixi.js";
const appDiv = document.getElementById('app');
let app = new PIXI.Application({ width: 500, height: 700, backgroundColor: 0xffffff});
appDiv.appendChild(app.view);

let background = PIXI.Sprite.from("/sprites/yrgotchi_base.png");
//height på sprite bilden ska vara 120px
let yrgonaut_neutral = PIXI.Sprite.from("/sprites/yrgonaut_neutral.png")

app.stage.addChild(background);
let yrgonaut = yrgonaut_neutral;

app.stage.addChild(yrgonaut);
yrgonaut.x = 208;
yrgonaut.y = 335;






// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
// });
