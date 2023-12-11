m"use client" 

import Sketch from "react-p5"
import P5 from 'p5';
import { Row } from "./Row";

export default function RandomChars(p5: any) {

let rows: any[] = [];
let rowsCount = 30;
let charSpacing = 8;
let rowHeight = 15;
let speed = 0;
let charsInRow:[] = [];
let chars = ["0", "x", "0", "a", "f", "5", "3"];
let lastUpdateTime = 0;  // To store the last time the characters were updated
let updateInterval = 300; 
  
function setup(p5: P5) {
  p5.createCanvas(700, 400);
  p5.textFont("monospace");
  p5.textSize(10);

  // check here
  for (let i = 0; i < rowsCount; i++) {
    rows.push(new Row(i * rowHeight, p5, charsInRow, charSpacing, speed, chars));
  }
}


function draw(p5:any) {
  p5.background(0);

  p5.background(0);
  p5.fill(255);

  // Check if 2 seconds have passed
  if (p5.millis() - lastUpdateTime > updateInterval) {
    updateChars(p5);
    lastUpdateTime = p5.millis();
  }
  
  for (let r of rows) {
    r.update();
    r.display();
  }
}

function updateChars(p5:any) {
  for (let i = 0; i < chars.length; i++) {
    // get a random number between 48 and 91, the index of number 0 to 9 and A to F in ascii order
    chars[i] = String.fromCharCode(p5.floor(p5.random(48, 91)));
    // Skip non-alphanumeric characters
    if (chars[i] > '9' && chars[i] < 'F') {
      i--;
    }
  }
  
  // Now, we need to update all rows to reflect the changed characters
  for (let r of rows) {
    r.updateCharsInRow();
  }
}


  return (
    <div className="border-2 border-gray-600">
      <Sketch setup={setup} draw={draw} />
    </div>
  )
}
