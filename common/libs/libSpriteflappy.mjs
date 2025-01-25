"use strict";
import lib2d from "./lib2d.mjs";
/**
 * @library libSprite
 * @description A library for classes that manage sprite animations.
 */

class TSpriteCanvas {
  #cvs;
  #ctx;
  #img;

  constructor(aCanvas) {
    this.#cvs = aCanvas;
    this.#ctx = aCanvas.getContext("2d");
    this.#img = new Image();
  }

  loadSpriteSheet(aFileName, aLoadedFinal) {
    this.#img.onload = aLoadedFinal;
    this.#img.src = aFileName;
  }

  drawSprite(aSpriteInfo, aDx = 0, aDy = 0, aIndex = 0) {
    let index = aIndex;
    const sx = aSpriteInfo.x + index * aSpriteInfo.width;
    const sy = aSpriteInfo.y;
    const sw = aSpriteInfo.width;
    const sh = aSpriteInfo.height;
    const dx = aDx;
    const dy = aDy;
    const dw = sw;
    const dh = sh;
    this.#ctx.drawImage(this.#img, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  clearCanvas() {
    this.#ctx.clearRect(0, 0, this.#cvs.width, this.#cvs.height);
  }
} // End of TSpriteCanvas class

/* 
 Lag en klasse TSprite med en konstruktør som tar inn et TSpriteCanvas-objekt og et spriteInfo-objekt.
*/

class TSprite {
  // spcvs, spi
  #spcvs;
  #spi;
  #pos;
  #index;
  #speedIndex;

  constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
    this.#spcvs = aSpriteCanvas;
    this.#spi = aSpriteInfo;
    this.#pos = aPosition.clone(); // vi trenger en kopi av posisjon
    this.#index = 0;
    this.#speedIndex = 0.0;
    this.animateSpeed = 0;
  }
  draw() {
    if (this.animateSpeed > 0) {
      this.#speedIndex += this.animateSpeed / 100;
      if (this.#speedIndex >= 1) {
        this.#index++;
        this.#speedIndex = 0;
        if (this.#index >= this.#spi.count) {
          this.#index = 0;
        }
      }
    }
    this.#spcvs.drawSprite(this.#spi, this.#pos.x, this.#pos.y, this.#index);
  }


  translate(aDx, aDy) {
    this.#pos.x += aDx;
    this.#pos.y += aDy;
  }
  get posX() {
    return this.#pos.x;
  }
  get posY() {
    return this.#pos.y;
  }
  set posX(aX) {
    return (this.#pos.x = aX);
  }
  set posY(aY) {
    return (this.#pos.y = aY);
  }
  setPos(aX, aY) {
    this.#pos.x = aX;
    this.#pos.y = aY;
  }
  set index(aIndex) {
    this.#index = aIndex;
  }
} //End of TSprite class

export default {
  /**
   * @class TSpriteCanvas
   * @description A class that manage sprite canvas for lading sprite sheets.
   * @param {HTMLCanvasElement} aCanvas - The canvas element to use.
   * @function loadSpriteSheet - Loads a sprite sheet image.
   * @param {string} aFileName - The file name of the sprite sheet image.
   * @param {function} aLoadedFinal - A callback function to call when the image is done loading.
   */
  TSpriteCanvas: TSpriteCanvas,

  /**
   * @class TSprite
   * @description A class that manage sprite animations.
   * @param {TSpriteCanvas} aSpriteCanvas - The sprite canvas to use.
   * @param {object} aSpriteInfo - The sprite information.
   * @param {TPosition} aPosition - The position of the sprite.
   * @function draw - Draws the sprite on the canvas.
   */
  TSprite: TSprite,
};
