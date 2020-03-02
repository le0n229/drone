export enum Axis {
    axisX,
    axisY,
    axisZ
}
export type axisEnumStrings = keyof typeof Axis;

export enum Direction {
    NORTH,
    WEST,
    SOUTH,
    EAST,
}
export type EnumDirectionStrings = keyof typeof Direction;


export class Room {
    axisX: number;
    axisY: number;
    axisZ: number;
    constructor(X: number = 5, Y: number = 5, Z: number = 5) {
        this.axisX = X;
        this.axisY = Y;
        this.axisZ = Z;
    }

    validateAxis(str: any) {
        if (Number(str) >= 0 && Number(str) <= 5) {
            return true;
        }
        console.log(`${str} is bad value for axis`);
        return false;
    }

    validateDirection(str: EnumDirectionStrings) {
        if (Direction[str] != undefined) {
            return true;
        }
        console.log(`${str} is bad direction`);
        return false;
    }

}