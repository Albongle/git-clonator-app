import * as fileSystem from 'fs';
import logger from './logger';

export class FileManager {
    private pathFolderToSave: string;
    private pathListRespositories: string;
    constructor(pathListRespositories: string, pathFolderToSave: string) {
        this.pathListRespositories = pathListRespositories;
        this.pathFolderToSave = pathFolderToSave;
    }

    public createFolderForSaveRespositories(): string {
        logger
            .getLogger()
            .info(`Los respositorios clonados se almacenaran en la siguiente ruta: ***${this.pathFolderToSave}***`);

        if (!fileSystem.existsSync(this.pathFolderToSave)) {
            fileSystem.mkdir(this.pathFolderToSave, { recursive: true }, (error) => {
                if (error) {
                    const message = `Error al crear la carpeta: ${error.message}`;
                    logger.getLogger('error').error(message);
                    throw new Error(message);
                }
                logger.getLogger().info(`Carpeta creada: ${this.pathFolderToSave}`);
            });
        } else {
            logger.getLogger().info(`Carpeta contenerdora existente ${this.pathFolderToSave}`);
        }
        return this.pathFolderToSave;
    }

    public getListOfRespositoriesFromFile(): string[] {
        try {
            if (fileSystem.existsSync(this.pathListRespositories)) {
                logger.getLogger().info(`Buscando repositorios en el archivo: ***${this.pathListRespositories}***`);
                const data = fileSystem.readFileSync(this.pathListRespositories, { encoding: 'utf-8' });
                const listOfRepositories = data.replace(/\r/g, '').trim().split('\n');
                return listOfRepositories;
            } else {
                const message = `No existe el archivo con los repositorios ${this.pathListRespositories}`;
                logger.getLogger().error(message);
                throw new Error(message);
            }
        } catch (error: any) {
            const message = `Error al leer el archivo ${error.message}`;
            logger.getLogger('error').error(message);
            throw new Error(message);
        }
    }
}
