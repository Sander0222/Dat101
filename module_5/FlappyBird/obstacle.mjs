"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
import lib2d from "../../common/libs/lib2d.mjs";
import { GameProps } from "./FlappyBird.mjs";

class TObstacle {
  #upper;
  #lower;
  #spi;
  constructor(aSpriteCanvas, aSpriteInfo) {
    this.#spi = aSpriteInfo;
    const minTop = -320 + 25;
    let top = Math.floor(Math.random() * minTop);
    let pos = new lib2d.TPosition(650, top);
    this.#upper = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#upper.index = GameProps.dayTime ? 3 : 1; // her
    const groundY = GameProps.ground.posY;
    top += this.#spi.height + 150;
    const gap = top - groundY - 25;

    top = Math.floor(Math.random() * gap) + groundY -25;
    pos.y = top;
    this.#lower = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#lower.index = GameProps.dayTime ? 2 : 0;
    this.hasPassed = false; //implisit vi vet ikke hva vi har gjort. javascript gjetter. ekslusivt gjør at vi setter noe til Eksamen!!
  }

  draw(){
    this.#upper.draw();
    this.#lower.draw();
  }

  update(){

    this.#upper.translate(-1, 0);
    this.#lower.translate(-1, 0);

    const hasCollided = 
    GameProps.hero.hasCollided(this.#upper) || 
    GameProps.hero.hasCollided(this.#lower);
   // console.log(hasCollided)

    if(hasCollided){
      GameProps.hero.flap();
      GameProps.hero.isDead = true;
    }
  }
  get right(){
    return this.#upper.right;
}
  get left(){
    return this.#upper.left;
}
  get posX(){
    return this.#upper.posX;
  }
}

export default TObstacle;