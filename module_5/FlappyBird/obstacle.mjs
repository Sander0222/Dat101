"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSpriteflappy from "../../common/libs/libSpriteflappy.mjs";

class TObstacle {
  #upper;
  #lower;
  #spi;
  constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
    this.#spi = aSpriteInfo;
    const pos = new lib2d.TPosition(400, -100);
    this.#upper = new libSpriteflappy.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#upper.index = 3;

    pos.y = 350;
    this.#lower = new libSpriteflappy.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#lower.index = 2;
  }

  draw() {
    this.#upper.draw();
    this.#lower.draw();
  }

  update() {
    this.#upper.translate(-1, 0);
    this.#lower.translate(-1, 0);
  }
  get posX() {
    return this.#upper.posX;
  }
}

export default TObstacle;
