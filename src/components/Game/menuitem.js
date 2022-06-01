import * as PIXI from 'pixi.js';
// import './game.js';

export default class MenuItem extends PIXI.Sprite {
  constructor(app, x = 0, y = 0, textureId, buttons) {
    super(app.loader.resources[textureId].texture);
    this.x = x;
    this.y = y;
    this.interactive = true;
    this.buttonMode = true;
    buttons.push(this);
  }
}
