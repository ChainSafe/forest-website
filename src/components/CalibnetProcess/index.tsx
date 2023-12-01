"use client" 

import Sketch from "react-p5"
import terminalText from "./logs";

export default function CalibnetProcess() {

  let canvas: HTMLCanvasElement = document.createElement('canvas');
  let displayLines: string[] = [];
  let currentLine = 0;
  let frameCounter = 0;
  let maxDisplayLines:number;

  let command = "forest --chain calibnet"; 
  let typedText = "";
  let cursorBlink = true;
  let cursorPosition = 0;
  let typingSpeed = 80; // Milliseconds between each character
  let lastTypedTime = 0;
  let duration = 30000;
  let resetTime = 0;

function setup(p5: any, parent: Element) {
  p5.createCanvas(800, 300).parent(parent);
  p5.background(0);
  p5.textFont("monospace");
  p5.textSize(11);
  p5.fill(255);
  // defines how many lines will be printed before scrolling.
  maxDisplayLines = 10;
}


function draw(p5:any) {
  p5.background(0);
  drawTypingText(p5);
  drawCursor(p5); 
  if (p5.millis() > 2000) {
    printLogs(p5); 
  }
  
  if (p5.millis() > resetTime + duration) {
    restartAnimation(p5);
  }
}

function drawTypingText(p5:any) {
  if (p5.millis() - lastTypedTime > typingSpeed && cursorPosition < command.length) {
    typedText += command.charAt(cursorPosition);
    cursorPosition++;
    lastTypedTime = p5.millis();
  }
  p5.text(typedText, 10, 30);
}

function drawCursor(p5: any) {
  if (p5.frameCount % 30 === 0) { // Blinking effect every second
    cursorBlink = !cursorBlink;
  }
  // don't show cursor after typing command
  if (p5.millis() > 2000) {
    cursorBlink = false;
    p5.stroke(0);
  }

  if (cursorBlink) {
    let cursorX = p5.textWidth(typedText) + 12;
    p5.stroke(255);
    p5.line(cursorX, 15, cursorX, 35);
  }
}

function printLogs(p5:any) {
  // Increment frameCounter and check if it's time to move to the next line
  frameCounter++;
  // print a new line every 30 frames
  if (frameCounter > 30) {
    frameCounter = 0;
    currentLine++;

    // If there's a new line in terminalText, push it to displayLines
    if (currentLine < terminalText.length) {
      displayLines.push(terminalText[currentLine - 1]);
    }
    
    // If displayLines exceed maxDisplayLines, remove the first line
    if (displayLines.length > maxDisplayLines) {
      displayLines.shift();
    }
  }
  
  // Display the lines in `displayLines`
    for (let i = 0; i < displayLines.length; i++) {
      let line = displayLines[i];

      p5.text(line, 10, 60 + i * 20);
    }
 }

function restartAnimation(p5:any) {
  resetTime = p5.millis();
  p5.frameCount = 0;
  lastTypedTime = 0;
  displayLines = [];
}
  return (
    <div className="border-2 border-gray-600 flex items-center">
      <Sketch setup={setup} draw={draw} />
    </div>
  )
}
