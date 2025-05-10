"use strict";
//lag en classe med navn TScoreBoard
//Klassen har tre sprites, 
// - Øvre venstre hjørne (antall miner). TSpriteNumber
// - Øvre høyre hjørne (Tid). TSpriteNumber
// - Øvre midten (Smiley). TSpriteButton
// konstruktøren parameter er : aSpriteCanvas, 
// klassen trenger en draw metode som tegner alle sprites

import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList, gameLevel } from "./Minesweeper.mjs";
export class TScoreBoard {
  #spMines;
  #spTime;
  #spSmiley;
    constructor(aSpriteCanvas){
     const pos = new lib2d.TPoint(112, 22);
     this.#spMines = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, pos);
     this.#spMines.justify = libSprite.ESpriteNumberJustifyType.Right;
     this.#spMines.digits = 3;
     this.#spMines.value = gameLevel.Mines;
        pos.x = aSpriteCanvas.canvas.width - 70; 
        this.#spTime = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, pos);
        this.#spTime.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#spTime.digits = 3;
        this.#spTime.value = 0; 
    }
     draw(){
    this.#spMines.draw();
    this.#spTime.draw();
    
  }
}




