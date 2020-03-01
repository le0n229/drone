import { Room } from './room';

enum axisEnum {
  axisX,
  axisY,
  axisZ
}
type axisEnumStrings = keyof typeof axisEnum;

export enum Direction {
  NORTH,
  WEST,
  SOUTH,
  EAST,
}
export type EnumDirectionStrings = keyof typeof Direction;



export class Drone {
  axisX: number;
  axisY: number;
  axisZ: number;
  face: Direction;
  room: Room;


  constructor(X: number, Y: number, Z: number, F: EnumDirectionStrings) {
    this.axisX = X;
    this.axisY = Y;
    this.axisZ = Z;
    this.face = Direction[F];
    this.room = new Room();
  }


  checklimits(axis: axisEnumStrings, grow: boolean = true) {
    if (grow) {
      this.room[axis] > this[axis] ?
        this[axis]++ : console.log(`You already have maximum ${axis}: ${this[axis]}.`);
    } else {
      0 < this[axis] ?
        this[axis]++ : console.log(`You already have minimum ${axis}: ${this[axis]}.`);
    }
  }


  changeDirection(direction: string) {
    switch (direction) {
      case 'LEFT':
        this.face = this.face === Direction.EAST ? Direction.NORTH : this.face+1;
        break;
      case 'RIGHT':
        this.face = this.face === Direction.NORTH ? Direction.EAST : this.face-1;
        break;
      default:
        console.log(`Unknown direction: ${direction}.`);

    }
  }

  moveXY() {
    switch (this.face) {
      case Direction.NORTH:
        this.checklimits("axisY");
        break;
      case Direction.SOUTH:
        this.checklimits("axisY", false);
        break;
      case Direction.EAST:
        this.checklimits("axisX");
        break;
      case Direction.WEST:
        this.checklimits("axisX", false);
        break;
      default:
        console.log(`Unknown direction to move: ${Direction[this.face]}.`);
    }
  }

  currentPosition() {
    console.log(`axisX:${this.axisX}, axisY:${this.axisY}, axisZ:${this.axisZ}, face:${Direction[this.face]}`)
    return {
      axisX: this.axisX,
      axisY: this.axisY,
      axisZ: this.axisZ,
      face: Direction[this.face]
    };
  }

  move(command: string) {
    switch (command) {
      case "UP":
        this.room.axisZ > this.axisZ ?
          this.axisZ++ : console.log(`You already have maximum height: ${this.axisZ}.`);
        break;
      case "DOWN":
        0 < this.axisZ ?
          this.axisZ-- : console.log(`You already have minimum height: ${this.axisZ}.`);
        break;
      case "MOVE":
        this.moveXY();
        break;
      default:
        console.log(`Unknown command: ${command}.`);
    }


  }

}
