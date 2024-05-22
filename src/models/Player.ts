export class Player {
  turn: boolean;
  points: number;

  constructor(public playerName: string, public id:number) {
    this.turn = false, 
    this.points = 0
  }
}
