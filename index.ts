import * as readline from "readline";
import { Drone, Direction, EnumDirectionStrings } from './drone';

const droneCreated = false;
let drone: Drone;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Lets create new drone? ', (answer: any) => {
    parseCommand(answer);

    askQuestion();
});

function askQuestion() {
    rl.question('What do you want to do? To quit enter \'exit\'.', (answer: any) => {
        if (answer === 'exit') {
            console.log(`Bye-bye...`);
            rl.close();
        }
        else {
            parseCommand(answer);
            askQuestion();
        }
    });
}

function validateAxis(str: any) {
    if (Number(str) >= 0 && Number(str) <= 5) {
        return true;
    }
    console.log(`${str} is bad value for axis`);
    return false;
}

function validateDirection(str: EnumDirectionStrings) {
    if ( Direction[str]!= undefined) {
        return true;
    }
    console.log(`${str} is bad direction`);
    return false;
}

function createDrone(array: string[]) {
    const optionsArray = array[1].split(",");
    if (validateAxis(optionsArray[0]) && validateAxis(optionsArray[1]) && validateAxis(optionsArray[2]) && validateDirection(optionsArray[3] as EnumDirectionStrings)) {
        drone = new Drone(Number(optionsArray[0]), Number(optionsArray[1]), Number(optionsArray[2]), optionsArray[3] as EnumDirectionStrings);
        console.log(`Drone was succesfully created with X:${optionsArray[0]}, Y:${optionsArray[1]}, Z:${optionsArray[2]}, F:${optionsArray[3]}`)
    }

}

function parseCommand(str: string) {
    const arr = str.split(' ');
    switch (arr[0].toUpperCase()) {
        case 'SPAWN': droneCreated ?
            console.log(`Drone already was created`) : createDrone(arr)
            break;
        case 'DOWN': drone.move('DOWN');
            break;
        case 'UP': drone.move('UP');
            break;
        case 'MOVE': drone.move('MOVE');
            break;
        case 'REPORT': drone.currentPosition();
            break;
        case 'LEFT': drone.changeDirection('LEFT');
            break;
        case 'RIGHT': drone.changeDirection('RIGHT');
            break;
        default:
            console.log(`Unknown command`);
    }

} 