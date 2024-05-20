export class Player {
  turn: boolean;
  points: number;
  constructor(public playerName: string) {
    this.turn = false, 
    this.points = 0;
  }
}
