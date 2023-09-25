import { FileManager } from './file-manager';
import Logger from './logger';
import { exec } from 'child_process';

export class GitClonator {
    private fileManager: FileManager;
    constructor(fileManager: FileManager) {
        this.fileManager = fileManager;
    }

    public cloneListOfRespoitories() {
        const listOfRepositories = this.fileManager.getListOfRespositoriesFromFile();
        const output = this.fileManager.createFolderForSaveRespositories();
        Logger.log(`Se van a clonar el siguiente listado de repositorios:`);
        Logger.log(listOfRepositories);
        listOfRepositories.forEach((repository) => {
            const command = `git clone ${repository}  ${output}/${repository.split('.com/').pop()}`;

            exec(command, (cloneError, stdout, stderr) => {
                if (cloneError) {
                    Logger.error(`Error al clonar ${repository}: ${cloneError.message}`);
                    return;
                }
                Logger.log(`Repositorio clonado: ${repository}`);
            });
        });
    }
}
