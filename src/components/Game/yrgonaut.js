import * as PIXI from 'pixi.js';
import './game.js';

export default class Yrgonaut extends PIXI.AnimatedSprite {
  constructor(app, animationId, x, y, animationSpeed, anchor, loop) {
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
