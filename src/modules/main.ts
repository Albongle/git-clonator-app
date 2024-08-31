import minimist from 'minimist';
import { FileManager } from './file-manager';
import { GitClonator } from './git-clonator';
import Logger from './logger';

export class Program {
    public main(...args) {
        const options = {
            default: { file: './repositorios.txt', output: './repositorio_clonados' },
            alias: { f: 'file', o: 'output' },
        };

        const { file, output } = minimist(args, options);
        const fileManager = new FileManager(file, output);
        const gitClonator = new GitClonator(fileManager);

        gitClonator.cloneListOfRespoitories();
    }
}

process.on('uncaughtException', (error) => {
    Logger.log(`Se detiene la ejecucion`);
});
