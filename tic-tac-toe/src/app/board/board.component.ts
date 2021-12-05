import { Component, OnInit } from '@angular/core';
//import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { 
    this.squares = [];
    this.xIsNext = true;
    this.winner = "";
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    console.log("making move" + " at " + idx + " Player " +  this.squares[idx]);
    if(!this.squares[idx]){
      //this.squares.splice(idx, 1, this.player);
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner()
  }

  calculateWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(
        this.squares[a] == this.squares[b] &&
        this.squares[b] == this.squares[c]
      ) {
        console.log("WINNER FOUND!")
        return this.squares[a];
      }
    }
    console.log("no one wins yet :(")
      return null;
  }
}
