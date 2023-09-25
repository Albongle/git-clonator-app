import { Program } from './modules/main';


function run() {
    const program = new Program();
    program.main(process.argv);
}

run();
