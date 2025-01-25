"use strict";
import libSprite from "../../common/libs/libSpriteflappy.mjs";
import { GameProps } from "./FlappyBird.mjs";

class THero extends libSprite.TSprite {
  #spi;
  #gravity;
  #velocity;
  constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
    super(aSpriteCanvas, aSpriteInfo, aPosition);
    this.animateSpeed = 60;
    this.#gravity = 9.81 / 100;
    this.#velocity = 0;
    this.#spi = aSpriteInfo;
  }
  draw() {
    super.draw();
    //this.#spi = aSpriteInfo;
  }
  update() {
    const hitGround = GameProps.ground.posY;
    const bottomY = this.posY + this.#spi.height;
    if (bottomY < hitGround) {
      if (this.posY < 0) {
        this.posY = 0;
        this.#velocity = 0;
      }
      this.translate(0, this.#velocity);
      this.#velocity += this.#gravity;
    } else {
      this.posY = hitGround - this.#spi.height;
    }
  }

  flap() {
    this.#velocity = -3;
  }
}
export default THero;
