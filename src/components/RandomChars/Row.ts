import p5 from 'p5';

export class Row {

  _p5: p5;
  _y: number;
  _charsInRow: string[];
  _speed: number;
  _chars: string[];

  constructor(y:number, p5:p5, charsInRow: string[], charSpacing: number, speed: number, chars: string[]) {
    this._y = y;
    this._charsInRow = charsInRow;
    this._p5 = p5;
    this._speed = speed;
    this._chars = chars;
    console.log('charsInRow', charsInRow);
    console.log('chars', chars);
    console.log('rand', this._p5.random(chars));

    // number of chars in a row is determined by x (width) / charSpacing
      for (let x = 0; x < 50; x += charSpacing) {
        // don't write the chars twice
        //@ts-ignore
        this._charsInRow.push(this._p5.random(chars));
      }
    }
  
  update(chars: string[]) {
    this._y += this._speed;
    // if populated to reaches the Y-height, reset to the top.
    if (this._y > this._p5.height) {
      this._y = 0;
      this.updateCharsInRow(chars);
    }
  }
  
  display(charSpacing: number) {
    // let x = offset; // start from the calculated offset
    let x1 = 10;
    let x2 = 80;
    for (let i = 0; i < this._charsInRow.length; i++) {
      this._p5.text(this._charsInRow[i], x1, this._y);
      x1 += charSpacing;
    }
  }
  
  updateCharsInRow(chars: string[]) {
    for (let i = 0; i < this._charsInRow.length; i++) {
      //@ts-ignore
      this._charsInRow[i] = this._p5.random(chars);
    }
  }
}