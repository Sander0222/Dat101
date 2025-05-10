"use strict";
import lib2d from "../../common/libs/lib2d.mjs";

const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
const originXSlider = document.getElementById("originXSlider");
const angleSlider = document.getElementById("angleSlider");
const angleLabel = document.getElementById("angleLabel");
const radiusSlider = document.getElementById("radiusSlider");
const radiusLabel = document.getElementById("radiusLabel");
const animateAmplitude = document.getElementById("animateAmplitude");
const animateFrequency = document.getElementById("animateFrequency");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

const RAD = Math.PI / 180;
const DEG = 180 / Math.PI;
const PI2 = 2 * Math.PI;

const center = new lib2d.TPosition(parseInt(originXSlider.value), cvs.height / 2);

let hndAnimate = null;

class TUnitCircle extends lib2d.TPosition {
  #rad = 0;
  #circlePath = new Path2D();
  #radPath = new Path2D();
  #oppositePath = new Path2D();
  #adjacentPath = new Path2D();
  #radColor = "cyan";
  #circleColor = "black";
  #showCircle = true;
  #sineValue = 0;
  #radius = 0;
  constructor(aX, aY) {
    super(aX, aY);
    this.#radius = parseInt(radiusSlider.value);
    this.#createPath();
  }

  #createPath() {
    this.#circlePath = new Path2D();
    this.#oppositePath = new Path2D();
    this.#adjacentPath = new Path2D();
    if (this.#showCircle) {
      this.#circlePath.arc(this.x, this.y, this.#radius, 0, PI2);
    }
    this.#radPath = new Path2D();
    if (this.#rad != 0) {
      this.#radPath.moveTo(this.x, this.y);
      this.#radPath.lineTo(this.x + this.#radius, this.y - this.#sineValue);
      this.#oppositePath.moveTo(this.x + this.#radius, this.y);
      this.#oppositePath.lineTo(this.x+ this.#radius, this.y - this.#sineValue);
      this.#adjacentPath.moveTo(this.x, this.y - this.#sineValue);
      this.#adjacentPath.lineTo(this.x + this.#radius, this.y - this.#sineValue);
    }
  }

  draw() {
    const oldColor = ctx.strokeStyle;
    ctx.strokeStyle = this.#circleColor;
    ctx.stroke(this.#circlePath);
    ctx.strokeStyle = this.#radColor;
    ctx.stroke(this.#radPath);
    ctx.strokeStyle = oldColor;
    ctx.strokeStyle = "gray";
    ctx.stroke(this.#oppositePath);
    ctx.fillText(this.#sineValue.toFixed(0), this.x + this.#radius + 10, this.y - this.#sineValue / 2);
    ctx.stroke(this.#adjacentPath);
  }

  get position() {
    return new lib2d.TPosition(this.x, this.y);
  }

  set position(aPosition) {
    this.x = aPosition.x;
    this.y = aPosition.y;
    this.#createPath();
  }

  get angle() {
    return Math.round(this.#rad * DEG);
  }

  set angle(aDegree) {
    //Only whole degrees
    aDegree = Math.round(aDegree);
    this.#rad = aDegree * RAD;
    this.#sineValue = this.#radius * Math.sin(this.#rad);
    this.#createPath();
  }

  get radius() {
    return this.#radius;
  }

  set radius(aRadius) {
    this.#radius = aRadius;
    //Update the sine value
    this.#sineValue = this.#radius * Math.sin(this.#rad);
    this.#createPath();
  }

}

class TAxisHelper extends lib2d.TRectangle {
  #xPath = new Path2D();
  #yPath = new Path2D();
  #xColor = "red";
  #yColor = "blue";
  #origin = null;
  constructor(aX, aY, aWidth, aHeight, aOrigin) {
    super(aX, aY, aWidth, aHeight);
    this.#origin = aOrigin || new lib2d.TPosition(this.center.x, this.center.y);
    this.#createPath();
  }

  #createPath() {
    this.#xPath = new Path2D();
    this.#yPath = new Path2D();
    this.#xPath.moveTo(this.left, this.#origin.y);
    this.#xPath.lineTo(this.right, this.#origin.y);
    this.#yPath.moveTo(this.#origin.x, this.top);
    this.#yPath.lineTo(this.#origin.x, this.bottom);
  }

  draw() {
    const oldColor = ctx.strokeStyle;
    ctx.strokeStyle = this.#xColor;
    ctx.stroke(this.#xPath);
    ctx.strokeStyle = this.#yColor;
    ctx.stroke(this.#yPath);
    ctx.strokeStyle = oldColor;
  }

  get origin() {
    return this.#origin;
  }

  set origin(aPoint) {
    this.#origin = aPoint;
    this.#createPath();
  }
}

const unitCircle = new TUnitCircle(center.x, center.y);
unitCircle.angle = parseInt(angleSlider.value);

const axisHelper = new TAxisHelper(0, 0, cvs.width, cvs.height, unitCircle.clone());

function originXSliderChange() {
  center.x = parseInt(originXSlider.value);
  unitCircle.position = new lib2d.TPosition(center.x, center.y);
  axisHelper.origin = center.clone();
  draw();
}

function angleSliderChange() {
  unitCircle.angle = parseInt(angleSlider.value);
  angleLabel.innerText = `Angle: ${unitCircle.angle}°`;
  draw();
}

function radiusSliderChange() {
  unitCircle.radius = parseInt(radiusSlider.value);
  radiusLabel.innerText = `Radius: ${unitCircle.radius}`;
  draw();
}

function draw() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  unitCircle.draw();
  axisHelper.draw();
  requestAnimationFrame(draw);
}


function animate(){
  if(animateAmplitude.checked){
    unitCircle.angle++;
  }
}

function startAnimation(){
  hndAnimate = setInterval(animate, 1000 / 60);
} 

function stopAnimation(){
  clearInterval(hndAnimate);
}

originXSlider.addEventListener("input", originXSliderChange);
angleSlider.addEventListener("input", angleSliderChange);
radiusSlider.addEventListener("input", radiusSliderChange);
startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);


draw();
