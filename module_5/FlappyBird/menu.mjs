"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus, StartGame } from "./FlappyBird.mjs";

export class TMenu{
  #spFlappyBird;
  #spButtonPlay;
  #spcvs;
  #activeSprite;
  #spInfoText;
  #spGameOver;
  #spMedal;
  #posScore;
  #posBestScore;
  #spNumber;
  #posPlayScore;
  #ranking = {first: 0, second: 0, third: 0};

  constructor(aSpriteCanvas){
    this.#spcvs = aSpriteCanvas;
    const pos = new lib2d.TPosition(200, 100);

    this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);
    pos.y = 260;
    pos.x = 245;

    this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay,pos);
    pos.x = 200;
    pos.y = 70;

    this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText,pos);
    pos.x = 285;
    pos.y = 180;

    this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig,pos);
    this.#spNumber.index = 3; //nedtelling starter på 3

    pos.x = 185;
    pos.y = 130;
    this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver,pos);

    pos.x = 211;
    pos.y = 173;
    this.#spMedal = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.medal,pos);

    this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
    this.#spcvs.addEventListener("click", this.#onClick);
    this.#activeSprite = null; 

    this.#posScore = new lib2d.TPosition(390,183);
    this.#posBestScore = new lib2d.TPosition(390,225); //test verdiene, dette er midlertidig

    this.#posPlayScore = new lib2d.TPosition(75,50);
  }

  draw(){
    switch (GameProps.status) {
      case EGameStatus.idle:
        this.#spFlappyBird.draw();
        this.#spButtonPlay.draw();
        break;
      case EGameStatus.getReady:
        this.#spInfoText.index = 0;
        this.#spInfoText.draw();
        this.#spNumber.draw();
        break;
      case EGameStatus.gameOver:
        this.#spInfoText.index = 1;
        this.#spInfoText.draw();
        this.#spGameOver.draw();
        this.#spButtonPlay.draw();
        this.#spMedal.draw();
        this.#spcvs.drawText(GameProps.score.toString(), this.#posScore);
        this.#spcvs.drawText(GameProps.bestScore.toString(), this.#posBestScore);
        break;
      case EGameStatus.playing:
        this.#spcvs.drawText(GameProps.score.toString(), this.#posPlayScore);
        break;
    }
  }
  incScore(aScore){
    GameProps.score += aScore;
    if(GameProps.score > this.#ranking.first){
      this.#ranking.third = this.#ranking.second;
      this.#ranking.second = this.#ranking.first;
      this.#ranking.first = GameProps.score;
      GameProps.bestScore = this.#ranking.first;

    }else if(GameProps.score > this.#ranking.second){
      this.#ranking.third = this.#ranking.second;
      this.#ranking.second = GameProps.score;

    }else if(GameProps.score > this.#ranking.third){
      this.#ranking.third = GameProps.score;
      this.#spMedal.index = 3;

    } else{
      this.#spMedal.index = 0;
    }
  }

  reset(){
    GameProps.score = 0;
    this.#spNumber.index = 3;
    this.#spInfoText.index = 0;
  }

  #onMouseMove = (aEvent) => {
    const pos = this.#spcvs.getMousePos(aEvent); 
    const boundRect = this.#spButtonPlay.boundingBox;
    switch(GameProps.status){
      case EGameStatus.idle:
    if(boundRect.isPositionInside(pos)){
      this.#spcvs.style.cursor = "pointer";
      this.#activeSprite = this.#spButtonPlay;
    }else{
      this.#spcvs.style.cursor = "default";
      this.#activeSprite = null; //Ingen sprite er aktiv
    }
    break;
  }
  };

  #onClick = () =>{
    if (this.#activeSprite === this.#spButtonPlay) {
      GameProps.status = EGameStatus.getReady;
      this.#spcvs.style.cursor = "default";
      setTimeout(this.#onCountDown, 1000);
    }
  };

  
   #onCountDown = () =>{
    if(this.#spNumber.index > 1){
      this.#spNumber.index--;      
      setTimeout(this.#onCountDown, 1000);
    }else{
      StartGame();
    }
   }
}