import * as readline from "readline";
// import {Drone} from './drone';

export class CLI {
    rl: any;
    constructor() {
        this.init;
    }
    init() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    start(){
        this.rl.question('Lets create new drone? ', (answer: any) => {
            
            console.log(`Drone created: ${answer}`);
            this.askQuestion();
        });
    }

    askQuestion() {
        this.rl.question('What do you want to do? To quit enter \'exit\'.', (answer: any) => {
            
            console.log(`Drone created: ${answer}`);
            if (answer === 'exit') { this.rl.close(); }
            else {
                this.askQuestion();
            }
        });
    }

}