import './style.css';
import * as PIXI from "pixi.js";
const appDiv = document.getElementById('app');
let app = new PIXI.Application({ width: 500, height: 700, backgroundColor: 0xffffff});
appDiv.appendChild(app.view);

let sprite = PIXI.Sprite.from("/sprites/yrgotchi_base.png");

app.stage.addChild(sprite);

// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
// });
