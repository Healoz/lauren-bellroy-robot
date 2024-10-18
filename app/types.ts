export interface GridCell {
  x: number;
  y: number;
}

export interface Robot {
  position: GridCell;
  direction: Direction;
}

export enum Direction {
  N = "N",
  E = "E",
  S = "S",
  W = "W"
}
