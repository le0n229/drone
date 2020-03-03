import * as readline from "readline";
import { Room, EnumDirectionStrings } from './room';
import { Drone } from './drone';

const room = new Room();
let droneCreated = false;
let drone: Drone;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

firstQuestion();

function firstQuestion() {
    rl.question('Lets create new drone? ', (answer: string) => {
        parseCommand(answer);
        if (droneCreated) {
            askQuestion();
        } else {
            firstQuestion();
        }
    });
}

function askQuestion() {
    rl.question('What do you want to do? To quit enter \'exit\'.', (answer: string) => {
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


function createDrone(array: string[]) {
    const optionsArray = array[1].split(",");
    if (room.validateAxis(optionsArray[0]) && room.validateAxis(optionsArray[1]) && room.validateAxis(optionsArray[2]) && room.validateDirection(optionsArray[3] as EnumDirectionStrings)) {
        drone = new Drone(Number(optionsArray[0]), Number(optionsArray[1]), Number(optionsArray[2]), optionsArray[3] as EnumDirectionStrings, room);
        console.log(`Drone was succesfully created with X:${optionsArray[0]}, Y:${optionsArray[1]}, Z:${optionsArray[2]}, F:${optionsArray[3]}`)
        droneCreated = true;
    }
}

function parseCommand(str: string) {
    const arr = str.split(' ');
    switch (arr[0].toUpperCase()) {
        case 'SPAWN': droneCreated ?
            console.log(`Drone was already created`) : createDrone(arr)
            break;
        case 'DOWN': drone.move('DOWN');
            break;
        case 'UP': drone.move('UP');
            break;
        case 'MOVE': drone.move('MOVE');
            break;
        case 'REPORT': drone.reportPosition();
            break;
        case 'LEFT': drone.changeDirection('LEFT');
            break;
        case 'RIGHT': drone.changeDirection('RIGHT');
            break;
        default:
            console.log('Unknown command');
    }

} 