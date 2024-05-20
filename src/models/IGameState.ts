import { Player } from "./Player";

export interface IGameState{
    players: Player[],
    // pointHistory: number,
    showHistory: boolean
}