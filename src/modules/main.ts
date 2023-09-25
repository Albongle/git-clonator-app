import * as minimist from 'minimist';
import { FileManager } from './file-manager';
import { GitClonator } from './git-clonator';
import logger from './logger';

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
    logger.getLogger().info(`Se detiene la ejecucion`);
});
