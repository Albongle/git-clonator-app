import { FileManager } from './file-manager';
import logger from './logger';
import { exec } from 'child_process';

export class GitClonator {
    private fileManager: FileManager;
    constructor(fileManager: FileManager) {
        this.fileManager = fileManager;
    }

    public cloneListOfRespoitories() {
        const listOfRepositories = this.fileManager.getListOfRespositoriesFromFile();
        const output = this.fileManager.createFolderForSaveRespositories();
        logger.getLogger().info(`Se van a clonar el siguiente listado de repositorios:`);
        logger.getLogger().info(listOfRepositories);
        listOfRepositories.forEach((repository) => {
            const command = `git clone ${repository}  ${output}/${repository.split('.com/').pop()}`;

            exec(command, (cloneError, stdout, stderr) => {
                if (cloneError) {
                    logger.getLogger('error').error(`Error al clonar ${repository}: ${cloneError.message}`);
                    return;
                }
                logger.getLogger().info(`Repositorio clonado: ${repository}`);
            });
        });
    }
}
