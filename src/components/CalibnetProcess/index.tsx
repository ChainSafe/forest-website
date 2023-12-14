"use client"

import React, { useRef, useEffect } from "react";
import { type Sketch } from "@p5-wrapper/react";
import terminalText from "./logs";
import p5 from "p5";

export default function CalibnetProcess() {
  const parentRef = useRef<HTMLDivElement>(null);

  // eww i had to put everything in a useEffect to make animation responsive :(
  useEffect(() => {
    
    let myp5: p5;

    const sketch: Sketch = (p5) => {
      // vars related to typing the command:
      let command = "forest --chain calibnet";
      let typedText = "";
      let cursorBlink = true;
      let cursorPosition = 0;
      let typingSpeed = 80; // Milliseconds between each character
      let lastTypedTime = 0;

      // vars related to restarting animation
      let startTime = 0;
      let delayStartTime = 0; // New variable to track the start time for the delay
      let isDelayCompleted = false; // 

      // vars related to printing output
      let duration = 128116;
      let displayLines:string[] = [];
      let currentLine = 0;
      let frameCounter = 0;
      let maxDisplayLines = 10;
      let nextTime = 30;
      let currentTime = new Date("1970-01-01 " + terminalText[0].split(" ", 1)[0]).getTime();

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

      function drawCommand(p5: p5) {
        if (p5.millis() - lastTypedTime > typingSpeed && cursorPosition < command.length) {
          typedText += command.charAt(cursorPosition);
          cursorPosition++;
          lastTypedTime = p5.millis();
        }
        p5.text(typedText, 10, 30);
        drawCursor(p5);
      }

      function restart(p5:p5) {
        // Reset vars for typing command
        typedText = "";
        cursorPosition = 0;
        cursorBlink = true;

        // Reset vars for printing logs
        displayLines = [];
        currentLine = 0;
        frameCounter = 0;
        startTime = p5.millis(); // Resetting start time for next loop
        delayStartTime = p5.millis(); // Resetting the delay start time

        isDelayCompleted = false;
      }

      function printLogs(p5:p5) {
        // Increment frameCounter and check if it's time to move to the next line
        frameCounter++;
        // print a new line every 30 frames
        if (frameCounter > nextTime) {

        // If there's a new line in terminalText, push it to displayLines
        if (currentLine < terminalText.length) {
          displayLines.push(terminalText[currentLine]);
        }

        // If there is a next linen after this, parse time diff from the logs
        if (currentLine < terminalText.length - 1) {
          let logTime = new Date("1970-01-01 " + terminalText[currentLine + 1].split(" ", 1)[0]).getTime();
          nextTime = (logTime - currentTime) / 30;
          currentTime = logTime;
        }

        // If displayLines exceed maxDisplayLines, remove the first line
        if (displayLines.length > maxDisplayLines) {
          displayLines.shift();
        }

        frameCounter = 0;
        currentLine++;
      }

      // Display the lines in `displayLines`
        for (let i = 0; i < displayLines.length; i++) {
          let line = displayLines[i];

          p5.text(line, 10, 60 + i * 20);
        }
    }


    p5.setup = () => {
      // Ensure the parent element is available
      if (parentRef.current) {
        const parentWidth = parentRef.current.clientWidth;
        const canvas = p5.createCanvas(parentWidth, 270);
        // Use the current DOM element for parenting the canvas
        parentRef.current.appendChild(canvas.elt);
      }
      p5.textFont("monospace");
      p5.textSize(11);
      p5.fill(255);
    };

    p5.draw = () => {
      // log current time
      let currentTime = p5.millis();

      // this kind of works like a % fn: reset all variables if a lap has been run.
      if (currentTime - startTime > duration) {
        restart(p5);
      }

      // first, mock up a user typing out command
      p5.background("#171717");
      drawCommand(p5);

      // next, print logs 2 seconds after command is typed
      if (!isDelayCompleted) {
        if (currentTime - delayStartTime > 2000) {
          isDelayCompleted = true;
        }
      } else {
        printLogs(p5);
      }
    };

    p5.windowResized = () => {
      if (parentRef.current) {
        const parentWidth = parentRef.current.clientWidth;
        p5.resizeCanvas(parentWidth, 270);
      }
    }
  }; 
  
  // only render the sketch if parent element is in the DOM
  if (parentRef.current) {
      myp5 = new p5(sketch);
  }
    
  return () => {
    myp5.remove();
  }
}, [])
  
  return (<div ref={parentRef}></div>);
}