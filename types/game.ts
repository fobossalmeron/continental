export interface Player {
  id: string;
  name: string;
}

export interface Round {
  id: string;
  scores: { [playerId: string]: number };
}

export interface GameState {
  players: Player[];
  rounds: Round[];
}